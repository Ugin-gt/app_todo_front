import { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

const User = lazy(() => import('./pages/User'));
const Todo = lazy(() => import('./pages/Todo'));

const App = props => {
  return (
    <div>
      <Router>
        <h1> Navigation </h1>
        <ul>
          <li>
            <NavLink to='/users'>Users</NavLink>
          </li>
          <li>
            <NavLink to='/todos'>Todos</NavLink>
          </li>
        </ul>
        <Suspense fallback={'Loading...'}>
          <Switch>
            <Route exact path='/' />
            <Route path='/users' component={User} />
            <Route path='/todos' component={Todo} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
