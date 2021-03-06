import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux'

import profile from './profile';
import auth from './auth';
import plan from './plan';
import payment from './payment';
import notification from './notification';
import campaign from './campaign';
import rules from './rules';
import loading from './loading';
import configuration from './configuration';
import elastic from './elastic';

const reducer = combineReducers({
  profile,
  auth,
  plan,
  payment,
  notification,
  campaign,
  rules,
  loading,
  configuration,
  elastic,
  router: routerReducer
});

export default reducer;
