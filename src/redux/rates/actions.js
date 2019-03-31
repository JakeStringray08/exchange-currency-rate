import {
  SET_REFRESH_TIME,
  ADD_SYMBOL,
  REMOVE_SYMBOL,
  RESET_ALL,
  SET_LAST_UPDATE_TIME
} from './actionTypes';

export const setRefreshTime = (newRefreshTime) => ({
  type: SET_REFRESH_TIME,
  newRefreshTime,
});

export const addSymbol = (symbolPair) => ({
  type: ADD_SYMBOL,
  symbolPair,
});

export const removeSymbol = (symbolPairIdx) => ({
  type: REMOVE_SYMBOL,
  symbolPairIdx,
});

export const resetAll = () => ({
  type: RESET_ALL,
});

export const setLastUpdateTime = () => ({
  type: SET_LAST_UPDATE_TIME,
});