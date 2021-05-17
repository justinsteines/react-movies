import { Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';

const App = (props) => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movie/:movieId" component={MovieDetailPage} />
        <Route path="/error" component={ErrorPage} />
      </Switch>
    </Layout>
  );
};

export default App;
