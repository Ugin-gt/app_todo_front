import { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

// const Task = lazy(() => import('./pages/Task'));
const Home = lazy(() => import('./pages/Home'));

const App = props => {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <NavLink to='/'>Users</NavLink>
          </li>
          {/* <li>
            <NavLink to='/todos'>Todos</NavLink>
          </li> */}
        </ul>
        <Suspense fallback={'Loading...'}>
          <Switch>
            <Route exact path='/' component={Home} />
            {/* <Route path='/todos' component={Todo} /> */}
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;