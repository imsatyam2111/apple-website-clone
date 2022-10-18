import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export const Iphone14 = () => {
  return (
    <div className="home-iphone14">
      <div href="/" className="home-iphone14_container">
        <h2 className="home-iphone14_heading">iPhone 14</h2>
        <h3 className="home-iphone14_sub-heading">Big and bigger</h3>
        <div className="home-iphone14_link">
          <p>
            <a href="/">
              Learn more
              <ChevronRightIcon
                fontSize="medium"
                className="home-icon_rightArrow"
              />
            </a>
            <a href="/">
              Buy
              <ChevronRightIcon
                fontSize="medium"
                className="home-icon_rightArrow"
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
  );
};
