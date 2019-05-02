import React from 'react';
import FormOptions from './form_options';

class HeaderSearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.hasActiveSearch = this.hasActiveSearch.bind(this);
    this.activateSearch = this.activateSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    const inputEl = document.getElementById("header-search-input");
    let options = {
      searchText: inputEl.value,
      startDate: this.props.activeSearch.startDate,
      endDate: this.props.activeSearch.endDate,
      guestCount: this.props.activeSearch.guestCount,
      priceRange: this.props.activeSearch.priceRange
    };
    this.props.fetchSpots(options);
  }

  hasActiveSearch() {
    if ( this.props.activeSearch.active ) {
      return (<FormOptions />)
    }
  }
  
  handleSubmit(e){
    e.preventDefault();
    this.activateSearch();
    let options = {
      searchText: e.target.value,
      startDate: this.props.activeSearch.startDate,
      endDate: this.props.activeSearch.endDate,
      guestCount: this.props.activeSearch.guestCount,
      priceRange: this.props.activeSearch.priceRange
    };
    this.props.fetchSpots(options);
  }

  activateSearch() {
    this.props.receiveSearchStatus(true);
  }

  render() {
    //Implement onChange on the input for autocompleting to locations
    let options;
    if(this.props.activeSearch.active) {
      options = <div><FormOptions /></div>;
    }

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input id="header-search-input" className="header-search-field" type="text" placeholder="Search" />
        </form>
          {options}
      </div>
    )
  }
}

export default HeaderSearchForm;