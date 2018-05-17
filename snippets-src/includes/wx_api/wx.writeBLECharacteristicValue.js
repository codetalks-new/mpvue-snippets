wx.writeBLECharacteristicValue({
  deviceId: '${1:deviceId}', //蓝牙设备 id，参考 device 对象,
  serviceId: '${2:serviceId}', //蓝牙服务 uuid,
  characteristicId: '${3:characteristicId}', //蓝牙特征值的 uuid,
  value: '${4:value}', //蓝牙设备特征值对应的二进制值,
  success: res => {}
});
