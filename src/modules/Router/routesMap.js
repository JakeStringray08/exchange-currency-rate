import { ROUTES } from './routes';

const routesMap = ROUTES.reduce((map, r) => {
    map[r.type] = r.route;
    return map;
}, {});

export default routesMap;