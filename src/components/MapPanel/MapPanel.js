import React, {Component} from "react";
import { Panel, Col } from "react-bootstrap";
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends Component {

  render() {
    const GoogleMapExample = withGoogleMap(props => (
       <GoogleMap
         defaultCenter = { { lat: 59.939095, lng: 30.315868 } }
         defaultZoom = { 13 }
       >
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
          containerElement={ <div style={{ height: `340px` }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        /></Panel.Body>
        </Panel>
      </Col>
    </div>
  );
}
};

export default Map;
