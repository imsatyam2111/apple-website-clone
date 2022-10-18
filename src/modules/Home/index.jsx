import React from 'react';
import '../../assets/styles/modules/Home/style.css';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export const Home = () => {
  return (
    <div className="home-container">
      <div className="home-iphone14">
        <div href="/" className="home-iphone14_container">
          <h1 className="home-iphone14_heading">iPhone 14</h1>
          <h3 className="home-iphone14_sub-heading">Big and bigger</h3>
          <div className="home-iphone14_link">
            <p>
              <a href="/">
                Learn more
                <ChevronRightIcon
                  fontSize="medium"
                  className="home-iphone14_icon_rightArrow"
                />
              </a>
              <a href="/">
                Buy
                <ChevronRightIcon
                  fontSize="medium"
                  className="home-iphone14_icon_rightArrow"
                />
              </a>
            </p>
          </div>
        </div>
        {/* <img
          className="home-iphone14_img"
          src={require('../../assets/images/heroes/iphone-14/iphone14.jpg')}
          alt="container"
        /> */}
        <figure className="home-iphone14_img"></figure>
      </div>
      <div className="home-iphone14pro">
        <div href="/" className="home-iphone14Pro_container">
          <h1 className="home-iphone14Pro_heading">iPhone 14 Pro</h1>
          <h3 className="home-iphone14Pro_sub-heading">Pro. Beyond.</h3>
          <div className="home-iphone14Pro_link">
            <p>
              <a href="/">
                Learn more
                <ChevronRightIcon
                  fontSize="medium"
                  className="home-iphone14_icon_rightArrow"
                />
              </a>
              <a href="/">
                Buy
                <ChevronRightIcon
                  fontSize="medium"
                  className="home-iphone14_icon_rightArrow"
                />
              </a>
            </p>
          </div>
        </div>
        {/* <img
          className="home-iphone14pro_img"
          src={require('../../assets/images/heroes/iphone-14-pro/iphone14pro.jpg')}
          alt="container"
        /> */}
        <figure className="home-iphone14pro_img"></figure>
      </div>
    </div>
  );
};
