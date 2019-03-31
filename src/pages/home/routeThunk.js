import { redirect } from 'redux-first-router';
import { ROUTE_SIGN_IN } from 'modules/Router/routes';

export default async (dispatch, getState) => {
  const canAccess = !!localStorage.getItem('user');
  if (!canAccess) {
    dispatch(redirect({ type: ROUTE_SIGN_IN.type }));
  }
}