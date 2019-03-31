import { 
  SET_REFRESH_TIME,
  ADD_SYMBOL,
  REMOVE_SYMBOL,
  RESET_ALL,
  SET_LAST_UPDATE_TIME
} from './actionTypes';
import { DEFAULT_REFRESH_TIME } from 'pages/home/constants';

const DEFAULT_STATE = {
  refreshTime: DEFAULT_REFRESH_TIME,
  symbols: [],
  lastUpdateTime: '',
};

export default (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case SET_REFRESH_TIME:
      return {
        ...state,
        refreshTime: action.newRefreshTime,
      };
    case ADD_SYMBOL:
      return {
        ...state,
        symbols: [...state.symbols, action.symbolPair]
      };
    case REMOVE_SYMBOL:
      return {
        ...state,
        symbols: state.symbols.filter((_, idx) => idx !== action.symbolPairIdx),
      };  
    case RESET_ALL:
      return DEFAULT_STATE;  
    case SET_LAST_UPDATE_TIME:
      return {
        ...state,
        lastUpdateTime: new Date().toLocaleTimeString(),
      }  
    default:
      return state;  
  }
};