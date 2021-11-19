import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import ContactService from "../../../../../_services/ContactService";
import { validateEmail, showToast } from "../../../../../_core/functions";

const ContactForm = (_) => {
    const { t } = useTranslation("common");

    let contactServices = new ContactService();
    let formError = false;

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [captcha, setCaptcha] = useState("");

    const send = (e) => {
        e.preventDefault();

        formError = false;

        if (name === "") {
            showToast(
                "bottom-right",
                t(
                    "contact.notification.form_validation.CONTACT_NOTIFICATION_FORM_VALIDATION_ERROR_NAME"
                ),
                "error"
            );
            formError = true;
        }

        if (surname === "") {
            showToast(
                "bottom-right",
                t(
                    "contact.notification.form_validation.CONTACT_NOTIFICATION_FORM_VALIDATION_ERROR_SURNAME"
                ),
                "error"
            );
            formError = true;
        }

        if (email === "") {
            showToast(
                "bottom-right",
                t(
                    "contact.notification.form_validation.CONTACT_NOTIFICATION_FORM_VALIDATION_ERROR_EMAIL"
                ),
                "error"
            );
            formError = true;
        }

        if (email !== "" && !validateEmail(email)) {
            showToast(
                "bottom-right",
                t(
                    "contact.notification.form_validation.CONTACT_NOTIFICATION_FORM_VALIDATION_ERROR_EMAIL_FORMAT"
                ),
                "error"
            );
            formError = true;
        }

        if (subject === "") {
            showToast(
                "bottom-right",
                t(
                    "contact.notification.form_validation.CONTACT_NOTIFICATION_FORM_VALIDATION_ERROR_SUBJECT"
                ),
                "error"
            );
            formError = true;
        }

        if (message === "") {
            showToast(
                "bottom-right",
                t(
                    "contact.notification.form_validation.CONTACT_NOTIFICATION_FORM_VALIDATION_ERROR_MESSAGE"
                ),
                "error"
            );
            formError = true;
        }

        if (formError === false) {
            const payload = new FormData();
            payload.append("name", name);
            payload.append("surname", surname);
            payload.append("email", email);
            payload.append("subject", subject);
            payload.append("note", message);

            contactServices
                .sendMessage(payload)
                .then((response) => {
                    response.status === 200
                        ? showToast(
                              "bottom-right",
                              t(
                                  "contact.notification.CONTACT_NOTIFICATION_SUCCESS_MESSAGE"
                              ),
                              "success"
                          )
                        : showToast(
                              "bottom-right",
                              t(
                                  "contact.notification.CONTACT_NOTIFICATION_ERROR_MESSAGE"
                              ),
                              "error"
                          );

                    setName("");
                    setSurname("");
                    setEmail("");
                    setSubject("");
                    setMessage("");
                })
                .catch(() =>
                    showToast(
                        "bottom-right",
                        t(
                            "contact.notification.CONTACT_NOTIFICATION_ERROR_MESSAGE"
                        ),
                        "error"
                    )
                );
        }
    };

    return (
        <div id="contact-form">
            <form onSubmit={(e) => send(e)}>
                <div className="contact-form-item">
                    <label>
                        {t("contact.form.CONTACT_FORM_INPUT_NAME_LABEL")}
                    </label>
                    <input
                        type="text"
                        placeholder={t(
                            "contact.form.CONTACT_FORM_INPUT_NAME_PLACEHOLDER"
                        )}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>

                <div className="contact-form-item">
                    <label>
                        {t("contact.form.CONTACT_FORM_INPUT_SURNAME_LABEL")}
                    </label>
                    <input
                        type="text"
                        placeholder={t(
                            "contact.form.CONTACT_FORM_INPUT_SURNAME_PLACEHOLDER"
                        )}
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    ></input>
                </div>

                <div className="contact-form-item">
                    <label>
                        {t("contact.form.CONTACT_FORM_INPUT_EMAIL_LABEL")}
                    </label>
                    <input
                        type="text"
                        placeholder={t(
                            "contact.form.CONTACT_FORM_INPUT_EMAIL_PLACEHOLDER"
                        )}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>

                <div className="contact-form-item">
                    <label>
                        {t("contact.form.CONTACT_FORM_INPUT_SUBJECT_LABEL")}
                    </label>
                    <input
                        type="text"
                        placeholder={t(
                            "contact.form.CONTACT_FORM_INPUT_SUBJECT_PLACEHOLDER"
                        )}
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    ></input>
                </div>

                <div className="contact-form-item">
                    <label>
                        {t("contact.form.CONTACT_FORM_TEXTAREA_MESSAGE_LABEL")}
                    </label>
                    <textarea
                        type="text"
                        placeholder={t(
                            "contact.form.CONTACT_FORM_TEXTAREA_MESSAGE_PLACEHOLDER"
                        )}
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    >
                        {message}
                    </textarea>
                </div>
                <div className="contact-form-item">
                    <button className="template-button template-button-dark">
                        {t("buttons.SEND_MESSAGE")}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
