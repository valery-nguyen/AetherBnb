import React from 'react';
import FormOptions from './form_options';
import { withRouter } from 'react-router-dom';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import './auto_complete.css'

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {

    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        const location = latLng;
        this.props.receiveLocation(location);
        this.activateSearch();
        //update spots with bounds slice of state

        let options = {
          bounds: this.props.activeSearch.bounds,
          startDate: this.props.activeSearch.startDate,
          endDate: this.props.activeSearch.endDate,
          guestCount: this.props.activeSearch.guestCount,
          priceRange: this.props.activeSearch.priceRange
        };
        this.props.fetchSpots(options);
        this.props.history.push("/spots");
      })
    .catch(error => console.error('Error', error));
  };

  // handleSubmit(e){
  //   debugger;
  //   e.preventDefault();
  //   console.log("submitted");
  //   this.activateSearch();
  //   let options = {
  //     searchText: e.target.value,
  //     startDate: this.props.activeSearch.startDate,
  //     endDate: this.props.activeSearch.endDate,
  //     guestCount: this.props.activeSearch.guestCount,
  //     priceRange: this.props.activeSearch.priceRange
  //   };
  //   this.props.fetchSpots(options);
    
  // }

  activateSearch() {
    this.props.receiveSearchStatus(true);
  }

  render() {

    let options;
    if (this.props.activeSearch.active) {
      options = <div><FormOptions /></div>;
    }

    return (
      <div>
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        onSubmit={this.handleSubmit}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
              
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      {options}
      </div>
    );
  }
}

export default withRouter(AutoComplete);