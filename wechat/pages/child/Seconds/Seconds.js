// pages/order/order.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btn: ["全部", "待支付", "未发货", "已发货", "已取消"],
    active: '',
    bg: '/pages/child/image/04.png ',
    height: null
  },


  goback: function () {
    wx.switchTab({
      url: '/pages/user/user',
    })
  },
  dianji: function (e) {
    var i = e.target.dataset.index
    this.setData({ active: i })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    this.setData({ active: options.id })
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
    var that = this
    wx.getSystemInfo({
      success: res => {

        // 单位rpx
        that.data.height = res.statusBarHeight / (res.windowWidth / 750) + 88;

        that.setData({ height: that.data.height })
      }
    })


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