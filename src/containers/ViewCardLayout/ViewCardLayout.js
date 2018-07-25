import React, { Component } from "react";
import { Col, Row, Panel } from "react-bootstrap";

import InfoPanel from "../../components/InfoPanel/InfoPanel";
import UserInfoPanel from "../../components/UserInfoPanel/UserInfoPanel";
import MapPanel from "../../components/MapPanel/MapPanel"

import "../../styles/bootstrap3/css/bootstrap.css";

class ViewCardLayout extends Component {
  state = {
    cardData: null,
    // peopleData: null
  };

    componentDidMount = () => {
        console.log(this.props);

        fetch(`http://localhost:8090/cards/${this.props.match.params.cardId}`)
            .then(result => result.json())
            .then(data => {
                console.log(data);
                this.setState({ cardData: data });
            });

            // fetch(`http://localhost:8090/people/1`)
            //   .then(result => result.json())
            //   .then(data => {
            //     console.log(data);
            //     this.setState({ peopleData: data });
            //   });
    };

  render() {
    return (
      <div>
        <Row style={{ marginTop: "10px" }}>
          <Col md={10} mdOffset={1}>
            <Panel>
              <Panel.Heading>Просмотр объявления</Panel.Heading>
              <Panel.Body>
                <InfoPanel cardData={this.state.cardData} colmd={8} />
                <UserInfoPanel cardData={this.state.cardData} colmd={4} />
                <MapPanel colmd={4} />
              </Panel.Body>
            </Panel>
          </Col>
        </Row>

        {/* <Image width="200" height="200" src="http://localhost:8090/picture/3" rounded /> */}
      </div>
    );
  }
}

export default ViewCardLayout;
