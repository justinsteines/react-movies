import classes from './LoadingSpinner.module.css';

const LoadingSpinner = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <div className={classes['lds-facebook']}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
