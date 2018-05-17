wx.addCard({
  cardList: [
    {
      cardId: '',
      cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}'
    }
  ],
  success: function(res) {
    console.log(res.cardList); // 卡券添加结果
  }
});
