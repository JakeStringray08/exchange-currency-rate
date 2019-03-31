import { SET_USER } from './actionTypes';

const DEFAULT_STATE = { user: null };

export default (state = DEFAULT_STATE, action = {}) => {
  if (action.type === SET_USER) {
    return {
      ...state,
      user: action.payload,
    }
  }
  return state;
};