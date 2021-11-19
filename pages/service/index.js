import React from "react";
import Layout from "../../src/components/frontend/constants/Layout";
import Services from "../../src/components/frontend/pages/services/Index";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";

const Index = (_) => {
    const { t } = useTranslation("common");
    return (
        <>
            <Layout>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <meta charSet="utf-8" />
                    <meta name="google" content="notranslate" />
                    <meta property="robots" content="index, follow"></meta>
                    <title>
                        {t("navbar.NAVBAR_ITEM_SERVICES")} -{" "}
                        {t("template.HTML_PAGE_TITLE")}
                    </title>
                    <meta
                        name="keywords"
                        content="TMS, transport management system, taşımacılık yönetim sistemi, navlun pazarı entegrasyonu, bulut lojistik yazılımı, taşımacılık yazılımı, forwarding uygulaması, forwarding yazılımı, bulut tabanlı lojistik yazılımı, düşük maliyetli forwardıng yazılımı, saas TMS, lojistik platformu, türkiye’nin lojistik platformu, entegre lojistik platformu, entegre lojistik yazılımı, bulut tabanlı entegre forwarding uygulaması, kobi lojistik yazılımı, tio yazılımı, web tabanlı lojistik yazılımı, web tabanlı TMS, lojistik platformu, logistics platform, Web base NVOCC app, başlangıç maliyeti olmayan lojistik uygulaması, TMS for startup, TMS for forwarders, TIO Lojistik yazılımı, web base online tracking tools for NVOCC, non setup free TMS, freight forwarding app, freight forwarding software, digital logistics software, web base digital logistics software, digital solutions for NVOCC, freight market integration, digital freight forwarding software, web base digital freight forwarding software, user base costing freight forwaring app"
                    />
                    <meta
                        name="description"
                        content="New Generation Logistics Management System. Frigian.net is a Digital platform where the freight forwarders can manage freights and bring together the companies that are looking for a maritime transport company so that they can be saved from time to time. Today, when the industry 4.0 is spoken, it provides the transparency that the transportation industry needs."
                    />
                    <meta
                        property="og:title"
                        content={t("navbar.NAVBAR_ITEM_SERVICES") + " - " + t("template.HTML_PAGE_TITLE")}
                    />
                    <meta
                        property="og:url"
                        content={process.env.NEXT_PUBLIC_URL}
                    />
                    <meta property="og:type" content="website" />
                    <meta
                        property="og:description"
                        content="New Generation Logistics Management System. Frigian.net is a Digital platform where the freight forwarders can manage freights and bring together the companies that are looking for a maritime transport company so that they can be saved from time to time. Today, when the industry 4.0 is spoken, it provides the transparency that the transportation industry needs."
                    />
                    <meta
                        property="og:image"
                        content={`${process.env.NEXT_PUBLIC_URL}/assets/img/frigian-logo.jpeg`}
                    />
                    <link
                        rel="apple-touch-icon"
                        href={`${process.env.NEXT_PUBLIC_URL}/assets/img/frigian-logo.jpeg`}
                    />
                    <link
                        rel="icon"
                        href={`${process.env.NEXT_PUBLIC_URL}/favicon.ico`}
                        type="image/x-icon"
                    />
                </Head>
                <Services />
            </Layout>
        </>
    );
};

export const getServerSideProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
};

export default Index;
