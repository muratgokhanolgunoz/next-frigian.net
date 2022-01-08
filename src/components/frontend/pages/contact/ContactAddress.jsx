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
                    // src="https://www.google.com/maps/embed/v1/place?q=frigian.com+%7C+Navlun+arama+motoru&amp;key=AIzaSyCNT-Ezna_0Tut3qJFC9ODjXePQEo5pUDQ"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1265.7816653171944!2d28.64428038162115!3d41.013153240917774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55f0a2cadab99%3A0x18f2a233e0569753!2sEkinoks!5e0!3m2!1sen!2str!4v1641676838958!5m2!1sen!2str"
                    allowFullScreen=""
                    loading="lazy"></iframe>
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
