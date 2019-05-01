import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Spots extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchSpots();
  }

  render() {
    return (
      <div>
        <h2 id="spots-list-header">
          Explore all {this.props.spots.length} homes
        </h2>
        <div id="spots-list-container">
          <ul id="spots-results-list">
            {this.props.spots.map(spot => (
              <Link to={`/spot/${spot._id}`}>
                <li key={spot._id} className="spot-list-item">
                  <div id="spot-list-photo-container">
                    <img id="spot-list-photo" src={spot.images[0].img_url} />
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
    );
  }
}

export default withRouter(Spots);
