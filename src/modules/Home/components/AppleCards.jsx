import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export const AppleCards = () => {
  return (
    <div className="home-appleCards productCard">
      <div className="home-appleCards_container">
        <h2 className="home-appleCards_heading">
          <img
            src={require('../../../assets/images/logos/apple-card/logo__dcojfwkzna2q_medium.png')}
            alt="Watch series 8"
          />
        </h2>
        <h3 className="home-appleCards_sub-heading">
          Get up to 3% Cash back
          <br />
          with every purchase
        </h3>
        <div className="home-appleCards_link">
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
      <figure className="home-appleCards_img"></figure>
    </div>
  );
};
