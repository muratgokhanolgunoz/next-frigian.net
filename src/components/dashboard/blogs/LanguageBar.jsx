import React, { useContext } from "react";
import { Col, ButtonGroup } from "react-bootstrap";
import Context from "../../../utils/context/Context";

export default function LanguageBar() {
    const context = useContext(Context);

    return (
        <>
            <Col xs={6}>
                <ButtonGroup size="sm">
                    {context.dashboardBlogsLanguage === "tr" ? (
                        <>
                            <button
                                className="bg-dark text-light"
                                onClick={() => context.funcSetDashboardBlogsLanguage("tr")}
                            >
                                TR
                            </button>
                            <button
                                className="bg-primary text-light"
                                onClick={() => context.funcSetDashboardBlogsLanguage("en")}
                            >
                                EN
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                className="bg-primary text-light"
                                onClick={() => context.funcSetDashboardBlogsLanguage("tr")}
                            >
                                TR
                            </button>
                            <button
                                className="bg-dark text-light"
                                onClick={() => context.funcSetDashboardBlogsLanguage("en")}
                            >
                                EN
                            </button>
                        </>
                    )}
                </ButtonGroup>
            </Col>
            <Col xs={6} style={{ textAlign: "right" }}>
                <h5>
                    Selected Language :{" "}
                    <b>{context.dashboardBlogsLanguage.toString().toUpperCase()}</b>
                </h5>
            </Col>
        </>
    );
}
