import React, { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './DeleteAccount.css';
import AppAlert from '../../../layout/alert/appAlerts/AppAlerts';

import { connect } from 'react-redux';
import { deleteUser } from '../../../../store/actions/profileActions';

const DeleteAccount = ({ deleteUser }) => {
  const deleteButton = useRef();

  const [deleteData, setDeleteData] = useState({
    email: '',
    password: '',
    reason: ''
  });

  const onSubmitHandle = e => {
    deleteButton.current.disabled = true;
    e.preventDefault();
    deleteUser(deleteData);

    deleteButton.current.disabled = false;
  };

  const onChangeHandler = e => {
    setDeleteData({
      ...deleteData,
      [e.target.name]: e.target.value
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
        <h6 className="font-weight-bold">Delete Account!</h6>
        <hr />
        <form onSubmit={onSubmitHandle} id="deleteAccountForm">
          <div className="row">
            <div className=" col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-1">
              <div className="form-group">
                <label className="control-label text-danger">Email</label>
                <input
                  name="email"
                  value={deleteData.email}
                  onChange={onChangeHandler}
                  className="form-control mt-1"
                  placeholder=""
                  type="email"
                />
              </div>
              <div className="form-group">
                <label className="control-label text-danger">Password</label>
                <input
                  name="password"
                  value={deleteData.password}
                  onChange={onChangeHandler}
                  className="form-control mt-1"
                  placeholder=""
                  type="password"
                />
              </div>
              <div className="form-group">
                <label className="control-label text-danger">
                  Please explain reason
                </label>
                <textarea
                  name="reason"
                  value={deleteData.reason}
                  onChange={onChangeHandler}
                  className="form-control mt-1"
                  cols="30"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div className="form-group col col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
              <button
                type="button"
                className="form-control btn btn-info  p-1   "
              >
                Cancel
              </button>
            </div>
            <div className="form-group col col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
              <button
                ref={deleteButton}
                type="submit"
                className="form-control btn btn-dark  p-1   "
              >
                Delete
              </button>
            </div>
          </div>
        </form>
        <div className="elegant-color w-100  ">
          <AppAlert />
        </div>
      </animated.div>
    </React.Fragment>
  );
};

export default connect(null, { deleteUser })(DeleteAccount);
