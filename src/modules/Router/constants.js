import { ROUTES } from './routes';

export const ROUTE_TO_PAGE_NAME_MAP = ROUTES.reduce((map, r) => {
  map[r.type] = r.page;
  return map;
}, {});
