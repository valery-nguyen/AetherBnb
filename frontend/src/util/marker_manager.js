const google = window.google;


export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.removeMarker = this.removeMarker.bind(this);
  }

  updateMarkers(spots) {
    const spotsObj = {};
    spots.forEach(spot => spotsObj[spot._id] = spot);

    Object.keys(this.markers)
      .filter(spotId => !spotsObj[spotId])
      .forEach((spotId) => this.removeMarker(this.markers[spotId]));
    
    spots
      .filter(spot => !this.markers[spot._id])
      .forEach(newSpot => this.createMarkerFromSpot(newSpot));
  }

  removeMarker(marker) {
    this.markers[marker.spotId].setMap(null);
    delete this.markers[marker.spotId];
  }

  createMarkerFromSpot(spot) {
    const position = { lat: spot.lat, lng: spot.lng };
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      label: `$${spot.price}`,
      spotId: spot._id,
      
    });

    // marker.addListener('click', () => this.handleClick(bench));

    this.markers[marker.spotId] = marker;
  }

}