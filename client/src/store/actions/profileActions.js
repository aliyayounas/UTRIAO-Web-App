import axios from 'axios';
import { setAlert } from './alertAction';
import {
  fetchCurrentUserDetail,
  setCurrentUser,
  clearCurrentUserDetail
} from './authActions';

import { LOAD_PROFILE, CLEAR_PROFILE, SET_ERRORS, CLEAR_ERRORS } from './types';

import setAuthorizationToken from './setAuthorizationToken';

export const fetchProfile = id => async dispatch => {
  try {
    const response = await axios.get(`/api/users/profile/${id}`);

    dispatch(loadProfile(response.data.data));
  } catch (error) {
    dispatch(setErrors(error.response.data.message));
  }
};

export const loadProfile = user => {
  return {
    type: LOAD_PROFILE,
    payload: user
  };
};

export const clearProfile = () => {
  return {
    type: CLEAR_PROFILE
  };
};

export const setErrors = errors => {
  return {
    type: SET_ERRORS,
    payload: errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const uploadCover = coverData => async (dispatch, getState) => {
  try {
    await axios.post('/api/users/cover', coverData);
    const { auth } = getState();

    window.location.href = `/profile/${auth.currentUser.id}`;
  } catch (error) {
    dispatch(setErrors(error.response.data.message));
  }
};

export const uploadAvatar = avatarData => async (dispatch, getState) => {
  try {
    await axios.post('/api/users/avatar', avatarData);
    const { auth } = getState();

    window.location.href = `/profile/${auth.currentUser.id}`;
  } catch (error) {
    dispatch(setErrors(error.response.data.message));
  }
};

export const updatePersonal = userData => async dispatch => {
  try {
    const response = await axios.put('/api/users/personal', userData);

    dispatch(loadProfile(response.data.data));
    dispatch(setAlert(response.data.message, 'success'));
    dispatch(fetchCurrentUserDetail());
  } catch (error) {
    dispatch(setErrors(error.response.data.message));
    dispatch(setAlert(error.response.data.message, 'danger'));
  }
};

export const updateHobbies = HobbiesData => async dispatch => {
  try {
    const response = await axios.put('/api/users/hobbies', HobbiesData);

    dispatch(loadProfile(response.data.data));
    dispatch(setAlert(response.data.message, 'success'));
  } catch (error) {
    dispatch(setErrors(error.response.data.message));
    dispatch(setAlert(error.response.data.message, 'danger'));
  }
};

export const changePassword = passwordData => async dispatch => {
  try {
    const response = await axios.put('/api/users/password', passwordData);
    dispatch(setAlert(response.data.message, 'success'));

    setTimeout(() => {
      localStorage.removeItem('jwtToken');
      setAuthorizationToken(false);
      dispatch(setCurrentUser(null));
      dispatch(clearCurrentUserDetail());
      dispatch(clearProfile());
      dispatch(setAlert('Successfully logged out from App', 'success', 3000));
      window.location.href = '/login';
    }, 4000);
  } catch (error) {
    const { message } = error.response.data;
    if (typeof message === 'string')
      return dispatch(setAlert(message, 'danger'));
    message.map(message => dispatch(setAlert(message, 'danger', 5000)));
  }
};

export const changeEmail = emailData => async dispatch => {
  try {
    const response = await axios.put('/api/users/email', emailData);
    dispatch(setAlert(response.data.message, 'success'));
    dispatch(fetchCurrentUserDetail());
  } catch (error) {
    dispatch(setAlert(error.response.data.message, 'danger'));
  }
};

export const deleteUser = deleteData => async dispatch => {
  try {
    const response = await axios.delete('/api/users/delete', {
      data: deleteData
    });
    dispatch(setAlert(response.data.message, 'success'));

    setTimeout(() => {
      localStorage.removeItem('jwtToken');
      setAuthorizationToken(false);
      dispatch(setCurrentUser(null));
      dispatch(clearCurrentUserDetail());
      dispatch(clearProfile());

      // window.location.href = '/login';
      dispatch(setAlert('Sorry to see you go :(', 'success', 4000));
    }, 5000);
  } catch (error) {
    const { message } = error.response.data;
    if (typeof message === 'string')
      return dispatch(setAlert(message, 'danger'));
    message.map(message => dispatch(setAlert(message, 'danger', 5000)));
  }
};
