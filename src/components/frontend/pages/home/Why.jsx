import React from "react";
import { useTranslation } from "next-i18next";
import { Row, Col, Container } from "react-bootstrap";
import SectionTitle from "../../constants/SectionTitle";
import { GoRocket } from "react-icons/go";
import {
    FaRegHandPaper,
    FaCogs,
    FaCloudUploadAlt,
    FaGraduationCap,
} from "react-icons/fa";
import { GiJigsawPiece } from "react-icons/gi";
import { BsFileEarmarkText } from "react-icons/bs";
import { HiOutlineSupport } from "react-icons/hi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import style from "../../../../../styles/Why.module.scss";

const Why = (_) => {
    const { t } = useTranslation("common");

    return (
        <div id="why" className="section-padding">
            <Container>
                <Row>
                    <SectionTitle
                        sectionTitle="section-title"
                        sectionSubTitle="section-subtitle"
                        textAlign="text-center"
                        titleColor="color-orange"
                        subtitleColor="color-dark"
                        title={t("home.why.WHY_SECTION_TITLE")}
                        subtitle={t("home.why.WHY_SECTION_SUBTITLE")}
                    />
                </Row>

                <Row>
                    <Col lg={4} md={6}>
                        <div className={style.whyItem}>
                            <GoRocket className={style.whyIcon} />
                            <div className={style.whyBox}>
                                <h4>{t("home.why.items.1.WHY_ITEMS_TITLE")}</h4>
                                <p>{t("home.why.items.1.WHY_ITEMS_CONTENT")}</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className={style.whyItem}>
                            <FaRegHandPaper className={style.whyIcon} />
                            <div className={style.whyBox}>
                                <h4>{t("home.why.items.2.WHY_ITEMS_TITLE")}</h4>
                                <p>{t("home.why.items.2.WHY_ITEMS_CONTENT")}</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className={style.whyItem}>
                            <GiJigsawPiece className={style.whyIcon} />
                            <div className={style.whyBox}>
                                <h4>{t("home.why.items.3.WHY_ITEMS_TITLE")}</h4>
                                <p>{t("home.why.items.3.WHY_ITEMS_CONTENT")}</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className={style.whyItem}>
                            <BsFileEarmarkText className={style.whyIcon} />
                            <div className={style.whyBox}>
                                <h4>{t("home.why.items.4.WHY_ITEMS_TITLE")}</h4>
                                <p>{t("home.why.items.4.WHY_ITEMS_CONTENT")}</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className={style.whyItem}>
                            <FaCogs className={style.whyIcon} />
                            <div className={style.whyBox}>
                                <h4>{t("home.why.items.5.WHY_ITEMS_TITLE")}</h4>
                                <p>{t("home.why.items.5.WHY_ITEMS_CONTENT")}</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className={style.whyItem}>
                            <MdOutlineAlternateEmail className={style.whyIcon} />
                            <div className={style.whyBox}>
                                <h4>{t("home.why.items.6.WHY_ITEMS_TITLE")}</h4>
                                <p>{t("home.why.items.6.WHY_ITEMS_CONTENT")}</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className={style.whyItem}>
                            <FaCloudUploadAlt className={style.whyIcon} />
                            <div className={style.whyBox}>
                                <h4>{t("home.why.items.7.WHY_ITEMS_TITLE")}</h4>
                                <p>{t("home.why.items.7.WHY_ITEMS_CONTENT")}</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className={style.whyItem}>
                            <FaGraduationCap className={style.whyIcon} />
                            <div className={style.whyBox}>
                                <h4>{t("home.why.items.8.WHY_ITEMS_TITLE")}</h4>
                                <p>{t("home.why.items.8.WHY_ITEMS_CONTENT")}</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className={style.whyItem}>
                            <HiOutlineSupport className={style.whyIcon} />
                            <div className={style.whyBox}>
                                <h4>{t("home.why.items.9.WHY_ITEMS_TITLE")}</h4>
                                <p>{t("home.why.items.9.WHY_ITEMS_CONTENT")}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Why;
