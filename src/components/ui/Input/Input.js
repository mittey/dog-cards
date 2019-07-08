import React from "react";

import {
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  HelpBlock
} from "react-bootstrap";

const input = props => {
  return (
    <Col md={props.colmd}>
      <FormGroup
        controlId={props.id}
        validationState={props.validationOptions.isValid ? null : "error"}
      >
        <ControlLabel>{props.label}</ControlLabel>
        <FormControl
          onChange={props.changed}
          name={props.name}
          type="text"
          placeholder={props.placeholder}
        />
        {props.validationOptions.isValid ? null : (
          <HelpBlock>{props.validationOptions.errorMessage}</HelpBlock>
        )}
      </FormGroup>
    </Col>
  );
};

export default input;
