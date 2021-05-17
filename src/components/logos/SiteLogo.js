import { Film } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

import classes from './SiteLogo.module.css';

const SiteLogo = (props) => {
  return (
    <Link to="/" className={classes.logo}>
      <div className="d-flex align-items-center">
        <Film size={48} className="me-3" />
        <span>Movies</span>
      </div>
    </Link>
  );
};

export default SiteLogo;
