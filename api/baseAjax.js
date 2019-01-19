export default (url, param, method) => {
    // let HOST = "../../api/" //mock设置空
    // let isMock = true
    let isMock = false;

    return new Promise((res, rej) => {
        if(isMock){
            res(require(`${url}`))
        }else{
            wx.request({
              url: 'https://pinle.jnjike.com/api/' + url,
              data: param,
                method: method || "GET",
                success: (data) => {
                    res(data)
                },
                fail: (error) => {
                    console.log(error)
                    rej(error)
                }
            })
        }
    })
}
