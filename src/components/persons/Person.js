import classes from './Person.module.css';

const Person = (props) => {
  return (
    <div className={classes.person}>
      <div className={`${classes.wrapper} d-flex flex-column`}>
        {props.profile_path && (
          <img
            src={`${process.env.REACT_APP_TMDB_BASE_IMAGE_URL_ORIGINAL}${props.profile_path}`}
            alt={props.name}
          />
        )}
        {!props.profile_path && (
          <div
            className={`${classes['no-image']} d-flex justify-content-center align-items-center text-center flex-grow-1`}
          >
            <span className="fs-3">No Image</span>
          </div>
        )}
        <div className="p-2">
          <div className="fs-6 fw-bold">{props.name}</div>
          <div className="fs-6">{props.character}</div>
        </div>
      </div>
    </div>
  );
};

export default Person;
