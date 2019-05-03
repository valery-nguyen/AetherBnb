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
    var contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div >" +
      `<img style="max-height: 120px; max-width: 200px;" alt="" src=${
        spot.images[0].img_url
      }>` +
      `<h1 id="firstHeading" class="firstHeading" style="max-width: 200px; word-break: break-word;"><b>${
        spot.name
      }</b></h1>` +
      '<div id="bodyContent">' +
      `<p><b>$${spot.price} per night</b></p>` +
      "</div>" +
      "</div>";

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    const marker = new google.maps.Marker({
      position,
      map: this.map,
      label: {
        text: `$${spot.price}`,
        fontSize: "9px",
        fontWeight: "bold"
      },
      spotId: spot._id
    });
    marker.addListener("click", function() {
      infowindow.open(this.map, marker);
    });
    this.markers[marker.spotId] = marker;
  }

}