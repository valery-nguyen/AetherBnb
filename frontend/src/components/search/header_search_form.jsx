import React from 'react';
import FormOptionsContainer from './form_options_container';

class HeaderSearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.hasActiveSearch = this.hasActiveSearch.bind(this);
  }

  hasActiveSearch() {
    if ( this.props.activeSearch.active ) {
      return (<FormOptionsContainer />)
    }
  }
  
  handleSubmit(e){
    e.preventDefault();
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

  render() {
    //Implement onChange on the input for autocompleting to locations
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="search" placeholder="search" />
          {this.hasActiveSearch}
        </form>
      </div>
    )
  }
}

export default HeaderSearchForm;