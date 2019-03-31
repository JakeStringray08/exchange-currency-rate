import { NOT_FOUND } from 'redux-first-router';

import homeRouteThunk from 'pages/home/routeThunk';

export const ROUTE_HOME = {
  type: 'ROUTE_HOME',
  page: 'Home',
  route: {
    path: '/',
    thunk: homeRouteThunk,
  },
};

export const ROUTE_SIGN_IN = {
  type: 'ROUTE_SIGN_IN',
  page: 'SignIn',
  route: {
    path: '/sign-in',
  },
};

export const ROUTE_SIGN_UP = {
  type: 'ROUTE_SIGN_UP',
  page: 'SignUp',
  route: {
    path: '/sign-up',
  },
};

export const ROUTE_NOT_FOUND = {
  type: NOT_FOUND,
  page: 'NotFound',
  route: {
    path: '/not-found',
  },
};

export const ROUTES = [
  ROUTE_HOME,
  ROUTE_SIGN_IN,
  ROUTE_SIGN_UP,
  ROUTE_NOT_FOUND,
];