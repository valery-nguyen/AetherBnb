import React from 'react';
// import { Link } from 'react-router-dom';

class Profile extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    let currentUserId = null;
    if (this.props.currentUser.token) {
      currentUserId = this.props.currentUser.token.id;
    } else {
      currentUserId = this.props.currentUser.id;
    }
    
    this.props.fetchUserBookings(currentUserId);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.history.location.pathname !== this.props.history.location.pathname) {
      let currentUserId = null;
      if (this.props.currentUser.token) {
        currentUserId = this.props.currentUser.token.id;
      } else {
        currentUserId = this.props.currentUser.id;
      }
      this.props.fetchUserBookings(this.props.currentUserId);
    }
  }

  render() {
    if (!this.props.bookings) return null;
    const bookings = this.props.bookings;

    const bookingsLis = bookings.map( booking => {
        const startDate = new Date(booking.start_date);
        const endDate = new Date(booking.end_date);
        const createdAt = new Date(booking.created_at);
        return (
          <li key={booking._id}>
            <div>
              <p>Booking Confirmation: {booking.spot_id}</p>
              <p>Booked on: {createdAt.getMonth()+1}/{createdAt.getDate()+1}/{createdAt.getFullYear()}</p>
              <p>From: {startDate.getMonth()+1}/{startDate.getDate()+1}/{startDate.getFullYear()}</p>
              <p>Until: {endDate.getMonth()+1}/{endDate.getDate()+1}/{endDate.getFullYear()}</p>
              <p>Booked for {booking.guest_count} occupant(s)</p>
            </div>
            <button onClick={(e) => {e.preventDefault(); this.props.deleteBooking(booking._id);}}>delete booking</button>
          </li>
        )
      })

    return (
      <div className="profile">
        <h1>User Profile</h1>
        <h2>Your bookings:</h2>
        <ul>{bookingsLis}</ul>
      </div>
    );
  }
}

export default Profile;