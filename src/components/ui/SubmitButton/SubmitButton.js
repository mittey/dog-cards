import React from "react";

import { FormGroup, Col, Button } from "react-bootstrap";

const submitButton = () => {
  return (
    <FormGroup>
      <Col md={10}>
        <Button className="pull-right btn-success"  type="submit">
          Сохранить
        </Button>
      </Col>
    </FormGroup>
  );
};

export default submitButton;
