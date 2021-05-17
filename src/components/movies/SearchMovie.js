import { Search } from 'react-bootstrap-icons';

import classes from './SearchMovie.module.css';

const SearchMovie = (props) => {
  return (
    <div className={`${classes['search-movie']} d-flex p-4`}>
      <div className="container">
        <div
          className={`${classes['input-container']} flex-grow-1 d-flex align-items-center`}
        >
          <div className="m-2">
            <Search color="white" size={24} />
          </div>
          <input
            type="text"
            className="flex-grow-1 fs-5 fw-bold"
            onChange={props.searchMovieHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
