import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export const WatchSeries8 = () => {
  return (
    <div className="home-watchS8 productCard">
      <div className="home-watchS8_container">
        <h2 className="home-watchS8_heading">
          <img
            src={require('../../../assets/images/logos/apple-watch-series-8/promo_logo_apple_watch_series_8__ee6riplsucuq_medium.png')}
            alt="Watch series 8"
          />
        </h2>
        <h3 className="home-watchS8_sub-heading">A healthy leap ahead</h3>
        <div className="home-watchS8_link">
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
      <figure className="home-watchS8_img"></figure>
    </div>
  );
};
