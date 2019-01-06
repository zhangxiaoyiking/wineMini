let app = getApp()
Page({
    data: {
        currentBanner:0,
        currentTab:0
    },

    onLoad (options) {

    },
    bannerChange(e){
        console.log(e)
        this.setData({
            currentBanner:e.detail.current
        })
    },
    toggleLesson(e){
        console.log(e)
        this.setData({
            currentTab: e.target.dataset.index
        })
    }
})