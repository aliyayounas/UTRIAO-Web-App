import React, { useEffect, useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { connect } from 'react-redux';
import Loading from '../../../layout/loading/Loading';
import './Personal.css';
import { updatePersonal } from '../../../../store/actions/profileActions';
import AppAlert from '../../../layout/alert/appAlerts/AppAlerts';

const Personal = ({ user, updatePersonal }) => {
  const updateButton = useRef();

  const [userData, setUserData] = useState({
    username: '',
    website: '',
    birthday: '',
    phone: '',
    gender: '',
    country: '',
    state: '',
    city: '',
    status: '',
    birthplace: '',
    religion: '',
    occupation: '',
    politicalIncline: '',
    facebook: '',
    twitter: '',
    instagram: '',
    description: ''
  });

  useEffect(() => {
    if (user) {
      setUserData({
        username: typeof user.username !== 'undefined' ? user.username : '',
        website: typeof user.website !== 'undefined' ? user.website : '',
        birthday: typeof user.birthday !== 'undefined' ? user.birthday : '',
        phone: typeof user.phone !== 'undefined' ? user.phone : '',
        gender: typeof user.gender !== 'undefined' ? user.gender : '',
        country: typeof user.country !== 'undefined' ? user.country : '',
        state: typeof user.state !== 'undefined' ? user.state : '',
        city: typeof user.city !== 'undefined' ? user.city : '',
        status: typeof user.status !== 'undefined' ? user.status : '',
        birthplace:
          typeof user.birthplace !== 'undefined' ? user.birthplace : '',
        religion: typeof user.religion !== 'undefined' ? user.religion : '',
        occupation:
          typeof user.occupation !== 'undefined' ? user.occupation : '',
        politicalIncline:
          typeof user.politicalIncline !== 'undefined'
            ? user.politicalIncline
            : '',
        description:
          typeof user.description !== 'undefined' ? user.description : '',
        facebook:
          typeof user.socialLinks !== 'undefined'
            ? user.socialLinks.facebook
            : 'https://www.facebook.com/',
        instagram:
          typeof user.socialLinks !== 'undefined'
            ? user.socialLinks.instagram
            : 'https://www.instagram.com/',
        twitter:
          typeof user.socialLinks !== 'undefined'
            ? user.socialLinks.twitter
            : 'https://www.twitter.com/'
      });
    }
  }, [user]);
  const onChangeHandler = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmitHandler = e => {
    updateButton.current.disabled = true;
    e.preventDefault();
    updatePersonal(userData);
    updateButton.current.disabled = false;
  };
  const resetUserData = () => {
    setUserData({
      username: userData.username,
      website: '',
      birthday: '',
      phone: '',
      gender: '',
      country: '',
      state: '',
      city: '',
      status: '',
      birthplace: '',
      religion: '',
      occupation: '',
      politicalIncline: '',
      facebook: 'https://www.facebook.com/',
      twitter: 'https://www.twitter.com/',
      instagram: 'https://www.instagram.com/',
      description: ''
    });
  };
  const fade = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1,
    config: {
      duration: 500
    }
  });

  if (user === undefined) return <Loading />;

  return (
    <React.Fragment>
      <animated.div style={fade}>
        <h6 className="font-weight-bold">Personal Information</h6>
        <hr />

        <form onSubmit={onSubmitHandler} id="personalForm">
          <div className="row ">
            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-group  label-floating">
                <label className="control-label text-danger ">Username</label>
                <input
                  onChange={e => onChangeHandler(e)}
                  className="form-control text-capitalize "
                  placeholder=""
                  type="text"
                  name="username"
                  value={userData.username}
                />
              </div>

              <div className="form-group label-floating">
                <label className="control-label text-danger">
                  Your Birthday
                </label>
                <input
                  onChange={e => onChangeHandler(e)}
                  className="form-control "
                  placeholder=""
                  type="date"
                  name="birthday"
                  value={userData.birthday}
                />
              </div>
            </div>

            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-group label-floating">
                <label className="control-label text-danger">
                  Your Website
                </label>
                <input
                  onChange={e => onChangeHandler(e)}
                  className="form-control "
                  placeholder=""
                  type="text"
                  name="website"
                  value={userData.website}
                />
              </div>
              <div className="form-group label-floating">
                <label className="control-label text-danger">
                  Your Phone Number
                </label>
                <input
                  onChange={e => onChangeHandler(e)}
                  className="form-control text-capitalize"
                  placeholder=""
                  type="text"
                  name="phone"
                  value={userData.phone}
                />
              </div>
            </div>
            <div className="col col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="form-group label-floating">
                <label className="control-label text-danger">
                  Your Country
                </label>
                <input
                  onChange={e => onChangeHandler(e)}
                  className="form-control text-capitalize"
                  placeholder=""
                  type="text"
                  name="country"
                  value={userData.country}
                />
              </div>
            </div>
            <div className="col col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="form-group label-floating">
                <label className="control-label text-danger">
                  Your State/Province
                </label>
                <input
                  onChange={e => onChangeHandler(e)}
                  className="form-control text-capitalize"
                  placeholder=""
                  type="text"
                  name="state"
                  value={userData.state}
                />
              </div>
            </div>
            <div className="col col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="form-group label-floating">
                <label className="control-label text-danger">Your City</label>
                <input
                  onChange={e => onChangeHandler(e)}
                  className="form-control text-capitalize"
                  placeholder=""
                  type="text"
                  name="city"
                  value={userData.city}
                />
              </div>
            </div>

            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-group label-floating ">
                <label className="control-label text-danger">
                  Write a little description about you
                </label>
                <textarea
                  onChange={e => onChangeHandler(e)}
                  rows="4"
                  className="form-control  "
                  name="description"
                  value={userData.description}
                ></textarea>
              </div>

              <div className="form-group label-floating">
                <label className="control-label text-danger">Your Gender</label>
                <input
                  onChange={e => onChangeHandler(e)}
                  className="form-control text-capitalize"
                  placeholder=""
                  type="text"
                  name="gender"
                  value={userData.gender}
                />
              </div>
              <div className="form-group label-floating">
                <label className="control-label text-danger">
                  Religious Beliefs
                </label>
                <input
                  onChange={e => onChangeHandler(e)}
                  className="form-control text-capitalize"
                  placeholder=""
                  type="text"
                  name="religion"
                  value={userData.religion}
                />
              </div>
            </div>
            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-group label-floating">
                <label className="control-label text-danger">BirthPlace</label>
                <input
                  onChange={e => onChangeHandler(e)}
                  className="form-control text-capitalize"
                  placeholder=""
                  type="text"
                  name="birthplace"
                  value={userData.birthplace}
                />
              </div>
              <div className="form-group label-floating">
                <label className="control-label text-danger">
                  Your Occupation
                </label>
                <input
                  onChange={e => onChangeHandler(e)}
                  className="form-control text-capitalize"
                  placeholder=""
                  type="text"
                  name="occupation"
                  value={userData.occupation}
                />
              </div>
              <div className="form-group label-floating">
                <label className="control-label text-danger">Status</label>
                <input
                  onChange={e => onChangeHandler(e)}
                  className="form-control text-capitalize"
                  placeholder=""
                  type="text"
                  name="status"
                  value={userData.status}
                />
              </div>
              <div className="form-group label-floating">
                <label className="control-label text-danger">
                  Political Incline
                </label>
                <input
                  onChange={e => onChangeHandler(e)}
                  className="form-control text-capitalize"
                  placeholder=""
                  type="text"
                  name="politicalIncline"
                  value={userData.politicalIncline}
                />
              </div>
            </div>

            <div className=" col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-1">
              <div className="form-group">
                <label className="form-label font-weight-bold text-danger">
                  <span>
                    <i className="fa fa-facebook fa-2x text-dark "></i>
                  </span>{' '}
                  Facebook Account
                </label>

                <input
                  onChange={e => onChangeHandler(e)}
                  type="text"
                  className="form-control "
                  name="facebook"
                  value={userData.facebook}
                />
              </div>
            </div>
            <div className=" col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-1">
              <div className="form-group">
                <label className="form-label font-weight-bold text-danger">
                  <span>
                    {' '}
                    <i className="fa fa-twitter fa-2x text-dark"></i>
                  </span>{' '}
                  Twitter Account
                </label>

                <input
                  onChange={e => onChangeHandler(e)}
                  type="text"
                  className="form-control"
                  name="twitter"
                  value={userData.twitter}
                />
              </div>
            </div>

            <div className=" col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-1">
              <div className="form-group">
                <label className="form-label font-weight-bold text-danger">
                  <span>
                    {' '}
                    <i className="fa fa-instagram fa-2x text-dark "></i>
                  </span>{' '}
                  Instagram Account
                </label>

                <input
                  onChange={e => onChangeHandler(e)}
                  type="text"
                  className="form-control"
                  name="instagram"
                  value={userData.instagram}
                />
              </div>
            </div>
            <hr />

            <div className="form-group col col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
              <button
                type="button"
                onClick={() => resetUserData()}
                className="form-control  btn btn-info  p-2 "
              >
                Reset all information
              </button>
            </div>

            <div className="form-group col col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
              <button
                ref={updateButton}
                type="submit"
                className="form-control  btn btn-danger p-2 "
              >
                Save all changes
              </button>
            </div>
            <div className="elegant-color w-100 ">
              <AppAlert />
            </div>
          </div>
        </form>
        <hr />
      </animated.div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    user: state.profile.user.user
  };
};

export default connect(mapStateToProps, { updatePersonal })(Personal);
