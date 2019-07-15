
Page({
  data: {
    curNav: 1,
    curIndex: 0,
    navList: [
      {
        id: 1,
        name: '全部'
      },
      {
        id: 2,
        name: '合伙人招募'
      },
      {
        id: 3,
        name: '珠宝'
      },
      {
         id:4,
         name:'AI销售管家 '
      },
      {
        id:5,
        name:'演示商品'
      },
    ],
    dishesList: [
      
        {
          name: "小猪佩琪",
          price: 38,
          num: 1,
          id: 1,
          img:"../images/1.png"
        },
        {
          name: "大猪佩琪",
          price: 58,
          num: 2,
          id: 1,
          img: "../images/1.png"
        },
      {
        name: "小猪佩琪",
        price: 38,
        num: 1,
        id: 1,
        img: "../images/1.png"
      },
      {
        name: "大猪佩琪",
        price: 58,
        num: 2,
        id: 1,
        img: "../images/1.png"
      },
      
        
          {
            name: "大猪佩琪",
            price: 58,
            num: 1,
            id: 2,
            img: "../images/1.png"
          },

      {
        name: "大猪佩琪qqq",
        price: 58,
        num: 1,
        id: 3,
        img: "../images/1.png"
      },

      {
        name: "大猪佩琪ooo",
        price: 58,
        num: 1,
        id: 2,
        img: "../images/1.png"
      }
     
    ],

    //展示商品数据
    showData: []
  },
  selectNav: function (e) {
    console.log(e.currentTarget.dataset.id)
    let id = e.currentTarget.dataset.id,
      index = parseInt(e.currentTarget.dataset.index);
      
    var self = this;
    self.setData({
      curNav: id,
      curIndex: index
    })

    ////初始化数据, 查找匹配curNav的数据
    this.getDataForId();

  },
  onPageScroll: function (e) {//监听页面滚动
    this.setData({
      scrollTop: e.scrollTop
    })
  },

  //刷选id商品
  getDataForId: function () {
    //初始化数据, 查找匹配curNav的数据
    var data = [];
    for (var i = 0; i < this.data.dishesList.length; i++) {
      if (this.data.curNav == this.data.dishesList[i].id) {
        data.push(this.data.dishesList[i]);
      }
    }

    this.setData({
      showData: data
    })
  },

  // 砍价商品
  retuan:function (e) {
    var id = e.currentTarget.dataset.id

    wx.navigateTo({
      url: '/pages/child/mass/mass?id=' + id,
    })
  },
  //  热团拼购  这还没有哪个模块指定路由
  SpellGroup:function (e) {
    
    wx.navigateTo({
      url: '/pages/child/SpellGroup/SpellGroup?id=123',
    })
  },
  // 推荐商品
  recommended:function () {
    wx.navigateTo({
      url: '/pages/child/recommended/recommended',
    })
  },

  // 商品列表
  goodsList:function () {
    wx.navigateTo({
      url: '/pages/child/recommended/recommended',
    })
  },

  onLoad: function () {
 

    ////初始化数据, 查找匹配curNav的数据
    this.getDataForId();
  

  }
})

