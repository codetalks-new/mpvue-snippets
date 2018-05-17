wx.readBLECharacteristicValue({
  deviceId: '${1:deviceId}', //蓝牙设备 id，参考 device 对象,
  serviceId: '${2:serviceId}', //蓝牙服务 uuid,
  characteristicId: '${3:characteristicId}', //蓝牙特征值的 uuid,
  success: res => {}
});
