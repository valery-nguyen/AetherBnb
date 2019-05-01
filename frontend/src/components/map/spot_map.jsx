import './spot_map.css';
import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from './../../util/marker_manager';


const google = window.google;

class SpotMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.spots);

  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  render() {
    return (
    <div id="map-container" ref={ map => this.mapNode = map }> </div>
    );
  }
  
}


export default withRouter(SpotMap);