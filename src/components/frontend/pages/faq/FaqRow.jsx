import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { ImCheckboxChecked } from "react-icons/im";
import style from "../../../../../styles/FaqRow.module.scss";

const FaqRow = ({ item }) => {
    return (
        <Fragment>
            <div className={style.faqRow}>
                <div className={style.faqTitle}>
                    <span>
                        <BsFillQuestionSquareFill className={style.faqIcon} />
                    </span>
                    <span className={style.faqText}>
                        <b>{item["FAQ_ITEMS_TITLE"]}</b>
                    </span>
                </div>
                <div className={style.faqContent}>
                    <span>
                        <ImCheckboxChecked className={style.faqIcon} />
                    </span>
                    <span className={style.faqText}>
                        {item["FAQ_ITEMS_CONTENT"]}
                    </span>
                </div>
            </div>
        </Fragment>
    );
};

FaqRow.propTypes = {
    item: PropTypes.object.isRequired,
};

export default FaqRow;
