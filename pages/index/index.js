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
    }
})