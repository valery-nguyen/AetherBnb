const google = window.google;

export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};

  }

  updateMarkers(spots) {
    console.log('updating map');
    spots.forEach((spot) => {
      if (!Object.keys(this.markers).includes(spot.id)) {
        this.createMarkerFromBench(spot);
      }
    });
  }

  createMarkerFromBench(spot) {
    const pos = new google.maps.LatLng(spot.lat, spot.lng);
    const marker = new google.maps.Marker({
      pos,
      map: this.map,
      spotId: spot.id
    });
    // marker.addListener('click', () => this.handleClick(bench));
    this.markers[marker.spotId] = marker;
  }

}