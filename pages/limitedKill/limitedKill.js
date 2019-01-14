// pages/limitedKill/limitedKill.js
Page({

    data: {
        currentTab:1,
    },

   toggleTab(e){
       this.setData({
           currentTab:e.target.dataset.index
       })
   },
    toSkuDetail(){
        wx.navigateTo({
            url: '/pages/skuDetail/skuDetail?isKillSku=true',
        })
    },
    onShareAppMessage: function () {

    }
})