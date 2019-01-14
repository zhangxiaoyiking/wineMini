
Component({
    properties: {

    },

    data: {
        currentBanner: 0
    },
    addGlobalClass: true,
    methods: {
        bannerChange(e) {
            console.log(e)
            this.setData({
                currentBanner: e.detail.current
            })
        }
    }
})
