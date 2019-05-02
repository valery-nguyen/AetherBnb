

class MapAndMarkers extends React.Component {
  static defaultProps = {
    center: {
      lat: 30,
      lng: -30
    },
    zoom: 0
  };

  
  render() {
    const {
      classes,
      locations,
      hoveredCardId,
      pageid
    } = this.props;
    let MapMarkers = locations.map(
      (location, index) => {
        return (
          <MapMarker
            key={location.id}
            lat={location.lat}
            lng={location.lng}
            name={
              location.location_name
            }
            pageid={location.pageid}
            hoveredCardId={
              hoveredCardId
            }
          />
        );
      }
    );
    return (
      <div
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{
            key:
              "AIzaSysBBvQLsewI7BPpXln_Jzl_tIUVsH1f775C7GXM",
            v: "3.31"
          }}
          defaultCenter={
            this.props.center
          }
          defaultZoom={this.props.zoom}
          hoverDistance={20 / 2}
          options={createMapOptions}
        >
          {MapMarkers}
        </GoogleMapReact>
      </div>
    );
  }
}