import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NavBar from '../layout/navBar/NavBar';

import MainBlock from './mainBlock/MainBlock';
import Loading from '../layout/loading/Loading';
import { fetchProfile, clearErrors } from '../../store/actions/profileActions';

import './Profile.css';

const Profile = ({
  fetchProfile,
  match,
  user,
  errors,
  clearErrors,
  authId
}) => {
  useEffect(() => {
    fetchProfile(match.params.id);
  }, [fetchProfile, match]);

  const fade = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1,
    config: {
      delay: 1000,
      duration: 2000
    }
  });

  if (user === {} && errors === null) return <Loading />;

  if (errors !== null) {
    clearErrors();
    return <Redirect to={`/profile/${authId}`} />;
  }

  return (
    <React.Fragment>
      <NavBar />
      <div className="container-fluid profileFluidContainer">
        <div className="profileWrapper">
          <animated.div style={fade}>
            <MainBlock user={user.user} />
          </animated.div>
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = state => {
  return {
    user: state.profile.user,
    errors: state.profile.errors,
    authId: state.auth.currentUser.id
  };
};
export default connect(mapStateToProps, { fetchProfile, clearErrors })(Profile);
