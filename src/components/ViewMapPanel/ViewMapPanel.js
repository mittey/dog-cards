import React, { PureComponent } from "react";
import { Panel, Col } from "react-bootstrap";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class ViewMapPanel extends PureComponent {


  render() {
    

    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap defaultCenter={this.props.coordinates} defaultZoom={13}>
        <Marker
          onDragEnd={this.props.dragEnd}
          position={this.props.coordinates}
          draggable={true}
        />
      </GoogleMap>
    ));

    return (
      <div>
        <Col md={this.props.colmd}>
          <Panel>
            {/* <Panel.Heading>Укажите место на карте</Panel.Heading> */}
            <Panel.Body>
              <GoogleMapExample
                // colmd={4}
                containerElement={<div style={{ height: `278px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </Panel.Body>
          </Panel>
        </Col>
      </div>
    );
  }
}

export default ViewMapPanel;
