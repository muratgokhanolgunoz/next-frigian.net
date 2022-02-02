/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import PricingContext from "../../../../../../../_store/PricingContext";
import { useTranslation } from "next-i18next";
import RegisterService from "../../../../../../../_services/RegisterService";
import {
    makeRandomCharacter,
    showToast,
} from "../../../../../../../_core/functions";
import PropTypes from "prop-types";
import { Modal, Image } from "react-bootstrap";

const PopupCompanyLogo = (props) => {
    const pricingContext = useContext(PricingContext);
    const { t } = useTranslation("common");
    let registerService = new RegisterService();

    const uploadCompanyLogo = () => {
        if (pricingContext.state.subdomain !== "") {
            var file = new File(
                [props.companyLogoBlob],
                makeRandomCharacter(10),
                { type: "image/png" }
            );

            if (file.size <= 1048576) {
                const payload = new FormData();
                payload.append("file", file);
                payload.append("subdomain", pricingContext.state.subdomain);

                registerService
                    .uploadLogo(payload)
                    .then((response) => {
                        if (response.status === 200) {
                            pricingContext.setCompanyLogo(response.data.img);
                            pricingContext.setTempCompanyLogo(
                                response.data.img
                            );
                            props.companyLogoHandleChange(undefined);
                            props.companyPopupHandleClose(false);
                            props.companyLogoRefClear();
                            showToast(
                                "bottom-right",
                                t(
                                    "register.notification.LOGO_UPLOAD_SUCCESS_MESSAGE"
                                ),
                                "success"
                            );
                            return response;
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
    };

    return (
        <div>
            <Modal
                show={props.companyPopupShow}
                onHide={() => props.companyPopupHandleClose()}>
                <Modal.Header style={{ backgroundColor: "#fff" }}>
                    <Modal.Title>
                        {t("register.pricingForm.COMPANY_LOGO_CONFIRMATION")}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "#fff" }}>
                    <Image
                        src={props.companyLogoDataUri}
                        style={{
                            border: "1px solid lightgray",
                            display: "block",
                            margin: "auto",
                        }}
                        fluid></Image>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: "#fff" }}>
                    <button
                        className="template-button template-button-dark"
                        style={{ fontSize: "1em" }}
                        onClick={() => uploadCompanyLogo()}>
                        EVET
                    </button>
                    <button
                        className="template-button template-button-dark"
                        style={{ fontSize: "1em" }}
                        onClick={() => props.companyPopupHandleClose()}>
                        HAYIR
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

PopupCompanyLogo.propTypes = {
    companyPopupShow: PropTypes.bool.isRequired,
    companyPopupHandleClose: PropTypes.func.isRequired,
    companyLogoHandleChange: PropTypes.func.isRequired,
    companyLogoDataUri: PropTypes.string.isRequired,
    companyLogoBlob: PropTypes.object.isRequired,
    companyLogoRefClear: PropTypes.func.isRequired,
};

export default PopupCompanyLogo;
