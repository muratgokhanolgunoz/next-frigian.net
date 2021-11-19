import React, { useContext, Fragment } from "react";
import PricingContext from "../../../../../../../_store/PricingContext";
import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";

import { Row, Col } from "react-bootstrap";

const NavigationButtons = (props) => {
    const { t } = useTranslation("common");
    const pricingContext = useContext(PricingContext);

    return (
        <div id="pricing-navigation-button">
            <Row>
                {pricingContext.state.registerPage % 2 === 0 ? (
                    <Fragment>
                        <Col lg={6}>
                            <div className="contact-form-item">
                                <button
                                    className="template-button template-button-dark"
                                    onClick={() => pricingContext.setDefault()}
                                >
                                    {t("buttons.PREVIOUS")}
                                </button>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="contact-form-item">
                                <button
                                    className="template-button template-button-dark"
                                    onClick={() => props.handleFormValidation()}
                                >
                                    {t("buttons.NEXT")}
                                </button>
                            </div>
                        </Col>
                    </Fragment>
                ) : (
                    <Fragment>
                        <Col sm={6}>
                            <div className="contact-form-item">
                                <button
                                    type="button"
                                    className="template-button template-button-dark"
                                    onClick={() =>
                                        props.handleNavigationButton()
                                    }
                                >
                                    {t("buttons.PREVIOUS")}
                                </button>
                            </div>
                        </Col>

                        <Col sm={6}>
                            {!props.statusOfCompanyLogo && (
                                <div className="contact-form-item">
                                    <button
                                        type="submit"
                                        onClick={() => props.handleSave()}
                                        className="template-button template-button-dark"
                                    >
                                        {t("buttons.SAVE")}
                                    </button>
                                </div>
                            )}
                        </Col>
                    </Fragment>
                )}
            </Row>
        </div>
    );
};

NavigationButtons.propTypes = {
    handleFormValidation: PropTypes.func,
    handleNavigationButton: PropTypes.func,
    handleSave: PropTypes.func,
};

export default NavigationButtons;
