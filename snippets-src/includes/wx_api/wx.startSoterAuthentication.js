wx.startSoterAuthentication({
  requestAuthModes: '${1:requestAuthModes}', //请求使用的可接受的生物认证方式,
  challenge: '${2:requestAuthModes}', //挑战因子。挑战因子为调用者为此次生物鉴权准备的用于签名的字符串关键识别信息，将作为result_json的一部分，供调用者识别本次请求,
  success: res => {}
});
