wx.request({
  url: '${1:url}', //开发者服务器接口地址",
  data: '${2:data}', //请求的参数",
  method: '${3|GET,OPTIONS, HEAD, POST, PUT, DELETE, TRACE, CONNECT|}',
  dataType: '${4:json}', //如果设为json，会尝试对返回的数据做一次 JSON.parse
  success: res => {},
  fail: () => {},
  complete: () => {}
});
