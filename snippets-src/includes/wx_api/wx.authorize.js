wx.authorize({
  scope:
    '${1|scope.userInfo,scope.userLocation,scope.address,scope.invoiceTitle,scope.werun,scope.record,scope.writePhotosAlbum,scope.camera|}',
  success: res => {},
  fail: () => {},
  complete: () => {}
});
