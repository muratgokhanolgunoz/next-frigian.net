import React from "react";
import PropTypes from "prop-types";
import style from "../../../../styles/SectionBanner.module.scss";

const SectionBanner = (props) => {
    const styles = {
        background: "url(./assets/img/frigian-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
    };

    const { title, breadcrumbCurrentText, breadcrumbPrevLink, breadcrumbPrevText } = props;

    return (
        <div id="section-banner" className={style.sectionBanner} style={styles}>
            <div className={style.sectionBannerText}>
                <h1>{title}</h1>
                <ul>
                    <li>
                        <a href={breadcrumbPrevLink}>
                            {breadcrumbPrevText}
                        </a>
                    </li>
                    <li>
                        <span>{">"}</span>
                    </li>
                    <li>
                        <span>{breadcrumbCurrentText}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

SectionBanner.propTypes = {
    title: PropTypes.string.isRequired,
    breadcrumbPrevText: PropTypes.string.isRequired,
    breadcrumbPrevLink: PropTypes.string.isRequired,
    breadcrumbCurrentText: PropTypes.string.isRequired,
};

export default SectionBanner;
