import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";
import { ImPlay3 } from "react-icons/im";
import style from "../../../../../styles/Video.module.scss";
import Modal from "../../../../../_tools/components/Modal";
import videosJson from "../../../../../_utils/videos.json";
import { useRouter } from "next/router";

const Video = ({ video, background, title }) => {
  const [modalState, setModalState] = useState(false);

  const styles = {
    background: "url(" + background + ")",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right top",
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
          <h1>{title}</h1>
        </Row>
      </Container>
      {modalState && (
        <Modal selector="#__modal" toogle={setModalState}>
          <embed src={video}></embed>
        </Modal>
      )}
    </div>
  );
};

Video.propTypes = {
  video: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Video;
