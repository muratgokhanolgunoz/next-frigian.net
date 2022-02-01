/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-sequences */
import React, { useContext, useState, useEffect, useRef } from "react";
import PricingContext from "../../../../../../../_store/PricingContext";
import RegisterService from "../../../../../../../_services/RegisterService";
import { useTranslation } from "next-i18next";
import {
    // dataUriToBlob,
    showToast,
    validateEmail,
} from "../../../../../../../_core/functions";
import NavigationButtons from "./NavigationButtons";
import Billing from "../billing/Index";
// import PopupCompanyLogo from "./PopupCompanyLogo";
import Cropper from "react-cropper";
// import Resizer from "react-image-file-resizer";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";

import "cropperjs/dist/cropper.css";
import "react-toastify/dist/ReactToastify.css";

const subdomainInputStylesTrue = {
    color: "green",
    fontWeight: "bold",
    letterSpacing: "1px",
};

const subdomainInputStylesFalse = {
    color: "red",
    fontWeight: "bold",
    letterSpacing: "1px",
};

const PricingForm = () => {
    const { t } = useTranslation("common");
    const pricingContext = useContext(PricingContext);
    let registerService = new RegisterService();
    let formError = false;

    const fileCompanyLogoRef = useRef();
    const fileCompanyDocumentRef = useRef();

    const [companyLogo, setCompanyLogo] = useState(undefined);
    // const [croppedCompanyLogoDataIri, setCroppedCompanyLogoDataUri] =
    //     useState("");
    // const [croppedCompanyLogoBlob, setCroppedCompanyLogoBlob] = useState({});
    const [cropperCompanyLogo, setCropperCompanyLogo] = useState(undefined);
    //const [popupShow, setPopupShow] = useState(false);
    // const popupHandleClose = () => setPopupShow(false);
    // const popupHandleShow = () => setPopupShow(true);

    useEffect(() => {
        pricingContext.calculateYearlyPrice();
        pricingContext.calculateMonthlyPrice();
        window.scrollTo(0, 250);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setPrevPageLog = () => {
        registerService
            .setPrevPageLog()
            .then(() => console.log("Click to previous page button"))
            .catch(() => console.warn("Error : Click to previous page button"));
    };

    const navigationButton = () => {
        pricingContext.setRegisterPage();
        setPrevPageLog();
    };

    const handleSubdomain = (_value) => {
        pricingContext.setTempSubdomain(_value);
        if (_value.length >= 3) {
            registerService
                .checkSubDomain(_value)
                .then((response) => {
                    if (response.data.exist === 0) {
                        pricingContext.setSubdomainStatus(true);
                        pricingContext.setSubDomain(_value);
                    } else {
                        pricingContext.setSubdomainStatus(false);
                        pricingContext.setSubDomain("");
                    }
                })
                .catch(() => {
                    showToast("bottom-right", error, "error");
                    console.warn("Error : Error occurred in subdomain control");
                });
        } else if (_value.length < 3) {
            pricingContext.setSubdomainStatus(false);
            pricingContext.setSubDomain("");
        }
    };

    // const closeCropperArea = () => {
    //     setCompanyLogo(undefined);
    //     clearCompanyLogoRef();
    //     pricingContext.setTempCompanyLogo(pricingContext.state.companyLogo);
    // };

    // const imageOnChange = (_file) => {
    //     if (pricingContext.state.subdomain !== "") {
    //         if (_file.size <= 1048576) {
    //             const reader = new FileReader();
    //             reader.onload = () => {
    //                 setCompanyLogo(reader.result);
    //             };
    //             reader.readAsDataURL(_file);
    //             pricingContext.setTempCompanyLogo("");
    //         } else {
    //             showToast(
    //                 "bottom-right",
    //                 t("register.notification.LOGO_UPLOAD_FILE_SIZE_ERROR"),
    //                 "error"
    //             );
    //         }
    //     } else {
    //         showToast(
    //             "bottom-right",
    //             t("register.notification.DEFINE_SUBDOMAIN"),
    //             "error"
    //         );
    //     }
    // };

    const clearCompanyLogoRef = () => {
        fileCompanyLogoRef.current.value = "";
    };

    const clearCompanyDocumentRef = () => {
        fileCompanyDocumentRef.current.value = "";
    };

    // const resizeCompanyPhoto = (_file, _type, _function) => {
    //     // 1 => blob
    //     // 2 => base64

    //     try {
    //         Resizer.imageFileResizer(
    //             _file,
    //             350,
    //             350,
    //             "PNG",
    //             100,
    //             0,
    //             (uri) => {
    //                 _function(uri);
    //             },
    //             _type === 1 ? "blob" : "base64",
    //             350,
    //             0
    //         );
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    // const getCroppedCompanyLogo = () => {
    //     if (typeof cropperCompanyLogo !== "undefined") {
    //         // for upload from api
    //         resizeCompanyPhoto(
    //             dataUriToBlob(
    //                 cropperCompanyLogo.getCroppedCanvas().toDataURL(),
    //                 "image/png"
    //             ),
    //             1,
    //             setCroppedCompanyLogoBlob
    //         );

    //         // for view
    //         resizeCompanyPhoto(
    //             dataUriToBlob(
    //                 cropperCompanyLogo.getCroppedCanvas().toDataURL(),
    //                 "image/png"
    //             ),
    //             2,
    //             setCroppedCompanyLogoDataUri
    //         );
    //         popupHandleShow(true);
    //     }
    // };

    const documentOnChange = (_doc) => {
        if (pricingContext.state.subdomain !== "") {
            if (_doc.size <= 5242880) {
                const payload = new FormData();
                payload.append("file", _doc);
                payload.append("subdomain", pricingContext.state.subdomain);

                registerService
                    .uploadDocument(payload)
                    .then((response) => {
                        if (response.status === 200) {
                            pricingContext.setCompanyDoc(response.data.img);
                            showToast(
                                "bottom-right",
                                t(
                                    "register.notification.DOCUMENT_UPLOAD_SUCCESS_MESSAGE"
                                ),
                                "success"
                            );
                        } else {
                            showToast(
                                "bottom-right",
                                t(
                                    "register.notification.DOCUMENT_UPLOAD_ERROR_MESSAGE"
                                ),
                                "error"
                            );
                        }
                    })
                    .catch(() =>
                        showToast(
                            "bottom-right",
                            t(
                                "register.notification.DOCUMENT_UPLOAD_ERROR_MESSAGE"
                            ),
                            "error"
                        )
                    );
            } else {
                showToast(
                    "bottom-right",
                    t("register.notification.DOCUMENT_UPLOAD_FILE_SIZE_ERROR"),
                    "error"
                );
            }
        } else {
            showToast(
                "bottom-right",
                t("register.notification.DEFINE_SUBDOMAIN"),
                "error"
            );
        }
        clearCompanyDocumentRef();
    };

    const imageOnChange = (_img) => {
        if (pricingContext.state.subdomain !== "") {
            if (_img.size <= 1048576) {
                const payload = new FormData();
                payload.append("file", _img);
                payload.append("subdomain", pricingContext.state.subdomain);

                registerService
                    .uploadLogo(payload)
                    .then(({ data, status }) => {
                        if (status === 200) {
                            pricingContext.setCompanyLogo(data.img);
                            showToast(
                                "bottom-right",
                                t(
                                    "register.notification.LOGO_UPLOAD_SUCCESS_MESSAGE"
                                ),
                                "success"
                            );
                        } else {
                            showToast(
                                "bottom-right",
                                t(
                                    "register.notification.LOGO_UPLOAD_ERROR_MESSAGE"
                                ),
                                "error"
                            );
                        }
                    })
                    .catch(() =>
                        showToast(
                            "bottom-right",
                            t(
                                "register.notification.LOGO_UPLOAD_ERROR_MESSAGE"
                            ),
                            "error"
                        )
                    );
            } else {
                showToast(
                    "bottom-right",
                    t("register.notification.LOGO_UPLOAD_FILE_SIZE_ERROR"),
                    "error"
                );
            }
        } else {
            showToast(
                "bottom-right",
                t("register.notification.DEFINE_SUBDOMAIN"),
                "error"
            );
        }
        clearCompanyLogoRef();
    };

    const save = () => {
        formError = false;

        if (
            pricingContext.state.subdomain === "" ||
            pricingContext.state.name === "" ||
            pricingContext.state.surname === "" ||
            pricingContext.state.mobile === "" ||
            pricingContext.state.personalEmail === "" ||
            pricingContext.state.adminEmail === "" ||
            pricingContext.state.senderEmail === ""
        ) {
            showToast(
                "bottom-right",
                t("register.notification.FORM_VALIDATION"),
                "error"
            );
            formError = true;
        }
        if (
            pricingContext.state.personalEmail !== "" &&
            !validateEmail(pricingContext.state.personalEmail)
        ) {
            showToast(
                "bottom-right",
                t("register.notification.PERSONAL_EMAIL"),
                "error"
            );
            formError = true;
        }
        if (
            pricingContext.state.adminEmail !== "" &&
            !validateEmail(pricingContext.state.adminEmail)
        ) {
            showToast(
                "bottom-right",
                t("register.notification.ADMIN_EMAIL"),
                "error"
            );
            formError = true;
        }
        if (
            pricingContext.state.senderEmail !== "" &&
            !validateEmail(pricingContext.state.senderEmail)
        ) {
            showToast(
                "bottom-right",
                t("register.notification.SENDER_EMAIL"),
                "error"
            );
            formError = true;
        }
        if (pricingContext.state.registrationYearMonth === "") {
            showToast(
                "bottom-right",
                t("register.notification.FORM_VALIDATION_PACKAGE"),
                "error"
            );
            formError = true;
        }
        if (pricingContext.state.companyLogo === "") {
            showToast(
                "bottom-right",
                t("register.notification.FORM_VALIDATION_COMPANY_LOGO"),
                "error"
            );
            formError = true;
        }
        if (pricingContext.state.aggrementCheckedStatus === false) {
            showToast(
                "bottom-right",
                t("register.notification.FORM_VALIDATION_AGGREMENT"),
                "error"
            );
            formError = true;
        }
        if (formError === false) {
            const payload = new FormData();
            payload.append("reg_address", pricingContext.state.address);
            payload.append("reg_admin_email", pricingContext.state.adminEmail);
            payload.append(
                "reg_campaign_code",
                pricingContext.state.campaignCode
            );
            payload.append("reg_company_doc", pricingContext.state.companyDoc);
            payload.append(
                "reg_company_logo",
                pricingContext.state.companyLogo
            );
            payload.append(
                "reg_country_id",
                pricingContext.state.country.value
            );
            payload.append("reg_email", pricingContext.state.personalEmail);
            payload.append("reg_firm_name", pricingContext.state.companyName);
            payload.append("reg_mobile", pricingContext.state.mobile);
            payload.append("reg_name", pricingContext.state.name);
            payload.append("reg_package_id", pricingContext.state.packageId);
            payload.append(
                "reg_sender_email",
                pricingContext.state.senderEmail
            );
            payload.append("reg_subdomain", pricingContext.state.subdomain);
            payload.append("reg_surname", pricingContext.state.surname);
            payload.append("reg_tax_no", pricingContext.state.taxNo);
            payload.append("reg_tel", pricingContext.state.phone);
            payload.append("reg_users", pricingContext.state.packageUsers);
            payload.append("reg_website", pricingContext.state.website);
            payload.append(
                "reg_year_month",
                pricingContext.state.registrationYearMonth
            );

            registerService
                .saveRegistration(payload)
                .then((response) =>
                    response.status === 200
                        ? (showToast(
                              "bottom-right",
                              t("register.notification.REGISTRATION_SUCCESS"),
                              "success"
                          ),
                          setTimeout(() => {
                              window.location.reload();
                          }, 3000))
                        : showToast(
                              "bottom-right",
                              t("register.notification.REGISTRATION_ERROR"),
                              "error"
                          )
                )
                .catch(() =>
                    showToast(
                        "bottom-right",
                        t("register.notification.REGISTRATION_ERROR"),
                        "error"
                    )
                );
        }
    };

    const handleFocusAdminEmail = () => {
        pricingContext.setAdminEmail(pricingContext.state.personalEmail);
    };

    return (
        <div id="pricing-form">
            <Container className="section-padding">
                <Row className="register-form">
                    <Col lg={6}>
                        <Row>
                            <Col md={6}>
                                <div className="contact-form-item">
                                    <label>
                                        * {t("register.pricingForm.SUBDOMAIN")}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        value={
                                            pricingContext.state.subdomainTemp
                                        }
                                        onChange={(e) =>
                                            handleSubdomain(e.target.value)
                                        }></input>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="contact-form-item">
                                    <label>
                                        {t(
                                            "register.pricingForm.SUBDOMAIN_CHECK"
                                        )}
                                    </label>
                                    <input
                                        id="pricing-input-subdomain"
                                        type="text"
                                        style={
                                            pricingContext.state
                                                .subdomainStatus === true
                                                ? subdomainInputStylesTrue
                                                : subdomainInputStylesFalse
                                        }
                                        placeholder=""
                                        value={
                                            pricingContext.state.subdomainTemp +
                                            ".frigian.net"
                                        }
                                        readOnly></input>
                                    <span
                                        id="pricing-input-subdomain-span"
                                        style={
                                            pricingContext.state
                                                .subdomainStatus === true
                                                ? subdomainInputStylesTrue
                                                : subdomainInputStylesFalse
                                        }>
                                        {pricingContext.state
                                            .subdomainStatus === true ? (
                                            <FaCheck />
                                        ) : (
                                            <FaTimes />
                                        )}
                                    </span>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6} md={12}>
                                <div className="contact-form-item">
                                    <label>
                                        * {t("register.pricingForm.NAME")}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        value={pricingContext.state.name}
                                        onChange={(e) =>
                                            pricingContext.setName(
                                                e.target.value
                                            )
                                        }></input>
                                </div>
                            </Col>
                            <Col lg={6} md={12}>
                                <div className="contact-form-item">
                                    <label>
                                        * {t("register.pricingForm.SURNAME")}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        value={pricingContext.state.surname}
                                        onChange={(e) =>
                                            pricingContext.setSurname(
                                                e.target.value
                                            )
                                        }></input>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6} md={12}>
                                <div className="contact-form-item">
                                    <label>
                                        *{" "}
                                        {t("register.pricingForm.MOBILE_PHONE")}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        value={pricingContext.state.mobile}
                                        onChange={(e) =>
                                            pricingContext.setMobile(
                                                e.target.value
                                            )
                                        }></input>
                                </div>
                            </Col>
                            <Col lg={6} md={12}>
                                <div className="contact-form-item">
                                    <label>
                                        * {t("register.pricingForm.EMAIL")}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        value={
                                            pricingContext.state.personalEmail
                                        }
                                        onChange={(e) =>
                                            pricingContext.setPersonalEmail(
                                                e.target.value
                                            )
                                        }></input>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6} md={12}>
                                <div className="contact-form-item">
                                    <label>
                                        *{" "}
                                        {t("register.pricingForm.ADMIN_EMAIL")}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        value={pricingContext.state.adminEmail}
                                        onFocus={() => handleFocusAdminEmail()}
                                        onChange={(e) =>
                                            pricingContext.setAdminEmail(
                                                e.target.value
                                            )
                                        }></input>
                                </div>
                            </Col>

                            <Col lg={6} md={12}>
                                <div className="contact-form-item">
                                    <label>
                                        *{" "}
                                        {t("register.pricingForm.SENDER_EMAIL")}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        value={pricingContext.state.senderEmail}
                                        onChange={(e) =>
                                            pricingContext.setSenderEmail(
                                                e.target.value
                                            )
                                        }></input>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <form>
                                    <div className="contact-form-item">
                                        <label>
                                            *{" "}
                                            {t(
                                                "register.pricingForm.COMPANY_LOGO"
                                            )}{" "}
                                            <b>[max : 1MB]</b>
                                        </label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            ref={fileCompanyLogoRef}
                                            onChange={(e) =>
                                                imageOnChange(e.target.files[0])
                                            }></input>
                                    </div>
                                </form>
                            </Col>
                            {/* {companyLogo !== undefined ? (
                                <React.Fragment>
                                    <Col md={12}>
                                        <Cropper
                                            initialAspectRatio={1}
                                            zoomTo={0}
                                            src={companyLogo}
                                            ref={cropperCompanyLogo}
                                            viewMode={1}
                                            autoCropArea={0}
                                            responsive={true}
                                            guides={true}
                                            background={true}
                                            checkOrientation={false}
                                            onInitialized={(instance) => {
                                                setCropperCompanyLogo(instance);
                                            }}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <button
                                            className="template-button template-button-green"
                                            style={{
                                                fontSize: "1em",
                                                float: "left",
                                                width: "100%",
                                            }}
                                            onClick={() =>
                                                getCroppedCompanyLogo()
                                            }
                                        >
                                            {t(
                                                "register.pricingForm.COMPANY_LOGO_UPLOAD"
                                            )}
                                        </button>
                                    </Col>
                                    <Col md={6}>
                                        <button
                                            className="template-button template-button-gray"
                                            style={{
                                                fontSize: "1em",
                                                float: "right",
                                                width: "100%",
                                            }}
                                            onClick={() => closeCropperArea()}
                                        >
                                            {t(
                                                "register.pricingForm.COMPANY_LOGO_CLOSE"
                                            )}
                                        </button>
                                    </Col>
                                </React.Fragment>
                            ) : null}*/}
                            {pricingContext.state.companyLogo !== "" ? (
                                <Col md={12}>
                                    <div id="view-upload-company-logo">
                                        <img
                                            src={
                                                "https://demo.frigian.net" +
                                                pricingContext.state.companyLogo
                                            }
                                            alt=""
                                        />
                                    </div>
                                </Col>
                            ) : null}
                        </Row>
                        <Row>
                            <Col md={12}>
                                <form>
                                    <div className="contact-form-item">
                                        <label>
                                            {t(
                                                "register.pricingForm.COMPANY_DOC"
                                            )}{" "}
                                            <b>[max : 5MB]</b>
                                        </label>
                                        <input
                                            type="file"
                                            accept="*"
                                            ref={fileCompanyDocumentRef}
                                            onChange={(e) =>
                                                documentOnChange(
                                                    e.target.files[0]
                                                )
                                            }></input>
                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <Billing />
                    </Col>
                </Row>
                <Row className="register-form" style={{ marginTop: "20px" }}>
                    <NavigationButtons
                        handleNavigationButton={navigationButton}
                        handleSave={save}
                        statusOfCompanyLogo={companyLogo}
                    />
                </Row>
            </Container>
        </div>
    );
};

export default PricingForm;
