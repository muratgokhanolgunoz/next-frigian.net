/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { ImPlay3 } from "react-icons/im";
import style from "../../../../../styles/Video.module.scss";
import Modal from "../../../../../_tools/components/Modal";
import { useRouter } from "next/router";

const Video = (_) => {
    const { t } = useTranslation("common");
    const [modalState, setModalState] = useState(false);
    const router = useRouter();

    const styles = {
        background: "url(./assets/img/frigian-dashboard.jpg)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    };

    return (
        <div id="video" className={style.video} style={styles}>
            <Container>
                <Row className={style.videoInner}>
                    <span>
                        <a onClick={() => setModalState(true)}>
                            <ImPlay3 className={style.videoIcon} />
                        </a>
                    </span>
                    <br />
                    <h1>{t("home.video.VIDEO_TEXT")}</h1>
                </Row>
            </Container>
            {modalState && (
                <Modal selector="#__modal" toogle={setModalState}>
                    <embed
                        src={"./assets/videos/intro_" + router.locale + ".mp4"}
                    ></embed>
                </Modal>
            )}
        </div>
    );
};

export default Video;
