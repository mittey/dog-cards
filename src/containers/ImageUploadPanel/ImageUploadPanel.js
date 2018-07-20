import React from "react";

import ImageUploader from "../../components/ui/ImageUploader/ImageUploader";
import { Col, Panel } from "react-bootstrap";

const imageUploadPanel = props => {
  return (
    <div>
      <Col md={props.colmd}>
        <Panel>
          <Panel.Heading>Загрузка фото</Panel.Heading>
          <Panel.Body>
            <ImageUploader pictureUploded={props.pictureUploded} />
          </Panel.Body>
        </Panel>
      </Col>
    </div>
  );
};

export default imageUploadPanel;
