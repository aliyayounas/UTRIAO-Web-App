import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './Hobbies.css';
import AppAlert from '../../../layout/alert/appAlerts/AppAlerts';
import { updateHobbies } from '../../../../store/actions/profileActions';
import { connect } from 'react-redux';

const Hobbies = ({ userHobbies, updateHobbies }) => {
  const updateButton = useRef();
  const [hobbiesData, setHobbiesData] = useState({
    hobbies: '',
    favouriteTvShows: '',
    favouriteMovies: '',
    favouriteWriters: '',
    favouriteGames: '',
    favouriteMusic: '',
    favouriteBooks: '',
    otherInterests: ''
  });

  useEffect(() => {
    if (userHobbies) {
      setHobbiesData({
        hobbies: userHobbies.hobbies,
        favouriteTvShows: userHobbies.favouriteTvShows,
        favouriteMovies: userHobbies.favouriteMovies,
        favouriteWriters: userHobbies.favouriteWriters,
        favouriteGames: userHobbies.favouriteGames,
        favouriteMusic: userHobbies.favouriteMusic,
        favouriteBooks: userHobbies.favouriteBooks,
        otherInterests: userHobbies.otherInterests
      });
    }
  }, [userHobbies]);

  const onChangeHandler = e => {
    setHobbiesData({
      ...hobbiesData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmitHandler = e => {
    updateButton.current.disabled = true;

    e.preventDefault();
    updateHobbies(hobbiesData);
    updateButton.current.disabled = false;
  };

  const resetHobbiesData = () => {
    setHobbiesData({
      hobbies: '',
      favouriteTvShows: '',
      favouriteMovies: '',
      favouriteWriters: '',
      favouriteGames: '',
      favouriteMusic: '',
      favouriteBooks: '',
      otherInterests: ''
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
  return (
    <React.Fragment>
      <animated.div style={fade}>
        <h6 className="font-weight-bold">Hobbies and Interests</h6>
        <hr />
        <form onSubmit={onSubmitHandler} id="hobbiesForm">
          <div className="row">
            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-group label-floating">
                <label className="form-label control-label text-danger ">
                  Hobbies
                </label>
                <textarea
                  onChange={onChangeHandler}
                  name="hobbies"
                  value={hobbiesData.hobbies}
                  className="form-control"
                  cols="30"
                  rows="2"
                ></textarea>
              </div>
              <div className="form-group label-floating">
                <label className=" form-label control-label text-danger ">
                  Favourite TV Shows
                </label>
                <textarea
                  onChange={onChangeHandler}
                  name="favouriteTvShows"
                  value={hobbiesData.favouriteTvShows}
                  className="form-control"
                  cols="30"
                  rows="2"
                ></textarea>
              </div>
              <div className="form-group label-floating">
                <label className="form-label control-label text-danger">
                  Favourite Movies
                </label>
                <textarea
                  onChange={onChangeHandler}
                  name="favouriteMovies"
                  value={hobbiesData.favouriteMovies}
                  className="form-control"
                  cols="30"
                  rows="2"
                ></textarea>
              </div>
              <div className="form-group label-floating">
                <label className="form-label control-label text-danger">
                  Favourite Games
                </label>
                <textarea
                  onChange={onChangeHandler}
                  name="favouriteGames"
                  value={hobbiesData.favouriteGames}
                  className="form-control"
                  cols="30"
                  rows="2"
                ></textarea>
              </div>
            </div>

            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-group label-floating">
                <label className="form-label control-label text-danger">
                  Favourite Music Bands / Artists
                </label>
                <textarea
                  onChange={onChangeHandler}
                  name="favouriteMusic"
                  value={hobbiesData.favouriteMusic}
                  className="form-control"
                  cols="30"
                  rows="2"
                ></textarea>
              </div>
              <div className="form-group label-floating">
                <label className=" form-label control-label text-danger ">
                  Favourite Books
                </label>
                <textarea
                  onChange={onChangeHandler}
                  name="favouriteBooks"
                  value={hobbiesData.favouriteBooks}
                  className="form-control"
                  cols="30"
                  rows="2"
                ></textarea>
              </div>
              <div className="form-group label-floating">
                <label className="form-label control-label text-danger">
                  Favourite Writers
                </label>
                <textarea
                  onChange={onChangeHandler}
                  name="favouriteWriters"
                  value={hobbiesData.favouriteWriters}
                  className="form-control"
                  cols="30"
                  rows="2"
                ></textarea>
              </div>

              <div className="form-group label-floating">
                <label className="form-label control-label text-danger">
                  Other Interests
                </label>
                <textarea
                  onChange={onChangeHandler}
                  name="otherInterests"
                  value={hobbiesData.otherInterests}
                  className="form-control"
                  cols="30"
                  rows="2"
                ></textarea>
              </div>
            </div>
            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-group">
                <button
                  onClick={resetHobbiesData}
                  type="button"
                  className="form-control btn btn-info p-2"
                >
                  reset all
                </button>
              </div>
            </div>
            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-group">
                <button
                  ref={updateButton}
                  type="submit"
                  className="form-control btn btn-dark p-2"
                >
                  save all
                </button>
              </div>
            </div>
            <div className="  elegant-color w-100 ">
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
    userHobbies: state.profile.user.user.hobbies
  };
};
export default connect(mapStateToProps, { updateHobbies })(Hobbies);
