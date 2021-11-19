/* eslint-disable @next/next/no-document-import-in-page */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <div id="__modal"></div>
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                                page_path: window.location.pathname,
                                });
                            `,
                        }}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            _linkedin_partner_id = ${process.env.NEXT_PUBLIC_LINKEDIN_ANALYTICS};
                            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
                        `,
                        }}
                    ></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            (function (l) {
                                if (!l) {
                                window.lintrk = function (a, b) { window.lintrk.q.push([a, b]) };
                                window.lintrk.q = []
                                }
                                var s = document.getElementsByTagName("script")[0];
                                var b = document.createElement("script");
                                b.type = "text/javascript"; b.async = true;
                                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                                s.parentNode.insertBefore(b, s);
                            })(window.lintrk);
                        `,
                        }}
                    ></script>
                    <NextScript />
                </body>
            </Html>
        );
    }
}
export default MyDocument;
