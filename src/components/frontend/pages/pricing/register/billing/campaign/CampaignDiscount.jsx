/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import PricingContext from "../../../../../../../../_store/PricingContext";
import { useTranslation } from "next-i18next";
import { Image } from "react-bootstrap";

const CampaignDiscount = () => {
    const { t } = useTranslation("common");
    const pricingContext = useContext(PricingContext);

    return (
        <div id="campaign-discount">
            <div id="campaign-success">
                <Image
                    className="campaign-discount-thumb"
                    src={pricingContext.state.campaignCodeImage}
                ></Image>
                <div className="campaign-discount-reseller">
                    <span>
                        <b>
                            {pricingContext.state.campaignCodeReseller ===
                            "INVALID_CODE"
                                ? t("register.pricingForm.CAMPAIGN_ERROR")
                                : pricingContext.state.campaignCodeReseller}
                        </b>
                    </span>
                    <span
                        className={
                            pricingContext.state.campaignCodeDiscount > 0
                                ? "color-green"
                                : null
                        }
                    >
                        <small>
                            %{pricingContext.state.campaignCodeDiscount}{" "}
                            {t("register.pricingForm.CAMPAIGN_DISCOUNT")}
                        </small>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CampaignDiscount;
