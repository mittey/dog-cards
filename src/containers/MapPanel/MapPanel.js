import React from "react";
import { Panel, Col } from "react-bootstrap";

const inputPanel = props => {
  return (
    <div>
      <Col md={props.colmd}>
        <Panel>
          <Panel.Heading>Map</Panel.Heading>
          <Panel.Body>There will be a map here...</Panel.Body>
        </Panel>
      </Col>
    </div>
  );
};

export default inputPanel;
