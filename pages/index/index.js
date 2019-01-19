const app = getApp()
Page({
  data: {
    currentBanner: 0,
    ...app.systemInfo
  },
  onLoad() {

  },
  onShow() {
    this.initIndex()
  },
  initIndex() {
    //首页banner
    this.getBanner()
    //首页导师
    this.getTeacher()
    //梦想导图
    this.getDream()
    //线下课程
    this.getCouser()
  },
  //首页banner
  getBanner() {
    let params = {}
    app.api.banner(params).then(res => {
      this.setData({
        banner: res
      })
    })
  },
  bannerChange(e) {
    console.log(e)
    this.setData({
      currentBanner: e.detail.current
    })
  },
  //讲师介绍
  getTeacher() {
    let params = {}
    app.api.teacher(params).then(res => {
      this.setData({
        teacher: res
      })
    })
  },
  //梦想导图
  getDream() {
    let parems = {};
    var that = this;
    app.api.dream(parems).then(res => {
      var dream = res.data;
      for (var i = 0; i < dream.length;i++){
        dream[i].main = res.data[i].major.split(',');
        dream[i].auxiliary = res.data[i].minor.split(',');
      }
      that.setData({
        dream: res.data,
      })
    })
  },
  //线下课程
  getCouser(){
    let parems = {};

    app.api.couser(parems).then(res => {
      this.setData({
        couser: res.data,
      })
    })
  },
  //跳转到干货
  toCargo() {
    wx.navigateTo({
      url: '/pages/cargo/cargo',
    })
  },
  //跳转到游学
  toTravel() {
    wx.navigateTo({
      url: '/pages/travel/travel',
    })
  },
  //跳转到优惠秒杀
  toCoupons() {
    wx.navigateTo({
      url: '/pages/limitedKill/limitedKill',
    })
  },
})