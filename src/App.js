import { Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';

const App = (props) => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movie/:movieId">
          <MovieDetailPage />
        </Route>
        <Route path="/error">
          <ErrorPage />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
