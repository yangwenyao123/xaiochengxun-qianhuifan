// pages/child/mass/mass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [{
        Img: "http://img1.imgtn.bdimg.com/it/u=156883703,2793772322&fm=26&gp=0.jpg",
        title: "春天里，那一望无际的浅蓝，像你宽广的胸怀，让我依靠，让我撒娇，",
        price: "199",
        dele: "255"
      },
      {
        Img: "http://img1.imgtn.bdimg.com/it/u=2503045651,2738280232&fm=26&gp=0.jpg",
        title: "春天里，那一望无际的浅蓝，像你宽广的胸怀，让我依靠，让我撒娇，",
        price: "199",
        dele: "255"
      },
      {
        Img: "http://img3.imgtn.bdimg.com/it/u=2633625010,2488355757&fm=26&gp=0.jpg",
        title: "春天里，那一望无际的浅蓝，像你宽广的胸怀，让我依靠，让我撒娇，",
        price: "199",
        dele: "255"
      },
    ],
    pid: ''

  },
  // 路由跳转判断
  routing: function() {
    
  },


  // 商品详情
  details: function() {
    if (this.data.pid == "1") {
      console.log(this.data.pid)
      wx.navigateTo({
        url: '/pages/child/SpellGroup/SpellGroup',
      })
    } else if (this.data.pid == "2") {
      wx.navigateTo({
        url: '/pages/child/recommended/recommended',
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.data.pid = options.id
    this.setData({
      pid: this.data.pid
    })
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