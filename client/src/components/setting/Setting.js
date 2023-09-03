import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import NavBar from '../layout/navBar/NavBar';
import Cover from './cover/Cover';
import Options from './options/Options';
import OptionsDetail from './optionsDetail/OptionsDetail';
import { connect } from 'react-redux';
import { fetchProfile } from '../../store/actions/profileActions';

import './Setting.css';

const Setting = ({ fetchProfile, authUserId, user }) => {
  const [showComponents, setComponents] = useState({
    personal: true,
    hobbies: false,
    education: false,
    password: false,

    email: false,
    deleteAccount: false
  });

  useEffect(() => {
    fetchProfile(authUserId);
  });

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

  const changeComponents = value => {
    value === 'personal' &&
      setComponents({
        personal: true,
        hobbies: false,
        education: false,
        password: false,
        email: false,
        deleteAccount: false
      });

    value === 'hobbies' &&
      setComponents({
        personal: false,
        hobbies: true,
        education: false,
        password: false,
        email: false,
        deleteAccount: false
      });
    value === 'education' &&
      setComponents({
        personal: false,
        hobbies: false,
        education: true,
        password: false,
        email: false,
        deleteAccount: false
      });
    value === 'password' &&
      setComponents({
        personal: false,
        hobbies: false,
        education: false,
        password: true,
        email: false,
        deleteAccount: false
      });
    value === 'email' &&
      setComponents({
        personal: false,
        hobbies: false,
        education: false,
        password: false,
        email: true,
        deleteAccount: false
      });

    value === 'deleteAccount' &&
      setComponents({
        personal: false,
        hobbies: false,
        education: false,
        password: false,
        email: false,
        deleteAccount: true
      });
  };

  return (
    <animated.div style={fade}>
      <NavBar />
      <div className="container-fluid settingFluidContainer mt-4">
        <Cover />
        <div className="settingWrapper">
          <div className="container settingContainer">
            <div className="row  py-4">
              <div className="col col-xl-3  col-lg-3  col-md-12 mt-md-2 col-sm-12 my-sm-2  col-12 my-2 ">
                <Options changeComponent={changeComponents} />
              </div>
              <div className="col col-xl-8 offset-xl-1  col-lg-8  offset-lg-1  col-md-12  my-md-2 col-sm-12 my-sm-2 col-12 my-2 settingColumns ">
                <OptionsDetail showComponents={showComponents} />{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

const mapStateToProps = state => {
  return {
    authUserId: state.auth.currentUser.id
  };
};

export default connect(mapStateToProps, { fetchProfile })(Setting);
