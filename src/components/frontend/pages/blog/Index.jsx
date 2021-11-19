import React from "react";
import { useTranslation } from "next-i18next";
import SectionBanner from "../../constants/SectionBanner";
import BlogList from "./BlogList";

const Index = ({ blogs }) => {
    const { t } = useTranslation("common");
    return (
        <div id="blogs">
            <SectionBanner
                title={t("blog.banner.BLOG_BANNER_TITLE")}
                breadcrumbPrevText={t("navbar.NAVBAR_ITEM_HOME")}
                breadcrumbPrevLink="/"
                breadcrumbCurrentText={t("navbar.NAVBAR_ITEM_BLOG")}
            />
            <BlogList blogs={blogs} />
        </div>
    );
};
export default Index;
