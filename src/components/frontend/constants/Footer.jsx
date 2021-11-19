import React from "react";
import { useTranslation } from "next-i18next";
import { Container, Row, Col, Image } from "react-bootstrap";
import {
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
    FaInstagram,
} from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Link from "next/link";
import style from "../../../../styles/Footer.module.scss";
import { useRouter } from "next/router";

const Footer = () => {
    const date = new Date();
    const { t } = useTranslation("common");
    const router = useRouter();

    return (
        <div id="footer" className={`section-padding ${style.footer}`}>
            <Container>
                <Row className={style.footerRow}>
                    <Col className={style.footerColumn} lg={2}>
                        <h5>{t("footer.columns.1.FOOTER_COLUMN_TITLE")}</h5>
                        <ul>
                            <li>
                                <Link href="/about">
                                    {t(
                                        "footer.columns.1.FOOTER_COLUMN_LINK_ABOUT"
                                    )}
                                </Link>
                            </li>

                            <li>
                                <Link href="/services">
                                    {t(
                                        "footer.columns.1.FOOTER_COLUMN_LINK_SERVICES"
                                    )}
                                </Link>
                            </li>

                            <li>
                                <Link href="/contact">
                                    {t(
                                        "footer.columns.1.FOOTER_COLUMN_LINK_CONTACT"
                                    )}
                                </Link>
                            </li>
                        </ul>
                    </Col>

                    <Col className={style.footerColumn} lg={2}>
                        <h5>{t("footer.columns.2.FOOTER_COLUMN_TITLE")}</h5>
                        <ul>
                            <li>
                                <a
                                    href="https://frigian.com"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    frigian.com
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://frigian.net"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    frigian.net
                                </a>
                            </li>
                        </ul>
                    </Col>

                    <Col className={style.footerColumn} lg={2}>
                        <h5>{t("footer.columns.3.FOOTER_COLUMN_TITLE")}</h5>
                        <ul>
                            <li>
                                <a
                                    href={
                                        "./assets/agreement/frigian-net-" +
                                        router.locale +
                                        "-agreement.html"
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t(
                                        "footer.columns.3.FOOTER_COLUMN_LINK_AGREEMENT"
                                    )}
                                </a>
                            </li>

                            <li>
                                <a
                                    href={
                                        "./assets/agreement/frigian-net-" +
                                        router.locale +
                                        "-privacy.html"
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t(
                                        "footer.columns.3.FOOTER_COLUMN_LINK_PRIVACY"
                                    )}
                                </a>
                            </li>

                            <li>
                                <a
                                    href={
                                        "./assets/agreement/frigian-net-" +
                                        router.locale +
                                        "-cookies.html"
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t(
                                        "footer.columns.3.FOOTER_COLUMN_LINK_COOKIES"
                                    )}
                                </a>
                            </li>
                        </ul>
                    </Col>

                    <Col className={style.footerColumn} lg={6}>
                        <h5>{t("footer.columns.4.FOOTER_COLUMN_TITLE")}</h5>
                        <Image
                            src="https://frigian.net/assets/img/footer_logo.png"
                            alt=""
                            fluid
                        />
                    </Col>
                </Row>

                <Row className={style.footerRow}>
                    <Col className={style.footerColumn} lg={12}>
                        <ul className={style.footerSocial}>
                            <li>
                                <a
                                    href="https://play.google.com/store/apps/details?id=net.frigian.mobile.tokenproject"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IoLogoGooglePlaystore />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.linkedin.com/company/frigian"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.youtube.com/channel/UCQVs9qMAhF-f1eNoQ6ak2GA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaYoutube />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.instagram.com/frigianplatform/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://twitter.com/FrigianPlatform"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaTwitter />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row className={style.footerColumn}>
                    <Col className={style.footer} lg={12}>
                        <p>
                            Copyright © {date.getFullYear()} Frigian.{" "}
                            {t("footer.FOOTER_TEXT")}
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
