wx.saveImageToPhotosAlbum({
  filePath: '${1:filePath}', //图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径,
  success: res => {},
  fail: () => {},
  complete: () => {}
});
