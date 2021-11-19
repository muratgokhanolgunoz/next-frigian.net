import React from "react";
import { useTranslation } from "react-i18next";
import SectionBanner from "../../constants/SectionBanner";
import History from "./History";
import HowToJoin from "./HowToJoin";
import Team from "./Team";

const Index = () => {
    const { t } = useTranslation("common");

    return (
        <div id="about">
            <SectionBanner
                title={t("about.banner.ABOUT_BANNER_TITLE")}
                breadcrumbPrevText={t("navbar.NAVBAR_ITEM_HOME")}
                breadcrumbPrevLink="/"
                breadcrumbCurrentText={t("navbar.NAVBAR_ITEM_ABOUT")}
            />
            <History />
            <HowToJoin />
            <Team />
        </div>
    );
};

export default Index;
