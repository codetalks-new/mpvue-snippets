wx.connectWifi({
  SSID: '${1:SSID}', //Wi-Fi 设备ssid,
  BSSID: '${2:BSSID}', //Wi-Fi 设备BSSID,
  password: '${3:password}', //Wi-Fi 设备password,
  success: res => {}
});
