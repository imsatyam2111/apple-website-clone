import { useRef } from "react";
import { navLinks } from "./links";
import AppleIcon from "@material-ui/icons/Apple";
import SearchIcon from "@material-ui/icons/Search";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import "../../assets/styles/components/Navbar/style.css";

export const Navbar = () => {
  const hamburgerButtonRef = useRef(null);
  const menuSmallRef = useRef(null);
  
  const handleHamburgerClick = () => {
    hamburgerButtonRef.current.classList.toggle('ham-clicked');
    menuSmallRef.current.classList.toggle('active');
  };

  return (
    <>
      <nav className="navbar navbar-large">
        <ul className="navbar-list">
          <li className="nav-items">
            <a href="/">
              <AppleIcon fontSize="small" className="icon-apple" />
            </a>
          </li>
          {navLinks.map((item) => (
            <li key={item.key} className="nav-items">
              <a href="/#" className="nav-link">
                {item.name}
              </a>
            </li>
          ))}
          <li className="nav-items">
            <a href="/">
              <SearchIcon fontSize="small" className="icon-search" />
            </a>
          </li>
          <li className="nav-items">
            <a href="/">
              <LocalMallOutlinedIcon fontSize="small" className="icon-bag" />
            </a>
          </li>
        </ul>
      </nav>
      {/* small nav */}
      <nav ref={menuSmallRef} className="navbar-small">
        <ul className="navbar-list-small">
          <li ref={hamburgerButtonRef} className="nav-items-small" style={{ cursor: 'pointer' }} onClick={handleHamburgerClick}>
            <div className="bar1"></div>
            <div className="bar2"></div>
          </li>
          <li className="nav-items-small">
            <a href="/">
              <AppleIcon fontSize="small" className="icon-apple" />
            </a>
          </li>
          <li className="nav-items">
            <a href="/">
              <LocalMallOutlinedIcon fontSize="small" className="icon-bag" />
            </a>
          </li>
        </ul>
        <div className="nav-small-contents">
            <div className="navbar-search-small">
              <input className="navbar-searchbox-small" type="text" placeholder="Search apple.com" />
            </div>
          <ul className="navbar-links-small">
            {navLinks.map((item) => (
              <li key={item.key} className="nav-items-small">
                  {item.name}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
