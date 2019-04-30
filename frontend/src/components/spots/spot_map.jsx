import React from 'react';

class SpotMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="map-container" ref="map" >
        Im the Map
      </div>
    )
  }
}


export default SpotMap;