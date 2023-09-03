import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from '../loading/Loading';
import {
  fetchCurrentUserDetail,
  logout
} from '../../../store/actions/authActions';

const AppNav = ({
  fetchCurrentUserDetail,
  logout,
  currentUserDetail,
  userId
}) => {
  useEffect(() => {
    fetchCurrentUserDetail();
  }, [fetchCurrentUserDetail]);

  if (currentUserDetail === null) return <Loading />;

  const { username, avatarUrl = '/images/avatar.jpg' } = currentUserDetail;

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-dark special-color-dark">
        <div className="container">
          <Link className="navbar-brand mr-4" to="/">
            UTRIAO
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapse"
          >
            <span className="navbar-toggler-icon "></span>
          </button>

          <div className="collapse navbar-collapse" id="collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item p-2 ">
                <form className="form-inline">
                  <div className="md-form my-0">
                    <input
                      className="form-control mr-sm-2"
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </div>
                </form>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto nav-flex-icons">
              <li className="nav-item p-1  ">
                <Link to="/" className="nav-link pt-1">
                  <i className="fa fa-home fa-x"></i>
                  <span className="mx-1 mt-2">Home</span>
                </Link>
              </li>
              <li className="nav-item avatar p-2 ">
                <Link to={`/profile/${userId}`} className="nav-link p-0">
                  <img
                    src={avatarUrl}
                    className="rounded-circle z-depth-0 "
                    alt="avatar"
                    height="30"
                  />
                  <span className="mx-2 text-capitalize">{username}</span>
                </Link>
              </li>
              <li className="nav-item dropdown p-1">
                <a
                  href=""
                  className="nav-link dropdown-toggle "
                  id="dropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-user mr-2 "></i>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right dropdown-secondary special-color-dark"
                  aria-labelledby="dropdown"
                >
                  <Link
                    className="dropdown-item text-center text-light p-2 special-color-dark "
                    to="/setting"
                  >
                    <i className="fa fa-cog mr-2"></i>
                    Setting
                  </Link>
                  <Link
                    onClick={logout}
                    className="dropdown-item text-center text-light -2 special-color-dark "
                    to="/login"
                  >
                    <i className="fa fa-sign-out  mr-2"></i>
                    Logout
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

const maptStateToProps = state => {
  return {
    currentUserDetail: state.auth.currentUserDetail,
    userId: state.auth.currentUser.id
  };
};

export default connect(maptStateToProps, { fetchCurrentUserDetail, logout })(
  AppNav
);
