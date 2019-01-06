export default (url, param, method) => {
    let HOST = "../../api/" //mock设置空
    let isMock = true

    return new Promise((res, rej) => {
        if(isMock){
            res(require(`${url}`))
        }else{
            wx.request({
                url: urls,
                data: params,
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
