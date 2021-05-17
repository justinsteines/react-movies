import SiteLogo from '../logos/SiteLogo';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className="container my-3 d-flex">
        <SiteLogo />
      </div>
    </header>
  );
};

export default Header;
