/* eslint-disable @next/next/link-passhref */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";
import { Container, Nav, Navbar, Image, Dropdown } from "react-bootstrap";
import Link from "next/link";
import style from "../../../../styles/Navigation.module.scss";
import Flag from "react-world-flags";
import { useRouter } from "next/router";

const Navigation = (_) => {
    const { t } = useTranslation("common");
    const router = useRouter();
    const { locale } = router;

    const [navbarExpanded, setNavbarExpanded] = useState(false);

    return (
        <div>
            <Navbar
                variant="light"
                bg="light"
                expand="xl"
                expanded={navbarExpanded}
                fixed="top"
            >
                <Container>
                    <Navbar.Brand>
                        <Link href="/" onClick={() => setNavbarExpanded(false)}>
                            <Image
                                className={style.logo}
                                src="https://frigian.net/assets/img/frigian-dark.png"
                                fluid
                                alt="Frigian"
                            ></Image>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        onClick={() => setNavbarExpanded(true)}
                        aria-controls="basic-navbar-nav"
                    />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={`me-auto ${style.navigation}`}>
                            <Link
                                href="/"
                                onClick={() => setNavbarExpanded(false)}
                            >
                                {t("navbar.NAVBAR_ITEM_HOME")}
                            </Link>
                            <Link
                                href="/about"
                                onClick={() => setNavbarExpanded(false)}
                            >
                                {t("navbar.NAVBAR_ITEM_ABOUT")}
                            </Link>
                            <Link
                                href="/service"
                                onClick={() => setNavbarExpanded(false)}
                            >
                                {t("navbar.NAVBAR_ITEM_SERVICES")}
                            </Link>
                            <Link
                                href="/pricing"
                                onClick={() => setNavbarExpanded(false)}
                            >
                                {t("navbar.NAVBAR_ITEM_PRICING")}
                            </Link>
                            <Link
                                href="/faq"
                                onClick={() => setNavbarExpanded(false)}
                            >
                                {t("navbar.NAVBAR_ITEM_FAQ")}
                            </Link>
                            <Link
                                href="/contact"
                                onClick={() => setNavbarExpanded(false)}
                            >
                                {t("navbar.NAVBAR_ITEM_CONTACT")}
                            </Link>
                            <Link
                                href="/blog"
                                onClick={() => setNavbarExpanded(false)}
                            >
                                {t("navbar.NAVBAR_ITEM_BLOG")}
                            </Link>
                            <a
                                href="https://frigian.whereby.com/frigian"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {t("navbar.NAVBAR_ITEM_MEETING_ROOM")}
                            </a>
                        </Nav>
                        <Nav className={style.navigationLanguage}>
                            <Dropdown>
                                <Dropdown.Toggle variant="default">
                                    {locale === "tr" ? (
                                        <>
                                            <Flag code="tr" height="20" />
                                            &nbsp;
                                        </>
                                    ) : (
                                        <>
                                            <Flag code="us" height="16" />
                                            &nbsp;
                                        </>
                                    )}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <Link href="" locale="tr">
                                            <a className="">
                                                <Flag code="tr" height="20" />
                                                &nbsp;&nbsp;{" "}
                                                {t(
                                                    "navbar.language.NAVBAR_ITEM_LANGUAGE_TR"
                                                )}
                                            </a>
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link href="" locale="en">
                                            <a>
                                                <Flag code="us" height="16" />{" "}
                                                &nbsp;{" "}
                                                {t(
                                                    "navbar.language.NAVBAR_ITEM_LANGUAGE_EN"
                                                )}
                                            </a>
                                        </Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;
