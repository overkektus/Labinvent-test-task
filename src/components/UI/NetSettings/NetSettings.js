import React, { Fragment } from 'react';

import RadioBtn from '../RadioBtn/RadioBtn';
import TextBox from '../TextBox/TextBox';

const netSettings = (props) => {
  return(
    <Fragment>
      <RadioBtn
        for={props.for}
        val={props.ipAuto}
        choiceOneId={props.wireless ? "autoIPwireless" : "autoIPethernet"}
        choiceOne="Obtain an IP address automatically (DHCP/BootP)"
        choiceTwoId={props.wireless ? "manualIPwireless" : "manualIPethernet"}
        choiceTwo="Use the following IP address:"
        name={props.dhcpRadioID}
        onToggle={props.toggleDHCP}
        disabled={props.disabled}
      />
      <TextBox
        id={props.ipAddrID}
        val={props.ipAddrVal}
        label="IP address:"
        disabled={props.ipAuto || props.disabled}
        onChange={props.onChangeIP}
        require
      />
      <TextBox
        id={props.maskID}
        val={props.maskVal}
        label="Subnet Mask:"
        disabled={props.ipAuto || props.disabled}
        onChange={props.onChangeMask}
        require
      />
      <TextBox
        id={props.gateID}
        val={props.gateVal}
        label="Default Gateway:"
        disabled={props.ipAuto || props.disabled}
        onChange={props.onChangeGateway}
      />
      <RadioBtn
        for={props.for}
        val={props.dnsAuto}
        choiceOneId={props.wireless ? "autoDNSwireless" : "autoDNSethernet"}
        choiceOne="Obtain DNS serve address automatically"
        choiceTwoId={props.wireless ? "manualDNSwireless" : "manualDNSethernet"}
        choiceTwo="Use the following DNS server address:"
        name={props.dnsRadioID}
        onToggle={props.toggleDNS}
        disabled={props.disabled}
      />
      <TextBox
        id={props.dnsAddrID}
        val={props.dnsAddrVal}
        label="Preferred DNS server:"
        disabled={props.dnsAuto || props.disabled}
        onChange={props.onChangeDNSip}
        require
      />
      <TextBox
        id={props.dnsAltID}
        val={props.dnsAltVal}
        label="Alternative DNS server:"
        disabled={props.dnsAuto || props.disabled}
        onChange={props.onChangeAltDNSip}
      />
    </Fragment>
  );
};

export default netSettings;
