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

  refreshHandler(event) {
    event.preventDefault();
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
          options={this.props.availableNetworks}
          selected={this.props.selectedNetwork}
          refreshClick={this.refreshHandler}
          disabled={!this.props.enableWifi}
          onSelect={this.props.onSelectNetwork}
        />
        <CheckBox
          id="enableSec"
          label="Enable Wireless Security:"
          clicked={this.props.onEnableSecurity}
          val={this.props.enableSecurity}
          disabled={!this.props.enableWifi}
        />
        <TextBox
          secKey
          id="secKey"
          label="Security Key:"
          val={this.props.securityKey}
          disabled={!this.props.enableSecurity || !this.props.enableWifi}
          onChange={this.props.onChangeSecKey}
          require
        />
        <NetSettings
          wireless
          dhcpRadioID="wirelessDhcp"
          ipAuto={this.props.ipAuto}
          toggleDHCP={this.props.onToggleDHCP}
          ipAddrID="wirelessIP"
          ipAddrVal={this.props.ipAddr}
          onChangeIP={this.props.onChangeIP}
          maskID="wirelessMask"
          maskVal={this.props.mask}
          onChangeMask={this.props.onChangeMask}
          gateID="wirelessGate"
          gateVal={this.props.gateway}
          onChangeGateway={this.props.onChangeGateway}

          dnsRadioID="wirelessDns"
          dnsAuto={this.props.dnsAuto}
          toggleDNS={this.props.onToggleDNS}
          dnsAddrID="wirelessDnsAddr"
          dnsAddrVal={this.props.dnsAddr}
          onChangeDNSip={this.props.onChangeDNSip}
          dnsAltID="wirelessDnsAlt"
          dnsAltVal={this.props.dnsAlt}
          onChangeAltDNSip={this.props.onChangeAltDNSip}

          disabled={!this.props.enableWifi}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    wireless: state.wireless,
    availableNetworks: state.wireless.availableNetworks,
    selectedNetwork: state.wireless.selectedNetwork,
    enableWifi: state.wireless.enableWifi,
    enableSecurity: state.wireless.enableSecurity,
    enableWifi: state.wireless.enableWifi,
    securityKey: state.wireless.securityKey,
    ipAuto: state.wireless.netSettings.ipAuto,
    ipAddr: state.wireless.netSettings.ip.addr,
    mask: state.wireless.netSettings.ip.mask,
    gateway: state.wireless.netSettings.ip.gateway,
    dnsAuto: state.wireless.netSettings.dnsAuto,
    dnsAddr: state.wireless.netSettings.dns.addr,
    dnsAlt: state.wireless.netSettings.dns.alt
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

export default connect(mapStateToProps, mapDispatchToProps)(Wireless);
