import React from 'react';
import './splash_page.css'

class MainPage extends React.Component {

  render() {
    // debugger;
    return (
      <div className="splash-page">
      <h1 className="leave-me-alone" >Please go away</h1>
        <img alt="" className="splash-page" src='http://www.vythiriresort.com/images/gallery/high-resolution/tree_house.jpg' />
      </div>
    );
  }
}

export default MainPage;