import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './ChangeEmail.css';
import { connect } from 'react-redux';
import AppAlert from '../../../layout/alert/appAlerts/AppAlerts';
import { changeEmail } from '../../../../store/actions/profileActions';

const ChangeEmail = ({ userEmail, userEmailChanged, changeEmail }) => {
  const [emailData, setEmail] = useState({
    email: ''
  });

  const onSubmitHandler = e => {
    e.preventDefault();

    changeEmail(emailData);
  };

  const onChangeHandler = e => {
    setEmail({
      email: e.target.value
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
        <h6 className="font-weight-bold">Change Email</h6>
        <hr />

        <form onSubmit={onSubmitHandler} id="changeEmailForm">
          <div className="row">
            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
              <p className="lead small my-2 bg-info text-white p-2">
                <i className="fa fa-envelope mr-1"></i> {userEmail}
              </p>

              <div className="form-group label-floating">
                {!userEmailChanged && (
                  <label className="control-label text-danger">
                    Your New Email
                  </label>
                )}

                {!userEmailChanged && (
                  <input
                    name="email"
                    value={emailData.email}
                    onChange={onChangeHandler}
                    type="text"
                    className="form-control"
                  />
                )}
                {!userEmailChanged && (
                  <div className="small lead p-2 ">
                    <i className="fa fa-warning"></i>You can only change your
                    email once
                  </div>
                )}
              </div>
            </div>

            {!userEmailChanged && (
              <div className="mt-2 text-center form-group col col-lg-12 col-sm-12 col-sm-12 col-12">
                <button
                  type="submit"
                  className="form-control btn btn-danger p-2   "
                >
                  Change Email Now!
                </button>
              </div>
            )}

            {!userEmailChanged && (
              <div className="  elegant-color w-100 ">
                <AppAlert />
              </div>
            )}
          </div>
        </form>

        {userEmailChanged && (
          <p className="text-info elegant-color p-2  h6">
            <i className="fa fa-exclamation-triangle text-info"></i> Limit for
            changing email is exceded
          </p>
        )}
      </animated.div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    userEmail: state.auth.currentUserDetail.email,
    userEmailChanged: state.auth.currentUserDetail.emailChanged
  };
};

export default connect(mapStateToProps, { changeEmail })(ChangeEmail);
