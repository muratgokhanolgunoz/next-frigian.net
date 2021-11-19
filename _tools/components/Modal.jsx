/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import GlobalContext from "../../_store/GlobalContext";
import { createPortal } from "react-dom";
import { VscChromeClose } from "react-icons/vsc";
import style from "../../styles/Modal.module.scss";

const Modal = ({ children, selector, toogle }) => {
    const [mounted, setMounted] = useState(false);
    const globalContext = useContext(GlobalContext);

    useEffect(() => {
        // componentDidMount yerine çalışır.
        setMounted(true);
        globalContext.funcSetModalStyleState(true);

        // componentDidCatch yerine çalışır.
        return () => {
            setMounted(false);
            globalContext.funcSetModalStyleState(false);
        };
    }, [selector]);

    return (
        mounted &&
        createPortal(
            <div className={style.modal}>
                <div className={style.modalHeader}>
                    <button onClick={() => toogle(false)}>
                        <VscChromeClose />
                    </button>
                </div>
                <div className={style.modalBody}>{children}</div>
            </div>,
            document.querySelector(selector)
        )
    );
};

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    selector: PropTypes.string.isRequired,
    toogle: PropTypes.func.isRequired,
};

export default Modal;
