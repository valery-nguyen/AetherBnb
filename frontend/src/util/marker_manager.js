import { createPopupClass } from './popup_util';
import React from 'react';
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
    // var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

    // let content = document.createElement('div');
    // content.innerHTML = (<div>${spot.price}</div>);
    // let popup = new this.Popup(
    // position,
    // content);
    // popup.setMap(this.map)

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

// icon: {
//   url: 'https://www.pinclipart.com/picdir/big/13-136680_download-square-speech-bubble-clipart-speech-balloon-rectangular.png',
//     scaledSize: new google.maps.Size(32, 32)
// }