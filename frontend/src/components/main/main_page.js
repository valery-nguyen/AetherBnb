import React from 'react';
import SpotMapContainer from './../map/spot_map_container';

class MainPage extends React.Component {

  render() {
    return (
      <div className="map">
        <SpotMapContainer/>
      </div>
    );
  }
}

export default MainPage;