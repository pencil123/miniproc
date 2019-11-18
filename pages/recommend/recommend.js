//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    time: (new Date()).toString(),
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    array: [{
      text: '高领秋冬韩版紧身内搭t恤打底',
      price: '10.50',
      src: 'https://img.alicdn.com/bao/uploaded/i1/3878483432/O1CN01gcgZHU1bDtqUBdIWp_!!0-item_pic.jpg'
    }, {
      text: '高领秋冬韩版紧身内搭t恤打底',
      price: '10.50',
      src: 'https://img.alicdn.com/bao/uploaded/i1/3878483432/O1CN01gcgZHU1bDtqUBdIWp_!!0-item_pic.jpg'
    }, {
      text: '高领秋冬韩版紧身内搭t恤打底',
      price: '10.50',
      src: 'https://img.alicdn.com/bao/uploaded/i1/3878483432/O1CN01gcgZHU1bDtqUBdIWp_!!0-item_pic.jpg'
    }, {
      text: '高领秋冬韩版紧身内搭t恤打底',
      price: '10.50',
      src: 'https://img.alicdn.com/bao/uploaded/i1/3878483432/O1CN01gcgZHU1bDtqUBdIWp_!!0-item_pic.jpg'
    }, {
      text: '高领秋冬韩版紧身内搭t恤打底',
      price: '10.50',
      src: 'https://img.alicdn.com/bao/uploaded/i1/3878483432/O1CN01gcgZHU1bDtqUBdIWp_!!0-item_pic.jpg'
    }, {
      text: '高领秋冬韩版紧身内搭t恤打底',
      price: '10.50',
      src: 'https://img.alicdn.com/bao/uploaded/i1/3878483432/O1CN01gcgZHU1bDtqUBdIWp_!!0-item_pic.jpg'
    }, {
      text: '高领秋冬韩版紧身内搭t恤打底',
      price: '10.50',
      src: 'https://img.alicdn.com/bao/uploaded/i1/3878483432/O1CN01gcgZHU1bDtqUBdIWp_!!0-item_pic.jpg'
    }, {
      text: '高领秋冬韩版紧身内搭t恤打底',
      price: '10.50',
      src: 'https://img.alicdn.com/bao/uploaded/i1/3878483432/O1CN01gcgZHU1bDtqUBdIWp_!!0-item_pic.jpg'
    }],
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindTimeTap: function () {
    wx.navigateTo({
      url: '../phone/phone'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  //预览图片
  previewImg: function (e) {
    var currentUrl = e.currentTarget.dataset.currenturl
    var previewUrls = e.currentTarget.dataset.previewurl
    wx.previewImage({
      current: currentUrl, //必须是http图片，本地图片无效
      urls: previewUrls, //必须是http图片，本地图片无效
    })
  },
  onLoad: function () {
    var that = this
    var picList = []
    picList.push("https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1623318287,3864173199&fm=27&gp=0.jpg")
    picList.push("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532429494100&di=6d4f20a64fb21f113e1bb67be1cdbb63&imgtype=0&src=http%3A%2F%2Fimg.juimg.com%2Ftuku%2Fyulantu%2F121019%2F240425-12101920154274.jpg")
    picList.push("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532429494100&di=f3712ddf9ca5b37bf81f2cea4ae40c54&imgtype=0&src=http%3A%2F%2Fpic32.photophoto.cn%2F20140808%2F0042040230406581_b.jpg")
    that.setData({
      picList: picList,
    })
  }
})
