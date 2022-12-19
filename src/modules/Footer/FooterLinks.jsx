import { useState } from "react";
import { footerLinks } from "./links";

const RenderLinks = (props) => {
  const { links } = props;

  return (
    <>
      {links.map((link) => (
        <p className="link" key={link}>
          {link}
        </p>
      ))}
    </>
  );
};

const RenderMobileLinks = (props) => {
    const { linkKey } = props;
    const [actionClicked, setActionClicked] = useState(false);

    return (
        <div className={`link-group-small`} style={{ height: actionClicked ? 'auto' : '40px' }}>
            <div className="link-container">
                <p className="link-label-small">{footerLinks[linkKey].label}</p>
                <p 
                    className="actionButton"
                    onClick={() => setActionClicked((prevValue) => !prevValue)}
                >
                    {actionClicked ? 'x' : '+'}
                </p>
            </div>
            <RenderLinks links={footerLinks[linkKey].links} />
        </div>
    )
};

export const FooterLinks = () => {
  const {
    shopAndLearn,
    services,
    account,
    appleStore,
    forBusiness,
    forEducation,
    forHealthcare,
    forGovernment,
    appleValues,
    aboutApple,
  } = footerLinks;

  const column1 = [shopAndLearn];
  const column2 = [services, account];
  const column3 = [appleStore];
  const column4 = [forBusiness, forEducation, forHealthcare, forGovernment];
  const column5 = [appleValues, aboutApple];

  return (
    <>
      <div className="footer-links">
        <div className="column column1">
          {column1.map((el) => (
            <div key={el.label}>
              <p className="link-label">{el.label}</p>
              <RenderLinks links={el.links} />
            </div>
          ))}
        </div>
        <div className="column column2">
          {column2.map((el) => (
            <div key={el.label}>
              <p className="link-label">{el.label}</p>
              <RenderLinks links={el.links} />
            </div>
          ))}
        </div>
        <div className="column column3">
          {column3.map((el) => (
            <div key={el.label}>
              <p className="link-label">{el.label}</p>
              <RenderLinks links={el.links} />
            </div>
          ))}
        </div>
        <div className="column column4">
          {column4.map((el) => (
            <div key={el.label}>
              <p className="link-label">{el.label}</p>
              <RenderLinks links={el.links} />
            </div>
          ))}
        </div>
        <div className="column column5">
          {column5.map((el) => (
            <div key={el.label}>
              <p className="link-label">{el.label}</p>
              <RenderLinks links={el.links} />
            </div>
          ))}
        </div>
      </div>

      <div className="footer-links-small">
            <div>
                {Object.keys(footerLinks).map((linkKey, index) => (
                    <RenderMobileLinks key={index} index={index} linkKey={linkKey} />
                ))}
            </div>
      </div>
    </>
  );
};
