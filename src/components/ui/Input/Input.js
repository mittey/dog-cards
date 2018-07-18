import React from "react";

import { FormGroup, Col, ControlLabel, FormControl } from "react-bootstrap";

const input = props => {
  return (
    <Col md={props.colmd}>
      <FormGroup controlId={props.id}>
        <ControlLabel>{props.label}</ControlLabel>
        <FormControl
          onChange={props.changed}
          name={props.name}
          type="text"
          placeholder={props.placeholder}
        />
      </FormGroup>
    </Col>
  );
};

export default input;
