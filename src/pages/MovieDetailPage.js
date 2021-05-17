import { Fragment, useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';

import MovieSummary from '../components/movies/MovieSummary';
import PersonList from '../components/persons/PersonList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import VideoPicker from '../components/videos/VideoPicker';
import Splash from '../components/UI/Splash';
import VideoPlayer from '../components/videos/VideoPlayer';

const MovieDetailPage = (props) => {
  const params = useParams();

  const [movie, setMovie] = useState([]);
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    if (
      localStorage.getItem(params.movieId + '/movie') &&
      localStorage.getItem(params.movieId + '/cast')
    ) {
      const m = JSON.parse(localStorage.getItem(params.movieId + '/movie'));
      const c = JSON.parse(localStorage.getItem(params.movieId + '/cast'));
      setMovie(m);
      setCast(c);
      if (m.videos.results.length > 0 && m.videos.results[0].key) {
        setSelectedVideo(m.videos.results[0].key);
      }
    } else {
      const queryParams = new URLSearchParams({
        language: 'en-US',
        append_to_response: 'credits,videos',
        action: 'movie',
        movieId: params.movieId,
      });

      setIsLoading(true);
      fetch(`${process.env.REACT_APP_TMDB_BASE_URL}?${queryParams.toString()}`)
        .then((res) => res.json())
        .then((movie) => {
          setIsLoading(false);
          setMovie(movie);
          setCast(movie.credits.cast);
          localStorage.setItem(
            params.movieId + '/movie',
            JSON.stringify(movie)
          );
          localStorage.setItem(
            params.movieId + '/cast',
            JSON.stringify(movie.credits.cast)
          );
          if (movie.videos.results.length > 0 && movie.videos.results[0].key) {
            setSelectedVideo(movie.videos.results[0].key);
          }
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }
  }, [params]);

  const selectedVideoHandler = (videoKey) => {
    setSelectedVideo(videoKey);
  };

  if (error) {
    return <Redirect to="/error" />;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Fragment>
      {movie && (
        <Splash src={movie.backdrop_path} alt={movie.title}>
          <div className="d-flex justify-content-center align-items-center w-100">
            <MovieSummary
              title={movie.title}
              overview={movie.overview}
              poster_path={movie.poster_path}
              runtime={movie.runtime}
              budget={movie.budget}
              revenue={movie.revenue}
              release_date={movie.release_date}
            />
          </div>
        </Splash>
      )}
      <div className="container">
        {movie.videos &&
          movie.videos.results &&
          movie.videos.results.length > 0 && (
            <section className="my-5">
              <h1 className="mb-3">Videos</h1>
              <VideoPicker
                videos={movie.videos.results}
                onSelectVideo={selectedVideoHandler}
              />
              <VideoPlayer videoKey={selectedVideo} />
            </section>
          )}
        {cast.length > 0 && (
          <section className="my-5">
            <h1 className="mb-3">Cast</h1>
            <PersonList persons={cast} />
          </section>
        )}
      </div>
    </Fragment>
  );
};

export default MovieDetailPage;
