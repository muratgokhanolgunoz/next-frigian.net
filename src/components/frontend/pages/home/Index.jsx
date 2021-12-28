import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import Video from "./Video";
import Why from "./Why";
import Widget from "./Widget";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";
import Modal from "../../../../../_tools/components/Modal";
import videosJson from "../../../../../_utils/videos.json";

const Index = () => {
  const [activeVideo, setActiveVideo] = useState(undefined);
  const [modalState, setModalState] = useState(false);
  const router = useRouter();
  const { t } = useTranslation("common");

  console.log(videosJson[1].path);

  useEffect(() => {
    if (
      router.query.video !== undefined &&
      router.query.video <= videosJson.length
    ) {
      setActiveVideo(router.query.video);
      setModalState(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="home">
      <Banner />
      <Widget />
      <Why />
      <Container fluid style={{ padding: "0" }}>
        <Video
          video={videosJson[router.locale === "tr" ? 0 : 1].path}
          background={`./assets/img/frigian-dashboard.jpg`}
          title={t("home.video.VIDEO_TEXT")}
        />
      </Container>
      {modalState && (
        <Modal selector="#__modal" toogle={setModalState}>
          <embed
            src={activeVideo !== undefined && videosJson[activeVideo].path}
          ></embed>
        </Modal>
      )}
    </div>
  );
};

export default Index;
