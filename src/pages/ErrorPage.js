import { Link } from 'react-router-dom';

const ErrorPage = (props) => {
  return (
    <div className="text-center my-5">
      <h1 className="mb-3">Oops!</h1>
      <p>An error has occurred. Please try again later.</p>
      <p>
        <Link to="/" className="btn btn-dark">
          Return Home
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
