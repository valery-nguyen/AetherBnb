import React from 'react';
import './profile.css';
// import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    let currentUserId = null;
    if (this.props.currentUser.token) {
      currentUserId = this.props.currentUser.token.id;
    } else {
      currentUserId = this.props.currentUser.id;
    }
    let d;
    this.props.fetchUserBookings(currentUserId)
      .then(() => Object.values(this.props.bookings).forEach((booking) => {
        this.props.fetchSpot(booking.spot_id).then((spot) => d = spot);

      }));
      debugger;
  }

  componentDidUpdate(prevProps) {
    if(prevProps.history.location.pathname !== this.props.history.location.pathname) {
      let currentUserId = null;
      if (this.props.currentUser.token) {
        currentUserId = this.props.currentUser.token.id;
      } else {
        currentUserId = this.props.currentUser.id;
      }
      this.props.fetchUserBookings(this.props.currentUserId)
        .then(() => Object.values(this.props.bookings).forEach((booking) => {
  
          this.props.fetchSpot(booking.spot_id);
        }));
    }
  }

  render() {
    if (!this.props.bookings) return null;
    if (Object.keys(this.props.spots).length < Object.keys(this.props.bookings).length) return null;
    const bookings = this.props.bookings;

    const bookingsLis = bookings.map( booking => {
        const startDate = new Date(booking.start_date);
        const endDate = new Date(booking.end_date);
        const createdAt = new Date(booking.created_at);
        const imgUrl = this.props.spots[booking.spot_id].images[0].img_url;
        return (
          <li key={booking._id}>
            <div>
              <img className="bookings-photo" src={imgUrl} alt="" />
              <div className="profile-booking-text">
                <p>Booking Confirmation: {booking.spot_id}</p>
                <p>Booked on: {createdAt.getMonth()+1}/{createdAt.getDate()+1}/{createdAt.getFullYear()}</p>
                <p>From: {startDate.getMonth()+1}/{startDate.getDate()+1}/{startDate.getFullYear()}</p>
                <p>Until: {endDate.getMonth()+1}/{endDate.getDate()+1}/{endDate.getFullYear()}</p>
                <p>Booked for {booking.guest_count} occupant(s)</p>
              </div>
            </div>
            <div className="profile-booking-delete-button-div">
              <button onClick={(e) => {e.preventDefault(); this.props.deleteBooking(booking._id);}}>Delete booking</button>
            </div>
          </li>
        )
      })

    return (
      <div className="profile">
        <h2>Your bookings:</h2>
        <ul>{bookingsLis}</ul>
      </div>
    );
  }
}

export default Profile;