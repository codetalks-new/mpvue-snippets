wx.showToast({
  title: '${1:title}', //提示的内容,
  icon: '${2|success,loading,none|}', //图标,
  duration: 2000, //延迟时间,
  mask: true, //显示透明蒙层，防止触摸穿透,
  success: res => {}
});
