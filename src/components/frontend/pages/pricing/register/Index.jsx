import React, { useContext } from "react";
import { useTranslation } from "next-i18next";
import PricingContext from "../../../../../../_store/PricingContext";
import SectionBanner from "../../../../frontend/constants/SectionBanner";
import CompanyForm from "./forms/CompanyForm";
import PricingForm from "./forms/PricingForm";

const Index = (_) => {
    const { t } = useTranslation("common");
    const pricingContext = useContext(PricingContext);

    return (
        <div id="register">
            <SectionBanner
                title={t("register.banner.TITLE")}
                breadcrumbPrevText={t("navbar.NAVBAR_ITEM_HOME")}
                breadcrumbPrevLink="/"
                breadcrumbCurrentText={t("navbar.NAVBAR_ITEM_PRICING")}
            />
            {pricingContext.state.registerPage % 2 === 0 ? (
                <CompanyForm />
            ) : (
                <PricingForm />
            )}
        </div>
    );
};

export default Index;
