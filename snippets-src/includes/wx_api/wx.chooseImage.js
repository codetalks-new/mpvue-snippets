wx.chooseImage({
  count: '${1:9}', //最多可以选择的图片张数,
  success: res => {}, //返回图片的本地文件路径列表 tempFilePaths,
  fail: () => {},
  complete: () => {}
});
