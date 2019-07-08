import React from "react";

import {
  FormControl,
  FormGroup,
  ControlLabel,
  Col,
  HelpBlock
} from "react-bootstrap";

const select = props => {
  let options = null;
  if (props.options) {
    options = props.options.map(option => {
      if (typeof option !== "string" && option.id && option.name) {
        return (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        );
      } else {
        return <option key={option}>{option}</option>;
      }
    });
  }

  return (
    <Col md={props.colmd}>
      <FormGroup
        controlId={props.id}
        validationState={props.validationOptions.isValid ? null : "error"}
      >
        <ControlLabel>{props.label}</ControlLabel>
        <FormControl
          onChange={props.changed}
          componentClass="select"
          placeholder={props.placeholder}
          name={props.name}
          disabled={props.disabled}
          defaultValue={0}
        >
          <option value={0} disabled={true}>
            {props.defaultValueText}
          </option>

          {options}
        </FormControl>
        {props.validationOptions.isValid ? null : (
          <HelpBlock>{props.validationOptions.errorMessage}</HelpBlock>
        )}
      </FormGroup>
    </Col>
  );
};

export default select;
