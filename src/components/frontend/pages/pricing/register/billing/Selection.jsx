import React, { useContext, useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { Form } from "react-bootstrap";
import PricingContext from "../../../../../../../_store/PricingContext";
import { FiDollarSign } from "react-icons/fi";

const Selection = () => {
    const { t } = useTranslation("common");
    const pricingContext = useContext(PricingContext);
    const [select, setSelect] = useState("");

    useEffect(() => {
        setSelect(pricingContext.state.registrationYearMonth);
    }, [pricingContext.state.registrationYearMonth]);

    const handleChange = (_selection) => {
        pricingContext.setRegistrationYearMonth(_selection);
    };

    return (
        <div id="selection">
            <div className="selection-item">
                <Form.Check
                    className="selection-radio"
                    name="select"
                    type="radio"
                    checked={select === "1" ? true : false}
                    value="1"
                    label={t("register.pricingForm.YEARLY_PAYMENT")}
                    onChange={(e) => handleChange(e.target.value)}
                />
                <span>
                    &emsp;
                    <b>
                        [ <FiDollarSign />
                        {pricingContext.state.packageYearlyPrice
                            .toString()
                            .replace(".", ",")}{" "}
                        + {t("register.pricingForm.CAMPAIGN_TAX_ABBREVIATION")}{" "}
                        ]
                    </b>
                </span>
            </div>
            <div className="selection-item">
                <Form.Check
                    className="selection-radio"
                    name="select"
                    type="radio"
                    checked={select === "2" ? true : false}
                    value="2"
                    label={t("register.pricingForm.MONTHLY_PAYMENT")}
                    onChange={(e) => handleChange(e.target.value)}
                />
                <span>
                    &emsp;
                    <b>
                        [ <FiDollarSign />
                        {pricingContext.state.packageMonthlyPrice
                            .toString()
                            .replace(".", ",")}{" "}
                        + {t("register.pricingForm.CAMPAIGN_TAX_ABBREVIATION")}{" "}
                        ]
                    </b>
                </span>
            </div>
        </div>
    );
};

export default Selection;
