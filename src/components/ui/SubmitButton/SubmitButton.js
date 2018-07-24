import React from "react";

import { FormGroup, Col, Button } from "react-bootstrap";

const submitButton = () => {
  return (
    <FormGroup>
      <Col md={11}>
        <Button className="pull-right" type="submit">
          Сохранить
        </Button>
      </Col>
    </FormGroup>
  );
};

export default submitButton;
