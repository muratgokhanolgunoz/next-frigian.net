import React from "react";
import { useTranslation } from "next-i18next";
import SectionTitle from "../../constants/SectionTitle";
import { Container, Row, Col } from "react-bootstrap";
import style from "../../../../../styles/HowToJoin.module.scss";

const HowToJoin = () => {
    const { t } = useTranslation("common");

    const styles = {
        background: "url(./assets/img/frigian-bg.jpg)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
    };

    return (
        <div id="how-to-join" className="section-padding" style={styles}>
            <Container>
                <Row>
                    <Col className={style.historyParagraph} lg={12}>
                        <SectionTitle
                            id="history-title"
                            sectionTitle="section-title"
                            sectionSubTitle="section-subtitle"
                            textAlign="text-center"
                            titleColor="color-orange"
                            subtitleColor="color-dark"
                            title={t("about.how_to_join.HOW_TO_JOIN_TITLE")}
                            subtitle=""
                        />
                    </Col>
                </Row>

                <Row>
                    <Col lg={4} sm={12}>
                        <div className={style.howToJoinBox}>
                            <span>
                                {t(
                                    "about.how_to_join.items.1.HOW_TO_JOIN_ITEM_ID"
                                )}
                            </span>
                            <h4>
                                {t(
                                    "about.how_to_join.items.1.HOW_TO_JOIN_ITEM_TITLE"
                                )}
                            </h4>
                            <p>
                                {t(
                                    "about.how_to_join.items.1.HOW_TO_JOIN_ITEM_CONTENT"
                                )}
                            </p>
                        </div>
                    </Col>

                    <Col lg={4} sm={12}>
                        <div className={style.howToJoinBox}>
                            <span>
                                {t(
                                    "about.how_to_join.items.2.HOW_TO_JOIN_ITEM_ID"
                                )}
                            </span>
                            <h4>
                                {t(
                                    "about.how_to_join.items.2.HOW_TO_JOIN_ITEM_TITLE"
                                )}
                            </h4>
                            <p>
                                {t(
                                    "about.how_to_join.items.2.HOW_TO_JOIN_ITEM_CONTENT"
                                )}
                            </p>
                        </div>
                    </Col>

                    <Col lg={4} sm={12}>
                        <div className={style.howToJoinBox}>
                            <span>
                                {t(
                                    "about.how_to_join.items.3.HOW_TO_JOIN_ITEM_ID"
                                )}
                            </span>
                            <h4>
                                {t(
                                    "about.how_to_join.items.3.HOW_TO_JOIN_ITEM_TITLE"
                                )}
                            </h4>
                            <p>
                                {t(
                                    "about.how_to_join.items.3.HOW_TO_JOIN_ITEM_CONTENT"
                                )}
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HowToJoin;
