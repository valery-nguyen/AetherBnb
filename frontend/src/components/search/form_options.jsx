import React from 'react';
import FormDateRangeContainer from './form_date_range_container';
import FormGuestCountContainer from './form_guest_count_container';
import FormPriceRangeContainer from './form_price_range_container';


const FormOptions = () => {

  return ( 
    <div className="form-options-modal" >  
      <FormDateRangeContainer />
      <FormGuestCountContainer />
      <FormPriceRangeContainer />
    </div> 
  )
};

export default FormOptions;