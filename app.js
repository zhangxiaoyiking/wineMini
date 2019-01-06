import api from './api/index.js'
App({
  onLaunch () {
      this.api = api
      this.ispx()
      console.log(this)
  },
  ispx(){
    wx.getSystemInfo({
        success: (res) => {
            console.log(res)
            let isPX = (res.model.indexOf("iPhone X") != -1) ? true : false
            this.systemInfo = {
                isPX: isPX,
                windowHeight: res.windowHeight,
                windowWidth: res.windowWidth
            }
        }
    })
  },
  vision:"1.0.0"
})