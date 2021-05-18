import classes from './Splash.module.css';

const Splash = (props) => {
  return (
    <div className={classes.splash}>
      {props.src && (
        <img
          src={`${process.env.REACT_APP_TMDB_BASE_IMAGE_URL_1280}${props.src}`}
          alt={props.alt}
        />
      )}
      <div className={classes['splash-content']}>{props.children}</div>
    </div>
  );
};

export default Splash;
