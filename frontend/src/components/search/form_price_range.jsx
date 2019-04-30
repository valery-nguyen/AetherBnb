import React from 'react';
import Rheostat from 'rheostat';
import './form_price_range_slider.css';

class FormPriceRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minValue: this.props.activeSearch.priceRange.minValue,
      maxValue: this.props.activeSearch.priceRange.maxValue
    };
    this.changeValues = this.changeValues.bind(this);
  }

  changeValues(data) {
  
    this.setState({
      minValue: data.values[0],
      maxValue: data.values[1]
    });
  }

  toggleModal() {
    let modal = document.getElementById("price-range-modal");
    modal.classList.toggle("show-modal");
  }

  applyPriceRange() {
    this.props.receivePriceRange(this.state);
  }

  clearPriceRange() {
    this.setState({
      minValue: 0,
      maxValue: 1000
    });
  }

  render() {
    return (

      <div>
        <button onClick={() => this.toggleModal()}>Price</button>
        <div className="price-range-modal" id="price-range-modal" >
          <form >

            <Rheostat
              min={0}
              max={1000}
              values={[0, 1000]}
              onValuesUpdated={(data) => this.changeValues(data)}
            />
            
            <div>${this.state.minValue}</div>  <div>${this.state.maxValue}</div>

            <br />
            <button onClick={() => this.clearPriceRange()}>Clear</button>
            <button onClick={() => this.applyPriceRange()}>Apply</button>

          </form>
        </div>
      </div>
    )
  }
}

export default FormPriceRange;





  

