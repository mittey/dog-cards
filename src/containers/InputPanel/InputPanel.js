import React from "react";
import { Panel, Col } from "react-bootstrap";
import Input from "../../components/ui/Input/Input";
import Select from "../../components/ui/Select/Select";
import Textarea from "../../components/ui/Textarea/Textarea";

const inputPanel = props => {
  return (
    <div>
      <Col md={props.colmd}>
        <Panel>
          <Panel.Heading>Info</Panel.Heading>
          <Panel.Body>
            <Input
              id="input1"
              name="input1"
              colmd={4}
              placeholder="Enter something..."
              label="Input 1"
            />
            <Input
              id="input2"
              name="input2"
              colmd={4}
              placeholder="Enter something..."
              label="Input 2"
            />
            <Input
              id="input3"
              name="input3"
              colmd={4}
              placeholder="Enter something..."
              label="Input 3"
            />
            <Select
              id="select1"
              name="select1"
              colmd={4}
              placeholder="Enter something..."
              label="Select 1"
              options={props.options}
              changed={props.selectChanged}
            />
            <Select
              id="select2"
              name="select2"
              colmd={4}
              placeholder="Enter something..."
              label="Select 2"
              options={props.options}
              changed={props.selectChanged}
            />
            <Select
              id="select3"
              name="select3"
              colmd={4}
              placeholder="Enter something..."
              label="Select 3"
              options={props.options}
              changed={props.selectChanged}
            />
            <Textarea
              id="textarea1"
              name="textarea1"
              colmd={12}
              placeholder="Enter something..."
              label="Some big text"
            />
          </Panel.Body>
        </Panel>
      </Col>
    </div>
  );
};

export default inputPanel;
