onShareAppMessage() {
  return {
    title: '${1:自定义转发标题}',
    path: '${2:/pages/index}',
    imageUrl: '${3:url}',
    success: res => {},
    fail: () => {},
    complete: () => {}
  };
}
