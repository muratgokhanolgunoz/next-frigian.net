import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import style from "../../../../styles/CookieBanner.module.scss";
import { FaTimes } from "react-icons/fa";

const CookieBanner = ({ funcSetCookie, funcSetCookieBannerShow }) => {
    const { t } = useTranslation("common");
    const router = useRouter();

    return (
        <div>
            <div className={style.cookieBanner}>
                <span className={style.close}>
                    <FaTimes onClick={() => funcSetCookieBannerShow(false)} />
                </span>
                <h5>{t("privacy.PRIVACY_HEADER")}</h5>
                <p>{t("privacy.PRIVACY_TEXT")}</p>
                <button
                    className={`${style.cookieBannerButton} template-button template-button-primary-1`}
                    onClick={() => funcSetCookie(router.locale)}>
                    {t("privacy.PRIVACY_BUTTON")}
                </button>
            </div>
        </div>
    );
};

CookieBanner.propTypes = {
    funcSetCookie: PropTypes.func.isRequired,
    funcSetCookieBannerShow: PropTypes.func.isRequired,
};

export default CookieBanner;
