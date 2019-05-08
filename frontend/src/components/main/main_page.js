import React from 'react';
import './splash_page.css'

class MainPage extends React.Component {

  render() {
    return (
      <div className="splash-page">
        <h1 className="splash-page-title" >Your home away from home...</h1>
        <img alt="" className="splash-page" src='http://www.vythiriresort.com/images/gallery/high-resolution/tree_house.jpg' />
      </div>
    );
  }
}

export default MainPage;