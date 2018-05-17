wx.requestPayment({
  timeStamp: '${1:timeStamp}', //时间戳从1970年1月1日00:00:00至今的秒数,即当前的时间,
  nonceStr: '${2:nonceStr}', //随机字符串，长度为32个字符以下,
  package: '${3:package}', //统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=*,
  signType: 'MD5', //签名算法，暂支持 MD5,
  paySign: '${4:paySign}', //签名,具体签名方案参见小程序支付接口文档,
  success: res => {},
  fail: () => {},
  complete: () => {}
});
