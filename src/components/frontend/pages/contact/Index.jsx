import React from "react";
import { useTranslation } from "next-i18next";
import SectionBanner from "../../constants/SectionBanner";
import ContactForm from "./ContactForm";
import { Container, Row, Col } from "react-bootstrap";
import ContactAddress from "./ContactAddress";

const Index = (_) => {
    const { t } = useTranslation("common");

    return (
        <div id="contact">
            <SectionBanner
                title={t("contact.banner.CONTACT_BANNER_TITLE")}
                breadcrumbPrevText={t("navbar.NAVBAR_ITEM_HOME")}
                breadcrumbPrevLink="/"
                breadcrumbCurrentText={t("navbar.NAVBAR_ITEM_CONTACT")}
            />
            <Container className="section-padding">
                <Row>
                    <Col lg={7} md={12}>
                        <ContactForm />
                    </Col>
                    <Col lg={5} md={12}>
                        <ContactAddress />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Index;
