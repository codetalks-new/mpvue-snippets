wx.uploadFile({
  url: '${1:url}', //开发者服务器接口地址，必须是 wss 协议，且域名必须是后台配置的合法域名
  method: '${2:GET}', //有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  protocols: '{{${3:protocols}}}', //子协议数组
  success: res => {},
  fail: () => {},
  complete: () => {}
});
