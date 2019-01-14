// pages/skuDetail/skuDetail.js
Page({
    data: {
        isFav:false,
        isKillSku:true
    },
    skuFav(){
      this.setData({
          isFav: !this.data.isFav,
      })
    },
    onShareAppMessage () {

    }
})