import {
  SET_CURRENT_USER,
  SET_CURRENT_USER_DETAIL,
  CLEAR_CURRENT_USER_DETAIL
} from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  currentUser: null,
  currentUserDetail: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        currentUser: action.payload
      };

    case SET_CURRENT_USER_DETAIL:
      return {
        ...state,
        currentUserDetail: action.payload
      };
    case CLEAR_CURRENT_USER_DETAIL:
      return {
        ...state,
        currentUserDetail: null
      };

    default:
      return state;
  }
}
