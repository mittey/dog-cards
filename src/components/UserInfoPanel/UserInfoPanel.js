import React from "react";
import { Label, Col, Panel } from "react-bootstrap";

const userInfoPanel = props => {
  return (
    <Col md={props.colmd}>
      <Panel>
        <Panel.Heading>Контактная информация</Panel.Heading>
        <Panel.Body>
          <p>
            <Label>Имя</Label> Вася
          </p>
          <p>
            <Label>Телефон</Label> 546564616
          </p>
          <p>
            <Label>Email</Label> фввцвф
          </p>
        </Panel.Body>
      </Panel>
    </Col>
  );
};

export default userInfoPanel;
