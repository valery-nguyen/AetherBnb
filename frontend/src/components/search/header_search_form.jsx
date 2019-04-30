import React from 'react';
import FormOptions from './form_options';

class HeaderSearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.hasActiveSearch = this.hasActiveSearch.bind(this);
    this.activateSearch = this.activateSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  hasActiveSearch() {
    if ( this.props.activeSearch.active ) {
      return (<FormOptions />)
    }
  }
  
  handleSubmit(e){
    e.preventDefault();
    this.activateSearch();
    this.props.fetchSpots({
      search_text: e.target.value,
      start_date: this.props.activeSearch.start_date,
      end_date: this.props.activeSearch.end_date,
      guest_count: this.props.activeSearch.guest_count,
      price_min: this.props.activeSearch.price_min,
      price_max: this.props.activeSearch.price_max
    });
    // .then do something!
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
          <input className="header-search-field" type="search" placeholder="Search" />
        </form>
          {options}
      </div>
    )
  }
}

export default HeaderSearchForm;