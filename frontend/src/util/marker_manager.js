import { createPopupClass } from './popup_util';
const google = window.google;


export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};

    this.Popup = createPopupClass();
  }

  updateMarkers(spots) {
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
      label: `$${spot.price}`,
      spotId: spot._id,
      
    });

    // marker.addListener('click', () => this.handleClick(bench));

    this.markers[marker.spotId] = marker;
  }

}