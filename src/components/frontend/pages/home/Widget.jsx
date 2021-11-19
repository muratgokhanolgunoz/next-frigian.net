import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import HomeService from "../../../../../_services/HomeService";
import { ToastContainer } from "react-toastify";
import { Container, Row, Col } from "react-bootstrap";
import { MdLocalPhone } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { showToast, validateEmail } from "../../../../../_core/functions";
import style from "../../../../../styles/Widget.module.scss";

const Widget = () => {
    let homeServices = new HomeService();
    let formError = false;

    const { t } = useTranslation("common");

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const sendCallRequest = (e) => {
        e.preventDefault();
        formError = false;

        if (fullname === "") {
            showToast(
                "bottom-right",
                t(
                    "home.widgets.notification.form_validation.HOME_WIDGETS_NOTIFICATION_FORM_VALIDATION_ERROR_NAME"
                ),
                "error"
            );
            formError = true;
        }

        if (email === "") {
            showToast(
                "bottom-right",
                t(
                    "home.widgets.notification.form_validation.HOME_WIDGETS_NOTIFICATION_FORM_VALIDATION_ERROR_EMAIL"
                ),
                "error"
            );
            formError = true;
        }

        if (email !== "" && !validateEmail(email)) {
            showToast(
                "bottom-right",
                t(
                    "home.widgets.notification.form_validation.HOME_WIDGETS_NOTIFICATION_FORM_VALIDATION_ERROR_EMAIL_FORMAT"
                ),
                "error"
            );
            formError = true;
        }

        if (phone === "") {
            showToast(
                "bottom-right",
                t(
                    "home.widgets.notification.form_validation.HOME_WIDGETS_NOTIFICATION_FORM_VALIDATION_ERROR_PHONE"
                ),
                "error"
            );
            formError = true;
        }

        if (formError === false) {
            const payload = new FormData();
            payload.append("name", fullname);
            payload.append("email", email);
            payload.append("tel", phone);

            homeServices
                .sendCallRequest(payload)
                .then((response) => {
                    response.status === 200
                        ? showToast(
                              "bottom-right",
                              t(
                                  "home.widgets.notification.HOME_WIDGETS_NOTIFICATION_SUCCESS_MESSAGE"
                              ),
                              "success"
                          )
                        : showToast(
                              "bottom-right",
                              t(
                                  "home.widgets.notification.HOME_WIDGETS_NOTIFICATION_ERROR_MESSAGE"
                              ),
                              "error"
                          );

                    setFullname("");
                    setEmail("");
                    setPhone("");
                })
                .catch((_error) => {
                    console.warn(_error);
                    showToast(
                        "bottom-right",
                        t(
                            "home.widgets.notification.HOME_WIDGETS_NOTIFICATION_ERROR_MESSAGE"
                        ),
                        "error"
                    );
                });
        }
    };

    return (
        <div id="widgets" className={style.widget}>
            <Container className={style.sectionContainer}>
                <Row>
                    <Col lg={1}></Col>
                    <Col className={style.widgetColumn} lg={3} sm={12}>
                        <div
                            className={`background-color-orange ${style.widgetItem}`}
                        >
                            <span>
                                <BiDollar className={style.widgetIcon} />
                            </span>
                            <br />
                            <h5>{t("home.widgets.left.WIDGET_LEFT_TITLE")}</h5>
                            <p>{t("home.widgets.left.WIDGET_LEFT_CONTENT")}</p>
                        </div>
                    </Col>

                    <Col className={style.widgetColumn} lg={4} sm={12}>
                        <div
                            className={`${style.widgetItem} background-color-dark`}
                        >
                            <h5>
                                {t("home.widgets.center.WIDGET_CENTER_TITLE")}
                            </h5>
                            <form onSubmit={(e) => sendCallRequest(e)}>
                                <div className={style.formItem}>
                                    <input
                                        type="text"
                                        placeholder={t(
                                            "home.widgets.center.form.WIDGET_CENTER_FORM_NAME"
                                        )}
                                        value={fullname}
                                        onChange={(e) =>
                                            setFullname(e.target.value)
                                        }
                                    ></input>
                                </div>
                                <div className={style.formItem}>
                                    <input
                                        type="text"
                                        placeholder={t(
                                            "home.widgets.center.form.WIDGET_CENTER_FORM_EMAIL"
                                        )}
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    ></input>
                                </div>
                                <div className={style.formItem}>
                                    <input
                                        type="text"
                                        placeholder={t(
                                            "home.widgets.center.form.WIDGET_CENTER_FORM_PHONE"
                                        )}
                                        value={phone}
                                        onChange={(e) =>
                                            setPhone(e.target.value)
                                        }
                                    ></input>
                                </div>
                                <div className={style.formItem}>
                                    <button className="template-button template-button-orange">
                                        {t("buttons.SEND_REQUEST")}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Col>

                    <Col className={style.widgetColumn} lg={3} sm={12}>
                        <div
                            className={`background-color-orange ${style.widgetItem}`}
                        >
                            <span>
                                <MdLocalPhone className={style.widgetIcon} />
                            </span>
                            <br />
                            <h5>
                                {t("home.widgets.right.WIDGET_RIGHT_TITLE")}
                            </h5>
                            <p>
                                {t("home.widgets.right.WIDGET_RIGHT_CONTENT")}
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Widget;
