import { Fragment, useEffect, useState } from 'react';
import { Redirect } from 'react-router';

import Splash from '../components/UI/Splash';
import MovieTitleDesc from '../components/movies/MovieTitleDesc';
import MoviePosterList from '../components/movies/MoviePosterList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import SearchMovie from '../components/movies/SearchMovie';

const HomePage = (props) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [enteredSearchValue, setEnteredSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [isSearchResultLoading, setIsSearchResultLoading] = useState(false);
  const [searchResultError, setSearchResultError] = useState(null);

  const searchMovieHandler = (event) => {
    setEnteredSearchValue(event.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem('popularMovies')) {
      setPopularMovies(JSON.parse(localStorage.getItem('popularMovies')));
    } else {
      const queryParams = new URLSearchParams({
        language: 'en-US',
        page: 1,
        action: 'movie-popular',
      });

      setIsLoading(true);
      fetch(`${process.env.REACT_APP_TMDB_BASE_URL}?${queryParams.toString()}`)
        .then((res) => res.json())
        .then((movies) => {
          setIsLoading(false);
          setPopularMovies(movies.results);
          localStorage.setItem('popularMovies', JSON.stringify(movies.results));
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (enteredSearchValue.length <= 0) {
        setSearchResults(null);
        return;
      }

      const queryParams = new URLSearchParams({
        language: 'en-US',
        page: 1,
        include_adult: false,
        query: enteredSearchValue,
        action: 'search-movie',
      });

      setIsSearchResultLoading(true);
      fetch(`${process.env.REACT_APP_TMDB_BASE_URL}?${queryParams.toString()}`)
        .then((res) => res.json())
        .then((movies) => {
          setIsSearchResultLoading(false);
          setSearchResults(movies.results);
        })
        .catch((err) => {
          setIsSearchResultLoading(false);
          setSearchResultError(err);
        });
    }, 700);

    return () => {
      clearTimeout(timeout);
    };
  }, [enteredSearchValue]);

  if (error || searchResultError || !popularMovies) {
    return <Redirect to="/error" />;
  }

  if (isLoading || popularMovies.length <= 0) {
    return <LoadingSpinner />;
  }

  let splash, content;
  if (enteredSearchValue.length > 0 && searchResults) {
    let searchContent;
    if (isSearchResultLoading) {
      searchContent = <LoadingSpinner />;
    } else if (searchResults.length <= 0) {
      searchContent = <div className="text-center fs-5">No resutls found.</div>;
    } else {
      searchContent = <MoviePosterList movies={searchResults} />;
    }
    content = (
      <div className="mx-3 mx-md-4">
        <h1 className="my-4 my-md-5">Search Results</h1>
        {searchContent}
      </div>
    );
  } else {
    splash = (
      <Splash src={popularMovies[0].backdrop_path} alt={popularMovies[0].title}>
        <MovieTitleDesc
          title={popularMovies[0].title}
          desc={popularMovies[0].overview}
        />
      </Splash>
    );
    content = (
      <div className="mx-3 mx-md-4">
        <h1 className="my-4 my-md-5">Popular Movies</h1>
        <MoviePosterList movies={popularMovies} />
      </div>
    );
  }

  return (
    <Fragment>
      {splash}
      <SearchMovie searchMovieHandler={searchMovieHandler} />
      {content}
    </Fragment>
  );
};

export default HomePage;
