wx.getConnectedBluetoothDevices({
  services: '${1:services}', //蓝牙设备主 service 的 uuid 列表,
  success: res => {}
});
