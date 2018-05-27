wx.showModal({
  title: '${1:提示}', //提示的标题,
  content: '${2:content}', //提示的内容,
  showCancel: true, //是否显示取消按钮,
  cancelText: '${3:取消}', //取消按钮的文字，默认为取消，最多 4 个字符,
  cancelColor: '${4:#000000}', //取消按钮的文字颜色,
  confirmText: '${5:确定}', //确定按钮的文字，默认为取消，最多 4 个字符,
  confirmColor: '${6:#3CC51F}', //确定按钮的文字颜色,
  success: res => {
    if (res.confirm) {
      console.log('用户点击确定')
    } else if (res.cancel) {
      console.log('用户点击取消')
    }
  }
});
