import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export const Iphone14Pro = () => {
  return (
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
      <figure className="home-iphone14pro_img"></figure>
    </div>
  );
};
