import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import MapContainer from './../map/spot_map_container';

class Spots extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentWillMount() {
    this.props.fetchSpots();
  }

  isSearchActive() {
    if (this.props.active) {
      let outerSpotsDiv = document.getElementById("outer-spots-div");
        if (outerSpotsDiv && !outerSpotsDiv.classList.contains("spots-index-map-active")) {
          outerSpotsDiv.classList.add("spots-index-map-active");
        }
      return <MapContainer/>
    }
       
  }

  render() {
    let map = this.isSearchActive();
    return (
      <div className="spots-and-map-div">
        <div id="outer-spots-div" className="outer-spots-div">
          <h2 id="spots-list-header">
            Explore all {this.props.spots.length} homes
          </h2>
          <div id="spots-list-container">
            <ul id="spots-results-list">
              {this.props.spots.map((spot) => (
                <Link key={spot._id} to={`/spot/${spot._id}`}>
                  <li key={spot._id} className="spot-list-item">
                    <div id="spot-list-photo-container">
                      <img alt="" id="spot-list-photo" src={spot.images[0].img_url} />
                    </div>
                    {/* add photos here */}
                    <p id="spot-list-description">{spot.name}</p>
                    <p id="spot-list-price">{spot.price} per night</p>
                    {/* <h1>{spot.average_rating}</h1> */}
                    {/* add total reviews count here */}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className="spacing-right-div">
        <div className="outer-map-div">        
          {map}
        </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Spots);
