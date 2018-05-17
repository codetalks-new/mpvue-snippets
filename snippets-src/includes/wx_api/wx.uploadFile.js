wx.uploadFile({
  url: '${1:url}', //开发者服务器 url
  filePath: '${2:filePath}', //要上传文件资源的路径
  name: '${3:name}', //文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
  success: res => {},
  fail: () => {},
  complete: () => {}
});
