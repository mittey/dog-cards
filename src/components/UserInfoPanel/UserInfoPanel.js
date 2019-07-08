import React, { Component } from "react";
import { Label, Col, Panel } from "react-bootstrap";

// const userInfoPanel = props => {
//   return (
//     <Col md={props.colmd}>
//       <Panel>
//         <Panel.Heading>Контактная информация</Panel.Heading>
//         <Panel.Body>
//           <p>
//             <Label>Имя</Label> 
//             {this.props.peopleData.person.name}
//           </p>
//           <p>
//             <Label>Телефон</Label> 
//             {this.props.peopleData.person.phone}
//           </p>
//           <p>
//             <Label>Email</Label> 
//             {this.props.peopleData.person.email}
//           </p>
//         </Panel.Body>
//       </Panel>
//     </Col>
//   );
// };
class UserInfoPanel extends Component {
  render() {
  let userInfoComponentLayout = <p>Loading...</p>;

  if (this.props.cardData) {
     userInfoComponentLayout =  (
        <Col md={this.props.colmd}>
          <Panel>
            <Panel.Heading>
              Контактная информация
              </Panel.Heading>
            <Panel.Body>
            <Col md={3}>
              <p>
                <Label>Имя:</Label>
              </p>
              <p>
                <Label>Телефон:</Label>
              </p>
              <p>
                <Label>Email:</Label> 
              </p>
              </Col>
              <Col md={6}>
              <p>
               {this.props.cardData.person.name}
              </p>
              <p>
              {this.props.cardData.person.phone}
              </p>
              <p>
              {this.props.cardData.person.email}
              </p>
              </Col>
            </Panel.Body>
          </Panel>
        </Col>
      );
    }

    return <div>{userInfoComponentLayout}</div>;
  }
}


export default UserInfoPanel;
