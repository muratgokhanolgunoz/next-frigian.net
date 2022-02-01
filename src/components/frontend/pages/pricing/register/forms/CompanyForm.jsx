import React, { useContext, useEffect, useState } from "react";
import PricingContext from "../../../../../../../_store/PricingContext";
import RegisterServices from "../../../../../../../_services/RegisterService";
import NavigationButtons from "./NavigationButtons";
import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { showToast } from "../../../../../../../_core/functions";
import ReactSelect from "react-select";
import { FaBullseye } from "react-icons/fa";

const CompanyForm = () => {
    const { t } = useTranslation("common");
    let registerServices = new RegisterServices();
    const pricingContext = useContext(PricingContext);

    const [countries, setCountries] = useState(null);
    const [location, setLocation] = useState({
        value: null,
        label: null,
    });

    useEffect(() => {
        getAllCountries();
        getCountryInfo();
        window.scrollTo(0, 250);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (location.value && location.label) {
            onChangeSelectCountry({
                value: location.value,
                label: location.label,
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    const setNextPageLog = () => {
        registerServices
            .setNextPageLog()
            .then(() => console.log("Click to next page button"))
            .catch(() => console.warn("Error : Click to next page button"));
    };

    const getAllCountries = () => {
        try {
            registerServices
                .getAllCountries()
                .then(({ data, status, statusText }) => {
                    if (status === 200) {
                        setCountries(
                            data.countries.map((item) => ({
                                value: item.id,
                                label: item.name,
                            }))
                        );
                    } else {
                        showToast("bottom-right", statusText, "error");
                        console.warn(statusText);
                    }
                });
        } catch (error) {
            showToast("bottom-right", error, "error");
            console.warn(error);
        }
    };

    const getCountryInfo = () => {
        try {
            registerServices
                .getCountryInfo()
                .then(({ data, status, statusText }) => {
                    if (status === 200) {
                        setLocation({
                            value: data.countryId,
                            label: data.countryName,
                        });
                    } else {
                        showToast("bottom-right", statusText, "error");
                        console.warn(statusText);
                    }
                });
        } catch (error) {
            showToast("bottom-right", error, "error");
            console.warn(error);
        }
    };

    const onChangeSelectCountry = (_country) => {
        pricingContext.setCountry(_country);
    };

    const formValidation = () => {
        if (
            !pricingContext.state.country.value ||
            !pricingContext.state.country.label ||
            pricingContext.state.taxNo === "" ||
            pricingContext.state.companyName === "" ||
            pricingContext.state.phone === "" ||
            pricingContext.state.website === "" ||
            pricingContext.state.address === ""
        ) {
            showToast(
                "bottom-right",
                t("register.notification.FORM_VALIDATION"),
                "error"
            );
        } else {
            pricingContext.setRegisterPage();
            setNextPageLog();
        }
    };

    return (
        <div id="company-form">
            <Container className="section-padding">
                <Row>
                    <Col lg={{ offset: 3, span: 6 }} className="register-form">
                        <div>
                            <p
                                style={{
                                    fontSize: "1.5em",
                                    width: "100%",
                                    textAlign: "center",
                                }}>
                                <b>{t("register.description")}</b>
                            </p>
                        </div>
                        {/* <div className="contact-form-item">
                            <label>* {t("register.companyForm.COUNTRY")}</label>
                            <input
                                type="text"
                                placeholder=""
                                value={pricingContext.state.countryName}
                                disabled></input>
                        </div> */}
                        <div className="contact-form-item">
                            <label>* {t("register.companyForm.COUNTRY")}</label>
                            <ReactSelect
                                options={countries}
                                value={pricingContext.state.country}
                                onChange={(e) => onChangeSelectCountry(e)}
                                isLoading={countries === null ? true : false}
                                isClearable={true}
                                isSearchable={true}
                                placeholder={t(
                                    "register.companyForm.COUNTRY_PLACEHOLDER"
                                )}
                                styles={{
                                    option: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: state.isFocused
                                            ? "red"
                                            : "blue",
                                        backgroundColor: state.isSelected
                                            ? "var(--color-1)"
                                            : "#fff",
                                        color: state.isSelected
                                            ? "var(--color-3)"
                                            : "var(--color-2)",
                                        ":hover": {
                                            backgroundColor: "var(--color-2)",
                                            color: "#fff",
                                            cusor: "pointer",
                                        },
                                    }),
                                    control: (provided) => ({
                                        ...provided,
                                        padding: 4,
                                        borderRadius: 0,
                                        boxShadow: "none",
                                        borderColor: "lightgray",
                                        ":hover": {
                                            borderColor: "var(--color-1)",
                                        },
                                    }),
                                }}
                            />
                        </div>
                        <div className="contact-form-item">
                            <label>* {t("register.companyForm.TAX_NO")}</label>
                            <input
                                type="text"
                                placeholder=""
                                value={pricingContext.state.taxNo}
                                onChange={(e) =>
                                    pricingContext.setTaxNo(e.target.value)
                                }></input>
                        </div>

                        <div className="contact-form-item">
                            <label>
                                * {t("register.companyForm.COMPANY_NAME")}
                            </label>
                            <input
                                type="text"
                                placeholder=""
                                value={pricingContext.state.companyName}
                                onChange={(e) =>
                                    pricingContext.setCompanyName(
                                        e.target.value
                                    )
                                }></input>
                        </div>

                        <div className="contact-form-item">
                            <label>* {t("register.companyForm.PHONE")}</label>
                            <input
                                type="text"
                                placeholder=""
                                value={pricingContext.state.phone}
                                onChange={(e) =>
                                    pricingContext.setPhone(e.target.value)
                                }></input>
                        </div>

                        <div className="contact-form-item">
                            <label>* {t("register.companyForm.WEBSITE")}</label>
                            <input
                                type="text"
                                placeholder=""
                                value={pricingContext.state.website}
                                onChange={(e) =>
                                    pricingContext.setWebSite(e.target.value)
                                }></input>
                        </div>

                        <div className="contact-form-item">
                            <label>* {t("register.companyForm.ADDRESS")}</label>
                            <textarea
                                type="text"
                                placeholder=""
                                rows="5"
                                value={pricingContext.state.address}
                                onChange={(e) =>
                                    pricingContext.setAddress(e.target.value)
                                }>
                                {pricingContext.state.address}
                            </textarea>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col
                        lg={{ offset: 3, span: 6 }}
                        className="register-form"
                        style={{ marginTop: "20px" }}>
                        <NavigationButtons
                            handleFormValidation={formValidation}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CompanyForm;
