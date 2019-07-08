import React, { Component } from "react";

import { Col, Panel, Image, Label } from "react-bootstrap";

class InfoPanel extends Component {
  render() {
    let componentLayout = <p>Loading...</p>;

    if (this.props.cardData) {
      componentLayout = (
        <Col md={this.props.colmd}>
          <Panel>
            <Panel.Heading>
              <b>
                {" "}
                Пропала {this.props.cardData.animal.breed.species.name} -{" "}
                {this.props.cardData.animal.breed.name}
              </b>
            </Panel.Heading>
            <Panel.Body>
              <Col md={5}>
                <Image
                  src={`http://localhost:8090/picture/${
                    this.props.cardData.picture.id
                  }`}
                  rounded
                  responsive
                />
              </Col>
              <Col style={{width:"12%"}} md={2}>
                <p>
                  <Label>Животное:</Label>
                </p>
                <p>
                  <Label>Пол:</Label>
                </p>
                <p>
                  <Label>Порода:</Label>
                </p>
                <p>
                  <Label>Кличка:</Label>
                </p>
                <p>
                  <Label>Возраст:</Label>
                </p>
                <p>
                  <Label>Окрас:</Label>
                </p>
              </Col>
              <Col md={4}>
                <p>{this.props.cardData.animal.breed.species.name}</p>
                <p>{this.props.cardData.animal.gender}</p>
                <p>{this.props.cardData.animal.breed.name}</p>
                <p>{this.props.cardData.animal.alias}</p>
                <p>{`${this.props.cardData.animal.age} лет`}</p>
                <p>{this.props.cardData.animal.color}</p>
                
              </Col>
              <Col md={12}>
                <p style={{ marginBottom: "10px", marginTop: "15px" }}>
                  <Label>Текст объявления:</Label>
                </p>
                <p>{this.props.cardData.description}</p>
              </Col>
            </Panel.Body>
          </Panel>
        </Col>
      );
    }

    return <div>{componentLayout}</div>;
  }
}

export default InfoPanel;
