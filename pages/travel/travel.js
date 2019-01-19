// pages/travel/travel.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.initIndex()
  },
  initIndex() {
    //列表数据
    this.getDocumentList();
  },
  getDocumentList() {
    let params = {
      type: 1,
      page_size: 5,
      page: 1
    }
    app.api.documentList(params).then(res => {
      this.setData({
        documentList: res.data.data
      })
    })
  },
  toggleFav() {

  },
  toggleLike() {

  },
  onShareAppMessage: function() {

  }
})