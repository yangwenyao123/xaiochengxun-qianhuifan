// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderBtn: [{
        Img: "/pages/imags/user/df.png",
        text: "代付款"
      },
      {
        Img: "/pages/imags/user/dfh.png",
        text: "代发货"
      },
      {
        Img: "/pages/imags/user/ds.png",
        text: "代收货"
      },
      {
        Img: "/pages/imags/user/wc.png",
        text: "已完成"
      },
    ]
  },
  // 我的订单
  jump: function(e) {
    var id = e.currentTarget.dataset.id
    console.log(id)
    wx.redirectTo({
      url: "/pages/child/order/order?id=" + id
    })

 

  },
  // 佣金
  money: function () {
    wx.navigateTo({
      url: '/pages/child/money/money',
    })
  },

  // 每日任务
  task:function () {
    wx.navigateTo({
      url: '/pages/child/task/task',
    })
  },

  // 积分
  integral : function () {
    wx.navigateTo({
      url: '/pages/child/integral/integral',
    })
  },

  // 拼团
  Spell:function () {
    wx.navigateTo({
      url: '/pages/child/Spell/Spell',
    })
  },

  // 砍价
  bargaining:function () {
    wx.navigateTo({
      url: '/pages/child/bargaining/bargaining',
    })
  },

  // 秒杀
  Seconds:function () {
    wx.navigateTo({
      url: '/pages/child/Seconds/Seconds',
    })
  },

  // 收藏
  collection:function () {
    wx.navigateTo({
      url: '/pages/child/collection/collection',
    })
  },

  // 优惠券
  coupons:function () {
    wx.navigateTo({
      url: '/pages/child/coupons/coupons',
    })
  },
  // 发票
  invoice:function () {
    wx.navigateTo({
      url: '/pages/child/invoice/invoice',
    })
  },
  // 红包
  reDenvelope:function () {
    wx.navigateTo({
      url: '/pages/child/reDenvelope/reDenvelope',
    })
  },

  // 售后管理
  afterSales:function () {
    wx.navigateTo({
      url: '/pages/child/afterSales/afterSales',
    })
  },

  // 收货地址
  address:function () {
    wx.navigateTo({
      url: '/pages/child/address/address',
    })
  },
  // 客服咨询
  consulting:function () {
    wx.navigateTo({
      url: '/pages/child/consulting/consulting',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})