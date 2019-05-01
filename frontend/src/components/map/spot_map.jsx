import './spot_map.css';
import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from './../../util/marker_manager';

const google = window.google;

class SpotMap extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    const mapOptions = {
      center: this.props.searchParams.location, 
      zoom: 12
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.spots);

    this.map.addListener('bounds_changed', () => {
      const mapBounds = this.map.getBounds();
      const southWest = mapBounds.getSouthWest();
      const northEast = mapBounds.getNorthEast();
      const bounds = { sw: { lat: southWest.lat(), lng: southWest.lng() }, 
      ne: { lat: northEast.lat(), lng: northEast.lng() }};
      this.props.receiveBounds(bounds);
    });
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