// pages/child/mass/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "http://img1.imgtn.bdimg.com/it/u=2503045651,2738280232&fm=26&gp=0.jpg",
      "http://img3.imgtn.bdimg.com/it/u=2633625010,2488355757&fm=26&gp=0.jpg",
      "http://img1.imgtn.bdimg.com/it/u=156883703,2793772322&fm=26&gp=0.jpg",
    ]
  },

  // 立即咨询
  consulting:function () {
    wx.navigateTo({
      url: '/pages/child/consulting/consulting',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})