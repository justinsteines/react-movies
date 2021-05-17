import TmdbLogo from '../logos/TmdbLogo';
import classes from './Footer.module.css';

const Footer = (props) => {
  return (
    <footer className={`${classes.footer} mt-4 py-3`}>
      <div className="container my-3 d-flex flex-column align-items-center justify-content-center text-center">
        <TmdbLogo className={classes.logo} />
        <div className="mt-2">
          This product uses the TMDb API but is not endorsed or certified by
          TMDb
        </div>
      </div>
    </footer>
  );
};

export default Footer;
