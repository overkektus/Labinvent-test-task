import * as actionTypes from '../store/actions';

export function toggleDHCP(type, value) {
  return dispatch => new Promise(resolve => resolve(dispatch({type: actionTypes.TOGGLE_DHCP, payload: {type: type, value: value}})));
};

export function toggleDNS(type, value) {
  return dispatch => new Promise(resolve => resolve(dispatch({type: actionTypes.TOGGLE_DNS, payload: {type: type, value: value}})));
};