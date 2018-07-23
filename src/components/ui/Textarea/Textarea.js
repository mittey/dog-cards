import React from "react";

import { FormControl, FormGroup, ControlLabel, Col } from "react-bootstrap";

const Textarea = props => {
  return (
    <Col md={props.colmd}>
      <FormGroup controlId={props.id}>
        <ControlLabel>{props.label}</ControlLabel>
        <FormControl
          componentClass="textarea"
          style={{height: '157px'}}
          placeholder={props.placeholder}
          name={props.name}
          onChange={props.changed}
        />
      </FormGroup>
    </Col>
  );
};

export default Textarea;
