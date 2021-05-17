import MoviePoster from './MoviePoster';

const MoviePosterList = (props) => {
  return (
    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 align-items-center gx-4 gy-4 gx-md-5 gy-md-5">
      {props.movies.map((movie) => (
        <MoviePoster
          key={movie.id}
          movieId={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
        />
      ))}
    </div>
  );
};

export default MoviePosterList;
