import React, { useContext, Fragment } from "react";
import PricingContext from "../../../../../../../_store/PricingContext";
import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";
import { FaCheck } from "react-icons/fa";
import { Row, Col, Badge } from "react-bootstrap";

const NavigationButtons = (props) => {
    const { t } = useTranslation("common");
    const pricingContext = useContext(PricingContext);

    return (
        <div id="pricing-navigation-button">
            <Row style={{ paddingTop: "10px" }}>
                <Col md="6">
                    <h5>
                        <Badge
                            bg={
                                pricingContext.state.registerPage % 2 === 0
                                    ? "dark"
                                    : "success"
                            }>
                            {pricingContext.state.registerPage % 2 !== 0 && (
                                <FaCheck />
                            )}
                            &emsp;{t("register.wizard.WIZARD_STEP_1")}&emsp;
                        </Badge>{" "}
                        {t("register.wizard.WIZARD_STEP_1_LABEL")}
                    </h5>
                </Col>
                <Col md="6">
                    <h5>
                        <Badge bg="dark">
                            &emsp;{t("register.wizard.WIZARD_STEP_2")}&emsp;
                        </Badge>{" "}
                        {t("register.wizard.WIZARD_STEP_2_LABEL")}
                    </h5>
                </Col>
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
