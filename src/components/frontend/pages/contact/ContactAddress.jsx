import React from "react";
import { useTranslation } from "next-i18next";
import style from "../../../../../styles/ContactAddress.module.scss";

const ContactAddress = () => {
    const { t } = useTranslation("common");

    return (
        <div id="contact-address" className={style.contactAddress}>
            <div className={style.contactAddressRow}>
                <iframe
                    title="Frigian"
                    src="https://www.google.com/maps/embed/v1/place?q=frigian.com+%7C+Navlun+arama+motoru&amp;key=AIzaSyCNT-Ezna_0Tut3qJFC9ODjXePQEo5pUDQ"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            <div className={style.contactAddressRow}>
                <h5>
                    <b>
                        {t(
                            "contact.address.CONTACT_ADDRESS_COMPANY_NAME_LABEL"
                        )}
                    </b>
                </h5>
                <p>
                    {t("contact.address.CONTACT_ADDRESS_COMPANY_NAME_CONTENT")}
                </p>
            </div>

            <div className={style.contactAddressRow}>
                <h5>
                    <b>{t("contact.address.CONTACT_ADDRESS_MERSIS_LABEL")}</b>
                </h5>
                <p>0388123262200001</p>
            </div>

            <div className={style.contactAddressRow}>
                <h5>
                    <b>{t("contact.address.CONTACT_ADDRESS_ADDRESS_LABEL")}</b>
                </h5>
                <p>{t("contact.address.CONTACT_ADDRESS_ADDRESS_CONTENT")}</p>
            </div>

            <div className={style.contactAddressRow}>
                <h5>
                    <b>{t("contact.address.CONTACT_ADDRESS_PHONE_LABEL")}</b>
                </h5>
                <a href="tel:+908508112480">+90 (850) 811 24 80</a>
            </div>
        </div>
    );
};

export default ContactAddress;
