import React, { useEffect } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navigation />
            <main>{children}</main>
            <Footer />
        </>
    );
};
export default Layout;
