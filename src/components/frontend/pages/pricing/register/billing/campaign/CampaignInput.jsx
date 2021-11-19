import React, { useContext, useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import PricingContext from "../../../../../../../../_store/PricingContext";
import RegisterServices from "../../../../../../../../_services/RegisterService";

const CampaignInput = () => {
    const { t } = useTranslation("common");
    const registerServices = new RegisterServices();
    const pricingContext = useContext(PricingContext);
    const [code, setCode] = useState("");

    useEffect(() => {
        setCode(pricingContext.state.campaignCodeTemp);
    }, [pricingContext.state.campaignCodeTemp]);

    const handleChange = (_value) => {
        pricingContext.setCampaignCodeTemp(_value);
        if (_value.length > 0) {
            registerServices
                .getDiscount(_value)
                .then((response) => {
                    if (parseFloat(response.data.discount) > 0) {
                        pricingContext.setCampaignCode(_value);
                    } else {
                        pricingContext.setCampaignCode("");
                    }

                    pricingContext.setCampaignCodeStatusOfInput(true);
                    pricingContext.setCampaignCodeImage(
                        response.data.reseller_photo
                    );
                    pricingContext.setCampaignReseller(
                        response.data.reseller_name
                    );
                    pricingContext.setCampaignCodeDiscount(
                        parseFloat(response.data.discount)
                    );

                    pricingContext.calculateYearlyPrice();
                    pricingContext.calculateMonthlyPrice();
                })
                .catch(() => console.warn("Error: Get discount"));
        } else {
            pricingContext.setCampaignCodeStatusOfInput(false);
            pricingContext.setCampaignCodeImage("");
            pricingContext.setCampaignReseller("");
            pricingContext.setCampaignCodeDiscount(0);

            pricingContext.calculateYearlyPrice();
            pricingContext.calculateMonthlyPrice();
        }
    };

    return (
        <div id="campain-input">
            <div className="contact-form-item">
                <label>{t("register.pricingForm.CAMPAIGN_CODE")}</label>
                <input
                    type="text"
                    placeholder=""
                    value={code}
                    onChange={(e) => handleChange(e.target.value)}
                ></input>
            </div>
        </div>
    );
};

export default CampaignInput;
