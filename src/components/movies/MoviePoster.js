import { Link } from 'react-router-dom';

import classes from './MoviePoster.module.css';

const MoviePoster = (props) => {
  return (
    <div className={classes['movie-poster']}>
      <Link to={`/movie/${props.movieId}`}>
        {props.posterPath && (
          <img
            src={`${process.env.REACT_APP_TMDB_BASE_IMAGE_URL_500}${props.posterPath}`}
            alt={props.title}
          />
        )}
        {!props.posterPath && <div className="text-center">{props.title}</div>}
      </Link>
    </div>
  );
};

export default MoviePoster;
