import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export const AirpodsPro = () => {
  return (
    <div className="home-airpodsPro productCard">
      <div className="home-airpodsPro_container">
        <h2 className="home-airpodsPro_heading">AirPods Pro</h2>
        <h3 className="home-airpodsPro_sub-heading">A healthy leap ahead</h3>
        <div className="home-airpodsPro_link">
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
      <figure className="home-airpodsPro_img"></figure>
    </div>
  );
};
