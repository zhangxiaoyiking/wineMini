const app = getApp()
Page({
    data: {
        currentBanner:0,
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
        //
    },
    getBanner() {
        let params = {}
        app.api.banner(params).then(res => {
            console.log(res)
            this.setData({
                banner: res
            })
        })
    },
    bannerChange(e){
        console.log(e)
        this.setData({
            currentBanner:e.detail.current
        })
    },
    getTeacher() {
        let params = {}
        app.api.teacher(params).then(res => {
            console.log(res)
            this.setData({
                teacher: res
            })
        })
    },
    //跳转到干货
    toCargo(){
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