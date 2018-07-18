import React from "react";

import { FormControl, FormGroup, ControlLabel, Col } from "react-bootstrap";

const select = props => {
  const options = props.options.map(option => {
    return <option key={option}>{option}</option>;
  });

  return (
    <Col md={props.colmd}>
      <FormGroup controlId={props.id}>
        <ControlLabel>{props.label}</ControlLabel>
        <FormControl
          onChange={props.changed}
          componentClass="select"
          placeholder={props.placeholder}
          name={props.name}
        >
          {options}
        </FormControl>
      </FormGroup>
    </Col>
  );
};

export default select;
