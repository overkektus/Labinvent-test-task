const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const settingsSchema = new Schema({
  ethernet: {
    netSettings: {
      ipAuto: Boolean,
      ip: {
        addr: String,
        mask: String,
        gateway: String
      },
      dnsAuto: Boolean,
      dns: {
        addr: String,
        alt: String
      }
    }
  },
  wireless: {
    enableWifi: Boolean,
    availableNetworks: Array,
    selectedNetwork: String,
    enableSecurity: Boolean,
    securityKey: String,
    netSettings: {
      ipAuto: Boolean,
      ip: {
        addr: String,
        mask: String,
        gateway: String
      },
      dnsAuto: Boolean,
      dns: {
        addr: String,
        alt: String
      }
    }
  }
}, {versionKey: false});

const Settings = mongoose.model('Settings', settingsSchema);

module.exports = Settings