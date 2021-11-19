import PricingContextWrapper from "../_store/PricingContextWrapper";
import GlobalContextWrapper from "../_store/GlobalContextWrapper";
import AuthContextWrapper from "../_store/AuthContextWrapper";
import { appWithTranslation } from "next-i18next";
import { ToastContainer } from "react-toastify";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <AuthContextWrapper>
                <GlobalContextWrapper>
                    <PricingContextWrapper>
                        <Component {...pageProps} />
                        <ToastContainer />
                    </PricingContextWrapper>
                </GlobalContextWrapper>
            </AuthContextWrapper>
        </>
    );
};

export default appWithTranslation(MyApp);
