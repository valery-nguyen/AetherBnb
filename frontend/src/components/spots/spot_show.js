import React from 'react';
import { withRouter } from 'react-router-dom';

class SpotShow extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    if (!this.props.spot) {
      this.props.fetchSpot(this.props.spot_id);
    }
  }

  render() {
    if (!this.props.spot) return (<div></div>)

    return (
      <div>
        <div className="spotshow-main">
          <div id="spotshow-photo-container">
            <img className="spotshow-photo-large" src={this.props.spot.images[0].img_url} alt="" />
            <img className="spotshow-photo-large" src={this.props.spot.images[1].img_url} alt="" />
          </div>
          <div id="outer">
            <div className="spotshow-info-column">
              <p className="spotshow-name">{this.props.spot.name}</p>
              <p className="spotshow-city">{this.props.spot.city} </p>
              <span className="spotshow-occupancy">Occupancy<br />
                <p className="s">{this.props.spot.occupancy} guests</p>
              </span>
              <div className="spotshow-description">
                <p>
                  {this.props.spot.description}
                </p>
              </div>

            </div>
            <div className="check-in-box">
              {/* <ReservationFormContainer /> */}
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(SpotShow);