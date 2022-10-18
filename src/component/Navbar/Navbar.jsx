import { navLinks } from './links';
import '../../assets/styles/components/Navbar/style.css';
import AppleIcon from '@material-ui/icons/Apple';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

export const Navbar = () => {
  return (
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
            {/* {
              <img
                src={require('../../assets/images/logos/bag.png')}
                width="24px"
                height="24px"
                alt="Bag"
              />
            } */}
          </a>
        </li>
      </ul>
    </nav>
  );
};
