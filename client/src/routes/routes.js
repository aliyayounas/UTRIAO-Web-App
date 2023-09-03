import React, { useContext } from 'react';
import { useTransition, animated } from 'react-spring';
import { Switch, __RouterContext } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import './routes.css';
import Login from '../components/login/Login';
import Register from '../components/register/Register';

import Home from '../components/home/Home';
import Profile from '../components/profile/Profile';
import Setting from '../components/setting/Setting';

const Routes = () => {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    initial: { transform: 'translate3d(0, 0%,0)' },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  return transitions.map(({ item, props, key }) => (
    <animated.div
      style={{ ...props, position: 'absolute', height: '100%', width: '100%' }}
      key={key}
    >
      <Switch location={item}>
        <PrivateRoute exact path="/" component={Home} />

        <PrivateRoute exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/setting" component={Setting} />

        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/register" component={Register} />
      </Switch>
    </animated.div>
  ));
};

export default Routes;
