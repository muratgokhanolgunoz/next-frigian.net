/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import AuthContext from "../../_store/AuthContext";
import Head from "next/head";
import Index from "../../src/components/dashboard/auth/Login";
import { useRouter } from "next/router";

const Login = (_) => {
    const router = useRouter();
    const authContext = useContext(AuthContext);

    useEffect(() => {
        if (authContext.token !== "") {
            router.push("/sarici2021/blogs");
        }
    }, [authContext.token]);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta charSet="utf-8" />
                <meta name="google" content="notranslate" />
                <meta name="robots" content="noindex, nofollow" />
                <title>Login - Frigian</title>
                <link
                    rel="icon"
                    href={`${process.env.NEXT_PUBLIC_URL}/assets/img/favicon.ico`}
                    type="image/x-icon"
                />
            </Head>
            <Index />
        </>
    );
};
export default Login;
