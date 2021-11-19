import React, { useContext } from "react";
import PricingContext from "../../../../../_store/PricingContext";
import { useTranslation } from "next-i18next";
import SectionBanner from "../../constants/SectionBanner";
import SectionTitle from "../../constants/SectionTitle";
import packagePrices from "../../../../../public/packages/packages.json";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";
import style from "../../../../../styles/Packages.module.scss";

const Packages = () => {
    const { t } = useTranslation("common");
    const pricingContext = useContext(PricingContext);

    const setSelectedPackage = (
        _packageId,
        _packageUsers,
        _packageUnitPrice
    ) => {
        pricingContext.setPackageId(_packageId);
        pricingContext.setPackageUsers(_packageUsers);
        pricingContext.setPackageUnitPrice(_packageUnitPrice);
    };

    return (
        <div id="pricing">
            <SectionBanner
                title={t("pricing.banner.TITLE")}
                breadcrumbPrevText={t("navbar.NAVBAR_ITEM_HOME")}
                breadcrumbPrevLink="/"
                breadcrumbCurrentText={t("navbar.NAVBAR_ITEM_PRICING")}
            />

            <Container className="section-padding">
                <Row>
                    <SectionTitle
                        sectionTitle="section-title"
                        sectionSubTitle="section-subtitle"
                        textAlign="text-center"
                        titleColor="color-orange"
                        subtitleColor="color-dark"
                        title={t("pricing.title.TITLE")}
                        subtitle={t("pricing.title.SUBTITLE_1")}
                    />

                    <p className={style.pricingSubtitle2}>
                        {t("pricing.title.SUBTITLE_2")}
                    </p>
                </Row>
                <Row>
                    <Col className={style.pricingColumn} lg={4} md={6}>
                        <div className={style.pricingItem}>
                            <div
                                className={style.pricingItemHeader}
                                style={{
                                    backgroundColor: "var(--color-5)",
                                    border: "3px solid var(--color-5)",
                                }}
                            >
                                <h4>{t("pricing.items.startup.TITLE")}</h4>
                            </div>
                            <div
                                className={style.pricingItemBody}
                                style={{
                                    borderWidth: "3px 3px .1px 3px",
                                    borderStyle: "solid",
                                    borderColor: "var(--color-5)",
                                }}
                            >
                                <p>
                                    <FiDollarSign />
                                    {packagePrices[0].price
                                        .toString()
                                        .replace(".", ",")}{" "}
                                    {t("pricing.items.startup.SUBTITLE")}
                                </p>
                                <div>
                                    <span>
                                        <FaCheckCircle className={style.pricingIcon} />
                                    </span>
                                    <span className={style.pricingItemText}>
                                        {t("pricing.items.features.SALES")}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <FaCheckCircle className={style.pricingIcon} />
                                    </span>
                                    <span className={style.pricingItemText}>
                                        {t("pricing.items.features.OPERATION")}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <FaCheckCircle className={style.pricingIcon} />
                                    </span>
                                    <span className={style.pricingItemText}>
                                        {t(
                                            "pricing.items.features.DOCUMENTATION"
                                        )}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <FaCheckCircle className={style.pricingIcon} />
                                    </span>
                                    <span className={style.pricingItemText}>
                                        {t(
                                            "pricing.items.features.QUALITY_CONTROL"
                                        )}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <FaCheckCircle className={style.pricingIcon} />
                                    </span>
                                    <span className={style.pricingItemText}>
                                        {t("pricing.items.features.ARCHIVE")}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <FaCheckCircle className={style.pricingIcon} />
                                    </span>
                                    <span className={style.pricingItemText}>
                                        {t("pricing.items.features.ACCOUNTING")}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <FaCheckCircle className={style.pricingIcon} />
                                    </span>
                                    <span className={style.pricingItemText}>
                                        {t("pricing.items.features.INVOICE")}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <FaTimesCircle className={`${style.pricingIcon} ${style.pricingNoFeature}`} />
                                    </span>
                                    <span className={style.pricingItemText}>
                                        {t("pricing.items.features.CONSOLE")}
                                    </span>
                                </div>
                            </div>
                            <div
                                className={style.pricingItemFooter}
                                style={{
                                    borderWidth: "0 3px 3px 3px",
                                    borderStyle: "solid",
                                    borderColor: "var(--color-5)",
                                }}
                            >
                                <p>
                                    {packagePrices[0].minimumUsers}{" "}
                                    {t("pricing.items.startup.FOOTER_ROW_1")}{" "}
                                    <FiDollarSign />
                                    {(
                                        packagePrices[0].price *
                                        packagePrices[0].minimumUsers
                                    )
                                        .toString()
                                        .replace(".", ",")}
                                </p>
                                <p>
                                    {t("pricing.items.startup.FOOTER_ROW_2")}{" "}
                                    {packagePrices[0].storage}GB
                                </p>
                                <p>
                                    {t("pricing.items.startup.FOOTER_ROW_3")}{" "}
                                    {packagePrices[0].route}
                                </p>
                                <button
                                    className="template-button template-button-danger"
                                    onClick={() =>
                                        setSelectedPackage(
                                            packagePrices[0].id,
                                            packagePrices[0].minimumUsers,
                                            packagePrices[0].price
                                        )
                                    }
                                >
                                    {t("pricing.items.startup.BUTTON")}
                                </button>
                            </div>
                        </div>
                    </Col>

                    <Col className={style.pricingColumn} lg={4} md={6}>
                        <div className={style.pricingItem}>
                            <div
                                className={style.pricingItemHeader}
                                style={{
                                    backgroundColor: "var(--color-6)",
                                    border: "3px solid var(--color-6)",
                                }}
                            >
                                <h4>{t("pricing.items.business.TITLE")}</h4>
                                <span className={style.spanBestValue}>
                                    {t("pricing.items.BEST_PRICE")}
                                </span>
                            </div>
                            <div
                                className={style.pricingItemBody}
                                style={{
                                    borderWidth: "3px 3px .1px 3px",
                                    borderStyle: "solid",
                                    borderColor: "var(--color-6)",
                                }}
                            >
                                <p>
                                    <FiDollarSign />
                                    {packagePrices[1].price
                                        .toString()
                                        .replace(".", ",")}
                                    {"0 "}
                                    {t("pricing.items.business.SUBTITLE")}
                                </p>
                                <div>
                                    <span>
                                        <FaCheckCircle className={style.pricingIcon} />
                                    </span>
                                    <span className={style.pricingItemText}>
                                        {t("pricing.items.features.SALES")}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <FaCheckCircle className={style.pricingIcon} />
                                    </span>
                                    <span className={style.pricingItemText}>
                                        {t("pricing.items.features.OPERATION")}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <FaCheckCircle className={style.pricingIcon} />
                                    </span>
                                    <span className={style.pricingItemText}>
                                        {t(
                                            "pricing.items.features.DOCUMENTATION"
                                        )}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <FaCheckCircle className={style.pricingIcon} />
                                    </span>
                                    <span className={style.pricingItemText}>
                                        {t(
                                            "pricing.items.features.QUALITY_CONTROL"
                                        )}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <FaCheckCircle className={style.pricingIcon} />
                                    </span>
                                    <span className={style.pricingItemText}>
                                        {t("pricing.items.features.ARCHIVE")}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <FaCheckCircle className={style.pricingIcon} />
                                    </span>
                                    <span className={style.pricingItemText}>
                                        {t("pricing.items.features.ACCOUNTING")}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <FaCheckCircle className={style.pricingIcon} />
                                    </span>
                                    <span className={style.pricingItemText}>
                                        {t("pricing.items.features.INVOICE")}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <FaCheckCircle className={style.pricingIcon} />
                                    </span>
                                    <span className={style.pricingItemText}>
                                        {t("pricing.items.features.CONSOLE")}
                                    </span>
                                </div>
                            </div>
                            <div
                                className={style.pricingItemFooter}
                                style={{
                                    borderWidth: "0 3px 3px 3px",
                                    borderStyle: "solid",
                                    borderColor: "var(--color-6)",
                                }}
                            >
                                <p>
                                    {t("pricing.items.business.FOOTER_ROW_1")}{" "}
                                    {packagePrices[1].maximumUsers}
                                </p>
                                <p>
                                    {t("pricing.items.business.FOOTER_ROW_2")}{" "}
                                    {packagePrices[1].storage}GB
                                </p>
                                <p>
                                    {t("pricing.items.business.FOOTER_ROW_3")}{" "}
                                    {packagePrices[1].route}
                                </p>
                                <button
                                    className="template-button template-button-danger"
                                    onClick={() =>
                                        setSelectedPackage(
                                            packagePrices[1].id,
                                            packagePrices[1].minimumUsers,
                                            packagePrices[1].price
                                        )
                                    }
                                >
                                    {t("pricing.items.business.BUTTON")}
                                </button>
                            </div>
                        </div>
                    </Col>

                    <Col className={style.pricingColumn} lg={4} md={6}>
                        <div className={style.pricingItem}>
                            <div
                                className={style.pricingItemHeader}
                                style={{
                                    backgroundColor: "var(--color-7)",
                                    border: "3px solid var(--color-7)",
                                }}
                            >
                                <h4>{t("pricing.items.premium.TITLE")}</h4>
                            </div>
                            <div
                                className={style.pricingItemBody}
                                style={{
                                    borderWidth: "3px 3px .1px 3px",
                                    borderStyle: "solid",
                                    borderColor: "var(--color-7)",
                                }}
                            >
                                <p>{t("pricing.items.premium.SUBTITLE")}</p>
                                <div>
                                    <span>
                                        <FaCheckCircle className={style.pricingIcon} />
                                    </span>
                                    <span className={style.pricingItemText}>
                                        {t("pricing.items.features.SALES")}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <FaCheckCircle className={style.pricingIcon} />
                                    </span>
                                    <span className={style.pricingItemText}>
                                        {t("pricing.items.features.OPERATION")}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <FaCheckCircle className={style.pricingIcon} />
                                    </span>
                                    <span className={style.pricingItemText}>
                                        {t(
                                            "pricing.items.features.DOCUMENTATION"
                                        )}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <FaCheckCircle className={style.pricingIcon} />
                                    </span>
                                    <span className={style.pricingItemText}>
                                        {t(
                                            "pricing.items.features.QUALITY_CONTROL"
                                        )}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <FaCheckCircle className={style.pricingIcon} />
                                    </span>
                                    <span className={style.pricingItemText}>
                                        {t("pricing.items.features.ARCHIVE")}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <FaCheckCircle className={style.pricingIcon} />
                                    </span>
                                    <span className={style.pricingItemText}>
                                        {t("pricing.items.features.ACCOUNTING")}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <FaCheckCircle className={style.pricingIcon} />
                                    </span>
                                    <span className={style.pricingItemText}>
                                        {t("pricing.items.features.INVOICE")}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <FaCheckCircle className={style.pricingIcon} />
                                    </span>
                                    <span className={style.pricingItemText}>
                                        {t("pricing.items.features.CONSOLE")}
                                    </span>
                                </div>
                            </div>
                            <div
                                className={style.pricingItemFooter}
                                style={{
                                    borderWidth: "0 3px 3px 3px",
                                    borderStyle: "solid",
                                    borderColor: "var(--color-7)",
                                }}
                            >
                                <p>
                                    {t("pricing.items.premium.FOOTER_ROW_1")}{" "}
                                    {packagePrices[2].maximumUsers}
                                </p>
                                <p>
                                    {t("pricing.items.premium.FOOTER_ROW_2")}{" "}
                                    {packagePrices[2].storage}GB
                                </p>
                                <p>
                                    {t("pricing.items.premium.FOOTER_ROW_3")}{" "}
                                    {packagePrices[2].route}
                                </p>
                                <a
                                    className="template-button template-button-danger"
                                    href="tel:+908508112480"
                                >
                                    {t("pricing.items.premium.BUTTON")}
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Packages;
