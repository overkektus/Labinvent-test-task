import * as actionTypes from '../actions/actionTypes';
import Store from '../formState';

const INITIAL_STATE = Store;

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionTypes.TOGGLE_DHCP:
      if(action.payload.type === 'ethernet')
        return {
          ...state,
          ethernet: {
            netSettings: {
              ...state.ethernet.netSettings,
              ipAuto: action.payload.value
            }
          }
        }
      if(action.payload.type === 'wireless')
        return {
          ...state,
          wireless: {
            ...state.wireless,
            netSettings: {
              ...state.wireless.netSettings,
              ipAuto: action.payload.value
            }
          }
        }
      break;
    case actionTypes.CHANGE_IP:
      if(action.payload.type === 'ethernet')
        return {
          ...state,
          ethernet: {
            netSettings: {
              ...state.ethernet.netSettings,
              ip: {
                ...state.ethernet.netSettings.ip,
                addr: action.payload.value
              }
            }
          }
        }
      if(action.payload.type === 'wireless')
        return {
          ...state,
          wireless: {
            ...state.wireless,
            netSettings: {
              ...state.wireless.netSettings,
              ip: {
                ...state.wireless.netSettings.ip,
                addr: action.payload.value
              }
            }
          }
        }
      break;
    case actionTypes.CHANGE_MASK:
      if(action.payload.type === 'ethernet')
        return {
          ...state,
          ethernet: {
            netSettings: {
              ...state.ethernet.netSettings,
              ip: {
                ...state.ethernet.netSettings.ip,
                mask: action.payload.value
              }
            }
          }
        }
      if(action.payload.type === 'wireless')
        return {
          ...state,
          wireless: {
            ...state.wireless,
            netSettings: {
              ...state.wireless.netSettings,
              ip: {
                ...state.wireless.netSettings.ip,
                mask: action.payload.value
              }
            }
          }
        }
      break;
    case actionTypes.CHANGE_GATEWAY:
      if(action.payload.type === 'ethernet')
        return {
          ...state,
          ethernet: {
            netSettings: {
              ...state.ethernet.netSettings,
              ip: {
                ...state.ethernet.netSettings.ip,
                gateway: action.payload.value
              }
            }
          }
        }
      if(action.payload.type === 'wireless')
        return {
          ...state,
          wireless: {
            ...state.wireless,
            netSettings: {
              ...state.wireless.netSettings,
              ip: {
                ...state.wireless.netSettings.ip,
                gateway: action.payload.value
              }
            }
          }
        }
      break;
    case actionTypes.TOGGLE_DNS:
      if(action.payload.type === 'ethernet')
        return {
          ...state,
          ethernet: {
            netSettings: {
              ...state.ethernet.netSettings,
              dnsAuto: action.payload.value
            }
          }
        }
      if(action.payload.type === 'wireless')
        return {
          ...state,
          wireless: {
            ...state.wireless,
            netSettings: {
              ...state.wireless.netSettings,
              dnsAuto: action.payload.value
            }
          }
        }
      break;
    case actionTypes.CHANGE_DNS_IP:
      if(action.payload.type === 'ethernet')
        return {
          ...state,
          ethernet: {
            netSettings: {
              ...state.ethernet.netSettings,
              dns: {
                ...state.ethernet.netSettings.dns,
                addr: action.payload.value
              }
            }
          }
        }
      if(action.payload.type === 'wireless')
        return {
          ...state,
          wireless: {
            ...state.wireless,
            netSettings: {
              ...state.wireless.netSettings,
              dns: {
                ...state.wireless.netSettings.dns,
                addr: action.payload.value
              }
            }
          }
        }
      break;
    case actionTypes.CHANGE_ALT_DNS_IP:
      if(action.payload.type === 'ethernet')
        return {
          ...state,
          ethernet: {
            netSettings: {
              ...state.ethernet.netSettings,
              dns: {
                ...state.ethernet.netSettings.dns,
                alt: action.payload.value
              }
            }
          }
        }
      if(action.payload.type === 'wireless')
        return {
          ...state,
          wireless: {
            ...state.wireless,
            netSettings: {
              ...state.wireless.netSettings,
              dns: {
                ...state.wireless.netSettings.dns,
                alt: action.payload.value
              }
            }
          }
        }
      break;
    case actionTypes.TOGGLE_WIFI:
      return {
        ...state,
        wireless: {
          ...state.wireless,
          enableWifi: action.payload.value
        }
      }
    case actionTypes.TOGGLE_WIFI_SECURITY:
      return {
        ...state,
        wireless: {
          ...state.wireless,
          enableSecurity: action.payload.value
        }
      }
    case actionTypes.CHANGE_SEC_KEY:
      return {
        ...state,
        wireless: {
          ...state.wireless,
          securityKey: action.payload.value
        }
      }
    case actionTypes.SELECT_NETWORK:
      return {
        ...state,
        wireless : {
          ...state.wireless,
          selectedNetwork: action.payload.value
        }
      }
    case actionTypes.GET_AVAILABLE_NETWORKS:
      return {
        ...state,
        wireless: {
          ...state.wireless,
          availableNetworks: action.payload.networks
        }
      };
    case actionTypes.GET_FORM_STATE:
      if(Object.keys(action.payload.state).length === 0 && action.payload.state.constructor === Object) {
        return {
          ...state
        }
      } else {
        return {
          ...action.payload.state
        }
      }
    case actionTypes.SUBMIT_FORM:
      return {
        ...state
      };
    default:
      return state
  }
  return state;
}

export default reducer;
