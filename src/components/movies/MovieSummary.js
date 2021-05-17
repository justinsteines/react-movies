import classes from './MovieSummary.module.css';

const MovieSummary = (props) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const releaseDate = props.release_date
    ? new Intl.DateTimeFormat('en-US', {
        dateStyle: 'medium',
      }).format(new Date(props.release_date + 'T00:00:00'))
    : null;

  return (
    <div
      className={`${classes['movie-summary']} d-flex justify-content-center`}
    >
      {props.poster_path && (
        <div className={classes.poster}>
          <img
            src={`${process.env.REACT_APP_TMDB_BASE_IMAGE_URL_ORIGINAL}${props.poster_path}`}
            alt={props.title}
          />
        </div>
      )}
      <div className={`${classes.info} d-flex flex-column`}>
        <div className="fs-1">{props.title}</div>
        <div className={`${classes.overview} mt-4`}>{props.overview}</div>
        <div className={`${classes.facts} d-flex flex-wrap mt-auto`}>
          <div className="flex-grow-1 d-flex flex-column align-items-center text-center d-none d-md-flex pt-3">
            <div className="fs-6">
              {Math.floor(props.runtime / 60)}h {props.runtime % 60}m
            </div>
            <small className="text-uppercase fw-bold">Runtime</small>
          </div>
          {props.releaseDate && (
            <div className="flex-grow-1 d-flex flex-column align-items-center text-center d-none d-md-flex pt-3">
              <div className="fs-6">{releaseDate}</div>
              <small className="text-uppercase fw-bold">Release Date</small>
            </div>
          )}
          {props.budget > 0 && (
            <div className="flex-grow-1 d-flex flex-column align-items-center text-center d-none d-md-flex pt-3">
              <div className="fs-6">{formatter.format(props.budget)}</div>
              <small className="text-uppercase fw-bold">Budget</small>
            </div>
          )}
          {props.revenue > 0 && (
            <div className="flex-grow-1 d-flex flex-column align-items-center text-center d-none d-md-flex pt-3">
              <div className="fs-6">{formatter.format(props.revenue)}</div>
              <small className="text-uppercase fw-bold">Revenue</small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieSummary;
