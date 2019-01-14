// pages/skuDetail/skuDetail.js
Page({
    data: {
        isFav: false,
        isKillSku: true  //是不是秒杀的商品
    },
    onLoad(options) {
        this.setData({
            isKillSku: options.isKillSku
        })
    },
    skuFav() {
        this.setData({
            isFav: !this.data.isFav,
        })
    },
    onShareAppMessage() {

    }
})