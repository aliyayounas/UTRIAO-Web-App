import { SET_ALERT, CLEAR_ALERT } from './types';
import uuid from 'uuid';

export const setAlert = (message, type, timeout = 5000) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: {
      message,
      id,
      type
    }
  });

  setTimeout(() => {
    dispatch({
      type: CLEAR_ALERT,
      payload: id
    });
  }, timeout);
};
