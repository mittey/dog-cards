import React from "react";

import {
  FormControl,
  FormGroup,
  ControlLabel,
  Col,
  HelpBlock
} from "react-bootstrap";

const Textarea = props => {
  return (
    <Col md={props.colmd}>
      <FormGroup
        controlId={props.id}
        validationState={props.validationOptions.isValid ? null : "error"}
      >
        <ControlLabel>{props.label}</ControlLabel>
        <FormControl
          componentClass="textarea"
          style={{ height: "80px" }}
          placeholder={props.placeholder}
          name={props.name}
          onChange={props.changed}
        />
        {props.validationOptions.isValid ? null : (
          <HelpBlock>{props.validationOptions.errorMessage}</HelpBlock>
        )}
      </FormGroup>
    </Col>
  );
};

export default Textarea;
