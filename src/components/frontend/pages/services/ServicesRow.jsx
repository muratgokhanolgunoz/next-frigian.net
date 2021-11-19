import React from "react";
import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";
import style from "../../../../../styles/ServicesRow.module.scss";

const ServicesRow = ({ item }) => {
    return (
        <>
            <div className={style.servicesRow}>
                <div className={style.servicesItem}>
                    <span>
                        <FaCheckCircle className={style.servicesIcon} />
                    </span>
                    <b>
                        {item["SERVICES_COLUMNS_ITEMS_TITLE"]}
                        {" : "}
                    </b>
                    {item["SERVICES_COLUMNS_ITEMS_CONTENT"]}
                </div>
            </div>
        </>
    );
};

ServicesRow.propTypes = {
    item: PropTypes.object.isRequired,
};

export default ServicesRow;
