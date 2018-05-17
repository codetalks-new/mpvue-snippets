wx.setTabBarItem({
  index: 0, //tabBar的哪一项，从左边算起,
  text: '${1:text}', //tab 上按钮文字,
  iconPath: '${2:iconPath}', //图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效，不支持网络图片,
  selectedIconPath: '${3:selectedIconPath}' //选中时的图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px ，当 postion 为 top 时，此参数无效,
});
