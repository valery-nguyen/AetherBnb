import React from 'react';
import { withRouter } from 'react-router-dom';
import './spots.scss'
class Spot extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchSpots();
  }

  render() {
    let spotsList = [];
    

    return (
      <div>
        <h2 id="spots-list-header">Explore all *** homes</h2>
        <div id="spots-list-container">
          <ul id="spots-results-list">
            {this.props.spots.map(spot => (
              <li class="spot-list-item">
                <div id="photo"></div>
                {/* add photos here */}
                <p id="spot-list-description">{spot.name}</p>
                <p id="spot-list-price">{spot.price} per night</p>
                {/* <h1>{spot.average_rating}</h1> */}
                {/* add total reviews count here */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Spot);
