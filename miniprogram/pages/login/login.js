// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id: "",
        password: ""
    },

    idInput(event) {
        console.log(event.detail.value)
        this.setData({
            id: event.detail.value
        })
    },

    passwordInput(event) {
        console.log(event.detail.value)
        this.setData({
            password: event.detail.value
        })
    },

    login() {
        console.log("登录")
        //1.打开数据库
        const database = wx.cloud.database()
        //2.打开users集合
        const users = database.collection("users")
        //3.查询
        const results = users.where({
            id:this.data.id,
            password:this.data.password
        }).count().then(res => {
            console.log(res.total)
            if (res.total == 0) {
                wx.showToast({
                    title: '账号或者密码错误',
                    icon: "error",
                    duration: 2000
                })
            } else {
                wx.showToast({
                    title: '登录成功',
                    icon: "success",
                    duration: 2000
                }),
                wx.reLaunch({
                    url: '/pages/home/home'
                  })
            }
        }).catch(err => {
            console.log(err)
        })
    },
    register(){
        wx.redirectTo({
            url: `/pages/register/register`,
         })
    },
})
