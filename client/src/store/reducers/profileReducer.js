import {
  LOAD_PROFILE,
  CLEAR_PROFILE,
  SET_ERRORS,
  CLEAR_ERRORS
} from '../actions/types';

const initialState = {
  user: {},
  errors: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_PROFILE:
      return {
        ...state,
        user: action.payload
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        user: {}
      };
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null
      };

    default:
      return state;
  }
}
