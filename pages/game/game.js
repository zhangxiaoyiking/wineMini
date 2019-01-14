
Page({

    data: {

    },
    onLoad (options) {
        this.random()
    },
    random(){
        let num = Math.floor(Math.random() * 10 + 1)
        console.log(num)

    },
    
    onShareAppMessage () {

    }
})