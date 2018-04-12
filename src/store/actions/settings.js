import axios from '../../axios-orders';
import * as actionTypes from './actionTypes';

export const toggleDHCP = (type, value) => {
  return {
    type: actionTypes.TOGGLE_DHCP,
    payload: {
      type: type,
      value: value
    }
  };
};

export const changeIP = (type, value) => {
  return {
    type: actionTypes.CHANGE_IP,
    payload: {
      type: type,
      value: value
    }
  };
};

export const changeMask = (type, value) => {
  return {
    type: actionTypes.CHANGE_MASK,
    payload: {
      type: type,
      value: value
    }
  };
};

export const changeGateway = (type, value) => {
  return {
    type: actionTypes.CHANGE_GATEWAY,
    payload: {
      type: type,
      value: value
    }
  };
};

export const toggleDNS = (type, value) => {
  return {
    type: actionTypes.TOGGLE_DNS,
    payload: {
      type: type,
      value: value
    }
  };
};

export const changeDNSip = (type, value) => {
  return {
    type: actionTypes.CHANGE_DNS_IP,
    payload: {
      type: type,
      value: value
    }
  };
};

export const changeAltDNSip = (type, value) => {
  return {
    type: actionTypes.CHANGE_ALT_DNS_IP,
    payload: {
      type: type,
      value: value
    }
  };
};

export const enableWIFI = (value) => {
  return {
    type: actionTypes.TOGGLE_WIFI,
    payload: {
      value: value
    }
  };
};

export const enableWIFIsecurity = (value) => {
  return {
    type: actionTypes.TOGGLE_WIFI_SECURITY,
    payload: {
      value: value
    }
  };
};

export const changeSecKey = (value) => {
  return {
    type: actionTypes.CHANGE_SEC_KEY,
    payload: {
      value: value
    }
  };
};

export const selectNetwork = (value) => {
  return {
    type: actionTypes.SELECT_NETWORK,
    payload: {
      value: value
    }
  };
};

export const getNetworks = () => {
  return(dispatch) => {
    axios.get('/networks')
      .then(res => {
        if(res.status === 200) {
          dispatch({type: actionTypes.GET_AVAILABLE_NETWORKS, payload: {networks: res.data}});
        }
      });
  };
};

export const getFormState = () => {
  return(dispatch) => {
    axios.get('/state')
      .then(res => {
        if(res.status === 200) {
          dispatch({type: actionTypes.GET_FORM_STATE, payload: {state: res.data}});
        }
      })
  };
};

export const submitFormState = () => {
  return(dispatch, getState) => {
    axios.post('/state', getState())
      .then(res => {
        if(res.status === 200) {
          console.log('state submited');
        }
      })
  };
};