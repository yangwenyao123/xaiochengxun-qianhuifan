// pages/first/first.js
Page({
  onReady(e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx.setSrc('http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46')
   
  },
  data: {
    src: '',
    num: 0,
    love:0,
    good:0,
    honest:0,
    prin:0,
    give:0,
    cat:0,
    bear:0,
    relia:0,
    mark:0,
    wechat:'123456789',
    phone:'121212121',
    email:'121212121@qq.com',
    name: '',
    video: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400}"
  },
  audioPlay() {
    this.audioCtx.play()
  },
  formposter:function(){
    wx.navigateTo({
      url: '/pages/posters/posters',
    })
  },
  btnclick:function(){
   var num= this.data.num;
    num++;
    this.data.num = num++;  
    this.setData({
      num:this.data.num
    })
  },
  havelove:function(){
   var love = this.data.love;
   love++;
   this.data.love = love++;
   this.setData({
     love:this.data.love++
   })
  },
  havegood:function(){
   var good = this.data.good;
    good++;
    this.data.good = good++
    this.setData({
      good:this.data.good++
    })
    },
    havehonest:function(){
    var honest = this.data.honest;
    honest++;
    this.data.honest = honest++;
    this.setData({
    honest: this.data.honest++
    })
    },
  haveprin: function () {
    var prin = this.data.prin;
    prin++;
    this.data.prin = prin++;
    this.setData({
      prin: this.data.prin++
    })
  },
  havegive: function () {
    var give = this.data.give;
    give++;
    this.data.give = give++;
    this.setData({
      give: this.data.give++
    })
  },
  havecat: function () {
    var cat = this.data.cat;
    cat++;
    this.data.cat = cat++;
    this.setData({
      cat: this.data.cat++
    })
  },
  havebear: function () {
    var bear = this.data.bear;
    bear++;
    this.data.bear = bear++;
    this.setData({
      bear: this.data.bear++
    })
  },
  haverelia: function () {
    var relia = this.data.relia;
    relia++;
    this.data.relia = relia++;
    this.setData({
      relia: this.data.relia++
    })
  },
  havemark: function () {
    var mark = this.data.mark;
    mark++;
    this.data.mark = mark++;
    this.setData({
      mark: this.data.mark++
    })
  },
  bindplay: function (e) {
    this.setData({
      tab_image: "none"
    }),
      this.videoCtx.play()
  },
  email:function(){
    wx.setClipboardData({
      data: this.data.email,
      success(res) {
        wx.getClipboardData({
          success(res) {
          }
        })
      }
    })
  },
  callphone:function(){
    wx.makePhoneCall({
      phoneNumber: this.data.phone
    })
  },
  copy:function(){
    wx.setClipboardData({
      data: this.data.wechat,
      success(res) {
        wx.getClipboardData({
          success(res) {
          }
        })
      }
    })
  },
  whereform:function(){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success(res) {
        const latitude = 23.135993 
        const longitude =113.43086
        const name = "广州千汇凡网络科技有限公司"
        const address = "广东省广州市天河区灵山东路东英科技园7号楼1501-4"
        wx.openLocation({
          latitude,
          longitude,
          scale: 18,
          name,
          address
        })
      }
    })
  },
  sharecard:function(){
    wx.showShareMenu({
      withShareTicket: true,
      success(res) {
      },
      fail(res){
      }
    })

  },
  phonenum:function(){
    wx.makePhoneCall({
      phoneNumber: this.data.phone
    })
  },
  guanwang:function(){
    wx.switchTab({
      url: "/pages/guanwang/guanwang"
    })
  }
  
  
})

  