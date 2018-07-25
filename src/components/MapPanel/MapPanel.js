import React, { PureComponent } from "react";
import { Panel, Col } from "react-bootstrap";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class Map extends PureComponent {
  dragHandler = event => {
    console.log(event.latLng.lat(), event.latLng.lng());
  };

  render() {
    const pos = { lat: 59.939095, lng: 30.315868 };

    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap defaultCenter={pos} defaultZoom={13}>
        <Marker
          onDragEnd={this.dragHandler}
          position={pos}
          draggable={true}
          onClick={(event, marker) => {
            console.log("marker was clicked", event);
          }}
        />
      </GoogleMap>
    ));

    return (
      <div>
        <Col md={this.props.colmd}>
          <Panel>
            <Panel.Heading>Укажите место на карте</Panel.Heading>
            <Panel.Body>
              <GoogleMapExample
                // colmd={4}
                containerElement={<div style={{ height: `300px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </Panel.Body>
          </Panel>
        </Col>
      </div>
    );
  }
}

export default Map;
