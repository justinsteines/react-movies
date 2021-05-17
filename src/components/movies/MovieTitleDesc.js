import classes from './MovieTitleDesc.module.css';

const MovieTitleDesc = (props) => {
  return (
    <div className={`${classes['movie-title-desc']} align-self-end`}>
      <h1>{props.title}</h1>
      <div>{props.desc}</div>
    </div>
  );
};

export default MovieTitleDesc;
