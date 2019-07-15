
Page({
keepposters:function(){
  wx.getSetting({
    success(res) {
      if (!res.authSetting['scope.writePhotosAlbum']) {
        wx.authorize({
          scope: 'scope.writePhotosAlbum',
          success() {
            console.log('授权成功')
          }
        })
      }
    }
  })
  wx.chooseImage({
    count: 1,// 默认9
    sizeType: ['original', 'compressed'],// 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'],// 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      console.log("choose image")
      console.log(res)
      var tempFilePath = res.tempFilePaths[0]
      wx.getImageInfo({
        src: tempFilePath,
        success: function (res) {
          console.log("get image info")
          console.log(res)
          wx.saveImageToPhotosAlbum({
            filePath: res.path,
            success(res) {
              console.log("保存图片成功")
              console.log(res)
              wx.showToast({
                title: '保存成功',
                icon: 'success',
                duration: 2000
              })
            },
            fail(err) {
              console.log('失败')
              console.log(err)

              if (err.errMsg == "saveImageToPhotosAlbum:fail cancel") {
                wx.openSetting({
                  success(settingdata) {
                    console.log(settingdata)
                    if (settingdata.authSetting["scope.writePhotosAlbum"]) {
                      console.log('获取权限成功，给出再次点击图片保存到相册的提示。')
                    } else {
                      console.log('获取权限失败，给出不给权限就无法正常使用的提示')
                    }
                  }
                })
              }
            }
          })
        }
      })
    }
  })
 
},

  
})

