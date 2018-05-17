wx.openLocation({
  latitude: '${1:latitude}', //纬度，范围为-90~90，负数表示南纬,
  longitude: '${2:longitude}', //经度，范围为-180~180，负数表示西经,
  scale: 15, //缩放比例，范围5~18,
  name: '${4:name}', //位置名,
  address: '${5:address}', //地址的详细说明,
  success: res => {}
});
