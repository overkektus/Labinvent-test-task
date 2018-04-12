import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/index';

import NetSettings from '../UI/NetSettings/NetSettings';
import Title from '../UI/Title/Title';

class Ethernet extends Component {
  render() {
    return(
      <Fragment>
        <Title>Ethernet Settings</Title>
        <NetSettings
          dhcpRadioID="ethernetDhcp"
          ipAuto={this.props.ipAuto}
          toggleDHCP={this.props.onToggleDHCP}
          ipAddrID="ethernetIP"
          ipAddrVal={this.props.ipAddr}
          onChangeIP={this.props.onChangeIP}
          maskID="ethernetMask"
          maskVal={this.props.mask}
          onChangeMask={this.props.onChangeMask}
          gateID="ethernetGate"
          gateVal={this.props.gateway}
          onChangeGateway={this.props.onChangeGateway}

          dnsRadioID="ethernetDns"
          dnsAuto={this.props.dnsAuto}
          toggleDNS={this.props.onToggleDNS}
          dnsAddrID="ethernetDnsAddr"
          dnsAddrVal={this.props.dnsAddr}
          onChangeDNSip={this.props.onChangeDNSip}
          dnsAltID="ethernetDnsAlt"
          dnsAltVal={this.props.dnsAltAddr}
          onChangeAltDNSip={this.props.onChangeAltDNSip}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ethernet: state.ethernet,
    ipAuto: state.ethernet.netSettings.ipAuto,
    ipAddr: state.ethernet.netSettings.ip.addr,
    mask: state.ethernet.netSettings.ip.mask,
    gateway: state.ethernet.netSettings.ip.gateway,
    dnsAuto: state.ethernet.netSettings.dnsAuto,
    dnsAddr: state.ethernet.netSettings.dns.addr,
    dnsAltAddr: state.ethernet.netSettings.dns.alt
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleDHCP: (value) => dispatch(actionCreators.toggleDHCP('ethernet', value)),
    onChangeIP: (value) => dispatch(actionCreators.changeIP('ethernet', value)),
    onChangeMask: (value) => dispatch(actionCreators.changeMask('ethernet', value)),
    onChangeGateway: (value) => dispatch(actionCreators.changeGateway('ethernet', value)),
    onToggleDNS: (value) => dispatch(actionCreators.toggleDNS('ethernet', value)),
    onChangeDNSip: (value) => dispatch(actionCreators.changeDNSip('ethernet', value)),
    onChangeAltDNSip: (value) => dispatch(actionCreators.changeAltDNSip('ethernet', value))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Ethernet);
