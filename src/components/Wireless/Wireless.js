import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/index';

import Title from '../UI/Title/Title';
import NetSettings from '../UI/NetSettings/NetSettings';
import TextBox from '../UI/TextBox/TextBox';
import CheckBox from '../UI/CheckBox/CheckBox';
import DropDown from '../UI/DropDown/DropDown';

class Wireless extends Component {

  constructor(props) {
    super(props);
    this.refreshHandler = this.refreshHandler.bind(this);
  }

  refreshHandler(e) {
    e.preventDefault();
    this.props.onRefresh();
  }

  render() {
    return(
      <Fragment>
        <Title>Wireless Settings</Title>
        <CheckBox
          id="enable"
          label="Enable wifi:"
          clicked={this.props.onEnableWifi}
          val={this.props.wireless.enableWifi}
        />
        <DropDown
          id="availableNet"
          label="Wireless Network Name:"
          options={this.props.wireless.availableNetworks}
          selected={this.props.wireless.selectedNetwork}
          refreshClick={this.refreshHandler}
          disabled={!this.props.wireless.enableWifi}
          onSelect={this.props.onSelectNetwork}
        />
        <CheckBox
          id="enableSec"
          label="Enable Wireless Security:"
          clicked={this.props.onEnableSecurity}
          val={this.props.wireless.enableSecurity}
          disabled={!this.props.wireless.enableWifi}
        />
        <TextBox
          secKey
          id="secKey"
          label="Security Key:"
          val={this.props.wireless.securityKey}
          disabled={!this.props.wireless.enableSecurity || !this.props.wireless.enableWifi}
          onChange={this.props.onChangeSecKey}
          require
        />
        <NetSettings
          wireless
          dhcpRadioID="wirelessDhcp"
          ipAuto={this.props.wireless.netSettings.ipAuto}
          toggleDHCP={this.props.onToggleDHCP}
          ipAddrID="wirelessIP"
          ipAddrVal={this.props.wireless.netSettings.ip.addr}
          onChangeIP={this.props.onChangeIP}
          maskID="wirelessMask"
          maskVal={this.props.wireless.netSettings.ip.mask}
          onChangeMask={this.props.onChangeMask}
          gateID="wirelessGate"
          gateVal={this.props.wireless.netSettings.ip.gateway}
          onChangeGateway={this.props.onChangeGateway}

          dnsRadioID="wirelessDns"
          dnsAuto={this.props.wireless.netSettings.dnsAuto}
          toggleDNS={this.props.onToggleDNS}
          dnsAddrID="wirelessDnsAddr"
          dnsAddrVal={this.props.wireless.netSettings.dns.addr}
          onChangeDNSip={this.props.onChangeDNSip}
          dnsAltID="wirelessDnsAlt"
          dnsAltVal={this.props.wireless.netSettings.dns.alt}
          onChangeAltDNSip={this.props.onChangeAltDNSip}

          disabled={!this.props.wireless.enableWifi}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    wireless: state.wireless
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onEnableWifi: (value) => dispatch(actionCreators.enableWIFI(value)),
    onEnableSecurity: (value) => dispatch(actionCreators.enableWIFIsecurity(value)),
    onChangeSecKey: (value) => dispatch(actionCreators.changeSecKey(value)),
    onSelectNetwork: (value) => dispatch(actionCreators.selectNetwork(value)),
    onRefresh: () => dispatch(actionCreators.getNetworks()),
    onToggleDHCP: (value) => dispatch(actionCreators.toggleDHCP('wireless', value)),
    onChangeIP: (value) => dispatch(actionCreators.changeIP('wireless', value)),
    onChangeMask: (value) => dispatch(actionCreators.changeMask('wireless', value)),
    onChangeGateway: (value) => dispatch(actionCreators.changeGateway('wireless', value)),
    onToggleDNS: (value) => dispatch(actionCreators.toggleDNS('wireless', value)),
    onChangeDNSip: (value) => dispatch(actionCreators.changeDNSip('wireless', value)),
    onChangeAltDNSip: (value) => dispatch(actionCreators.changeAltDNSip('wireless', value))
  }
};

// const mapDispatchToprops = dispatch => {
//   return {
//     onEnableWifi: (value) => dispatch({type: actionTypes.TOGGLE_WIFI, payload: {value: value}}),
//     onEnableSecurity: (value) => dispatch({type: actionTypes.TOGGLE_WIFI_SECURITY, payload: {value: value}}),
//     onRefresh: () => dispatch({type: actionTypes.GET_AVAILABLE_NETWORKS}),
//     onToggleDHCP: (value) => dispatch({type: actionTypes.TOGGLE_DHCP, payload: {value: value, type: 'wireless'}}),
//     onToggleDNS: (value) => dispatch({type: actionTypes.TOGGLE_DNS, payload: {value: value, type: 'wireless'}})
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(Wireless);
