const google = window.google;

export default class MarkerManager {
  constructor(map) {
    debugger;
    this.map = map;
    this.markers = {};
  }

  updateMarkers(spots) {
    console.log('updating map');
    spots.forEach((spot) => {
      if (!Object.keys(this.markers).includes(spot.id)) {
        this.createMarkerFromSpot(spot);
      }
    });
  }

  createMarkerFromSpot(spot) {
    // debugger;
    // const pos = new google.maps.LatLng(spot.lat, spot.lng);
    const position = { lat: spot.lat, lng: spot.lng };
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      spotId: spot._id
    });
    // marker.addListener('click', () => this.handleClick(bench));
    this.markers[marker.spotId] = marker;
  }

}