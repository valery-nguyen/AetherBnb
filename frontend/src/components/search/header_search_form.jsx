import React from 'react';
import FormOptions from './form_options';

class HeaderSearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.hasActiveSearch = this.hasActiveSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  hasActiveSearch() {
    if ( this.props.activeSearch.active ) {
      return (<FormOptions />)
    }
  }
  
  handleSubmit(e){
    e.preventDefault();
    let options = {
      searchText: e.target.value,
      startDate: this.props.activeSearch.startDate,
      endDate: this.props.activeSearch.endDate,
      guestCount: this.props.activeSearch.guestCount,
      priceRange: this.props.activeSearch.priceRange
    };
    this.props.fetchSpots(options);
    // .then do something!
  }

  render() {
    //Implement onChange on the input for autocompleting to locations
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="search" placeholder="search" />
          {/* {this.hasActiveSearch()} */}
        </form>
        <div><FormOptions/></div>
      </div>
    )
  }
}

export default HeaderSearchForm;