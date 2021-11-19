/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import SectionTitle from "../../constants/SectionTitle";
import { useTranslation } from "next-i18next";
import { Container, Row, Col, Image } from "react-bootstrap";
import style from "../../../../../styles/History.module.scss";

const History = () => {
    const { t } = useTranslation("common");

    return (
        <div id="history" className="section-padding">
            <Container>
                <Row>
                    <Col className={style.historyPragraph} lg={7} md={12}>
                        <SectionTitle
                            id="history-title"
                            sectionTitle="section-title"
                            sectionSubTitle="section-subtitle"
                            textAlign="text-center"
                            titleColor="color-orange"
                            subtitleColor="color-dark"
                            title={t("about.history.HISTORY_TITLE")}
                            subtitle=""
                        />
                        <br />
                        <p>{t("about.history.HISTORY_PARAGRAPH_1")}</p>
                        <br />
                        <p>{t("about.history.HISTORY_PARAGRAPH_2")}</p>
                        <br />
                        <br />
                        <p>
                            <b>{t("about.history.HISTORY_SIGNATURE")}</b>
                        </p>
                    </Col>

                    <Col lg={5} md={12}>
                        <br />
                        <br />
                        <br />
                        <Image
                            className={style.historyImage}
                            src="./assets/img/about/history_2.jpg"
                            title="Frigian"
                            fluid
                        ></Image>
                        {/* <Image className="history-image" src="./assets/img/about/history_1.jpg" title="Frigian" fluid></Image>                         */}
                        <Image
                            className={style.historyImage}
                            src="./assets/img/about/history_3.jpg"
                            title="Online eğitimlerimizden bir sahne"
                            fluid
                        ></Image>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default History;
