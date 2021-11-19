import React, { useContext } from "react";
import { useTranslation } from "next-i18next";
import PricingContext from "../../../../../../../_store/PricingContext";
import { Row, Col } from "react-bootstrap";

const Header = () => {
    const { t } = useTranslation("common");
    const pricingContext = useContext(PricingContext);

    const packages = [
        {
            name: t("pricing.items.startup.TITLE"),
        },
        {
            name: t("pricing.items.business.TITLE"),
        },
    ];

    const handleChange = (_value) => {
        if (_value > 3) {
            const promise = new Promise(function (resolve, reject) {
                pricingContext.setPackageUsers(parseInt(_value));
                resolve();
            });

            promise.then(() => {
                pricingContext.calculateYearlyPrice();
                pricingContext.calculateMonthlyPrice();
            });
        }
    };

    return (
        <div>
            <Row>
                <Col lg={9} md={12}>
                    <div id="billing-header">
                        <h4>
                            <b>{t("register.pricingForm.PACKAGE")} : </b>{" "}
                            {packages[pricingContext.state.packageId - 1].name}
                        </h4>
                    </div>
                </Col>

                <Col lg={3} md={12}>
                    <div
                        id="package-users-input"
                        style={{
                            backgroundColor: "var(--color-2)",
                            color: "#fff",
                        }}
                    >
                        <div className="contact-form-item">
                            <label>
                                {t("register.pricingForm.NUMBER_OF_USERS")}
                            </label>
                            <input
                                type="number"
                                style={{
                                    borderColor: "#fff",
                                    color: "#fff",
                                    cursor:
                                        pricingContext.state.packageId === 1
                                            ? "no-drop"
                                            : "auto",
                                }}
                                min={
                                    pricingContext.state.packageId === 1 ? 4 : 5
                                }
                                max={
                                    pricingContext.state.packageId === 1
                                        ? 4
                                        : 30
                                }
                                readOnly={
                                    pricingContext.state.packageId === 1
                                        ? true
                                        : false
                                }
                                value={pricingContext.state.packageUsers}
                                onChange={(e) => handleChange(e.target.value)}
                            ></input>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Header;
