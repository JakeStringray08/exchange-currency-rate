import { ROUTE_TO_PAGE_NAME_MAP } from '../modules/Router/constants';
import { ROUTE_HOME } from '../modules/Router/routes';

const DEFAULT_STATE = ROUTE_HOME.page;

export default (state = DEFAULT_STATE, action = {}) => ROUTE_TO_PAGE_NAME_MAP[action.type] || state;