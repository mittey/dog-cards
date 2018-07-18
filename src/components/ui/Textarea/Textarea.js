import React from "react";

import { FormControl, FormGroup, ControlLabel, Col } from "react-bootstrap";

const Textarea = props => {
  return (
    <Col md={props.colmd}>
      <FormGroup controlId={props.id}>
        <ControlLabel>{props.label}</ControlLabel>
        <FormControl
          componentClass="textarea"
          placeholder={props.placeholder}
          name={props.name}
        />
      </FormGroup>
    </Col>
  );
};

export default Textarea;
