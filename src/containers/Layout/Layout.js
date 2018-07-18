import React, { Component } from "react";

import { Row, Col, Panel } from "react-bootstrap";
import InputPanel from "../InputPanel/InputPanel";
import MapPanel from "../MapPanel/MapPanel";
import SubmitButton from "../../components/ui/SubmitButton/SubmitButton";

class Layout extends Component {
  state = {
    options: [],
    selectValue: null
  };

  formSubmitHandler = event => {
    event.preventDefault();
  };

  selectChangeHanlder = event => {
    this.setState({ selectValue: event.target.value });
  };

  componentDidMount = () => {
    fetch("https://reqres.in/api/users")
      .then(response => response.json())
      .then(data =>
        this.setState({
          options: data.data.map(user => {
            return user.first_name;
          })
        })
      );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmitHandler}>
          <Row style={{ marginTop: "10px" }}>
            <Col md={10} mdOffset={1}>
              <Panel>
                <Panel.Body>
                  <InputPanel
                    selectChanged={this.selectChangeHanlder}
                    options={this.state.options}
                    colmd={8}
                  />
                  <MapPanel colmd={4} />
                  <SubmitButton />
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

export default Layout;
