export default {
  ethernet: {
    netSettings: {
      ipAuto: true,
      ip: {
        addr: null,
        mask: null,
        gateway: null
      },
      dnsAuto: true,
      dns: {
        addr: null,
        alt: null
      }
    }
  },
  wireless: {
    enableWifi: true,
    selectedNetwork: null,
    availableNetworks: ['test'],
    enableSecurity: false,
    securityKey: null,
    netSettings: {
      ipAuto: false,
      ip: {
        addr: null,
        mask: null,
        gateway: null
      },
      dnsAuto: true,
      dns: {
        addr: null,
        alt: null
      }
    }
  }
}