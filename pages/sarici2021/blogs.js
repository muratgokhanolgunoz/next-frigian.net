/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import Head from "next/head";
import Index from "../../src/components/dashboard/blogs/Index";
import AuthContext from "../../_store/AuthContext";
import { useRouter } from "next/router";

const Blogs = (_) => {
    const router = useRouter();
    const authContext = useContext(AuthContext);

    useEffect(() => {
        if (authContext.token === "") {
            router.push("/sarici2021/login");
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
                <title>Blogs - Frigian</title>
                <link
                    rel="icon"
                    href={`${process.env.NEXT_PUBLIC_URL}/favicon.ico`}
                    type="image/x-icon"
                />
            </Head>
            <Index />
        </>
    );
};
export default Blogs;
