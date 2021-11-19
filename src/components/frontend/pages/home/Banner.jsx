import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import style from "../../../../../styles/Banner.module.scss";

const Banner = () => {
    const { t } = useTranslation("common");

    const styles = {
        background: "url(./assets/img/frigian-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
    };

    return (
        <div id="banner" className={style.banner} style={styles}>
            <div className={style.bannerText}>
                <h1>{t("home.banner.BANNER_HEADER")}</h1>
                <p>{t("home.banner.BANNER_CONTENT")}</p>
                <br />
                <Link href="/pricing">
                    <a
                        className="template-button template-button-orange"
                        rel="noreferrer nope"
                    >
                        {t("buttons.CHECK_PACKAGES")}
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default Banner;
