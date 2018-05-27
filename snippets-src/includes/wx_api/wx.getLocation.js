wx.getLocation({
  type: '${1|wgs84,gcj02|}', //默认为 wgs84 返回 gps 坐标，gcj02 返回可用于wx.openLocation的坐标,
  success: res => {
    console.info("getLocation success: ", res);
    const latitude = res.latitude
    const longitude = res.longitude
    const speed = res.speed
    const accuracy = res.accuracy
  },
  fail: () => {
    console.log("getLocation failed")
  }
});
