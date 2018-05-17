wx.getBLEDeviceCharacteristics({
  deviceId: '${1:deviceId}', //蓝牙设备 id，参考 device 对象,
  serviceId: '${2:serviceId}', //蓝牙服务 uuid,
  success: res => {}
});
