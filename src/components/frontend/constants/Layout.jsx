import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import CookieBanner from "./CookieBanner";
import Cookies from "universal-cookie";

const Layout = ({ children }) => {
    const cookies = new Cookies();
    const [cookieBannerShow, setCookieBannerShow] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const setCookie = (_language) => {
        // 365 günlük cookie set ediliyor.
        var maxAge = new Date(Date.now() + 24 * 60 * 60 * 1000 * 365);

        // NEXT_LOCALE cookie parametresi next.js tarafından otomatik algılanmaktadır.
        cookies.set("NEXT_LOCALE", _language, { path: "/", expires: maxAge });

        // Cookie set edildiği için CookieBanner komponenti render edilmeyecektir.
        // Kullanıcı 365 günlük süre ile sayfayı görmek istediği dil seçeneğini ayarlamış oldu ve cookie leri kabul et şeklinde yazı artık gelmeyecek.
        setCookieBannerShow(false);
    };

    const getCookie = () => {
        return {
            language: cookies.get("NEXT_LOCALE"),
        };
    };

    return (
        <>
            <Navigation funcSetCookie={setCookie} funcGetCookie={getCookie} />
            {getCookie().language === undefined && cookieBannerShow ? (
                <CookieBanner
                    funcSetCookie={setCookie}
                    funcSetCookieBannerShow={setCookieBannerShow}
                />
            ) : null}
            <main>{children}</main>
            <Footer />
        </>
    );
};
export default Layout;
