import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export const WatchUltra = () => {
  return (
    <div className="home-watchUltra productCard">
      <div className="home-watchUltra_container">
        <h2 className="home-watchUltra_heading">
          <img
            src={require('../../../assets/images/logos/apple-watch-ultra/hero_logo_apple_watch_ultra__etygmmkwgfma_medium.png')}
            alt="watch ultra"
          />
        </h2>
        <h3 className="home-watchUltra_sub-heading">Adventure awaits</h3>
        <div className="home-watchUltra_link">
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
      <figure className="home-watchUltra_img"></figure>
    </div>
  );
};
