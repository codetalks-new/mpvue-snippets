wx.getStorage({
  key: '${key:key}',
  success: (res) => {
    console.log(res.data)
  },
  fail: () => { },
  complete: () => { }
})
