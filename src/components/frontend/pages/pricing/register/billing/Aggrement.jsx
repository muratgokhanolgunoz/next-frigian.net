import React, { useContext } from "react";
import { useTranslation } from "next-i18next";
import { Form } from "react-bootstrap";
import PricingContext from "../../../../../../../_store/PricingContext";
import { useRouter } from "next/router";

const Aggrement = () => {
    const { t, i18n } = useTranslation("common");
    const router = useRouter();
    const { locale } = router;
    const pricingContext = useContext(PricingContext);

    const handleChange = (_e) => {
        pricingContext.setAggrementCheckedStatus(_e.target.checked);
    };

    return (
        <div id="pricing-aggrement">
            <Form.Check
                className="selection-radio"
                type="checkbox"
                checked={
                    pricingContext.state.aggrementCheckedStatus === true
                        ? true
                        : false
                }
                onChange={(e) => handleChange(e)}
            />
            <a
                href={
                    "./assets/agreement/frigian-net-" +
                    locale +
                    "-agreement.html"
                }
                target="_blank"
                rel="nopenner noreferrer"
            >
                <span>{t("register.pricingForm.AGGREMENT_TEXT")}</span>
            </a>
        </div>
    );
};

export default Aggrement;
