// pages/register/register.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id:"",
        password:"",
        name:"",
        sex:"",
        depart:"",
        class:"",
        tel:""

    },
    getId(event){
        console.log(event.detail.value)
        this.setData({
            id:event.detail.value
        })
    },

    getPassword(event){
        console.log(event.detail.value)
        this.setData({
            password:event.detail.value
        })
    },

    getName(event){
        console.log(event.detail.value)
        this.setData({
            name:event.detail.value
        })
    },

    getSex(event){
        console.log(event.detail.value)
        this.setData({
            sex:event.detail.value
        })
    },

    getDepart(event){
        console.log(event.detail.value)
        this.setData({
            depart:event.detail.value
        })
    },

    getClass(event){
        console.log(event.detail.value)
        this.setData({
            class:event.detail.value
        })
    },

    getTel(event){
        console.log(event.detail.value)
        this.setData({
            tel:event.detail.value
        })
    },

    Register(){
        console.log("注册")
        //1.打开数据库
        const database = wx.cloud.database()
        //2.打开users集合
        const users = database.collection("users")
        //3.插入参数
        users.add({
            data:{
                id:this.data.id,
                password:this.data.password,
                name:this.data.name,
                sex:this.data.sex,
                depart:this.data.depart,
                class:this.data.class,
                tel:this.data.tel
            }
        }).then(res=>{
            console.log(res)
            wx.showToast({   
                title: '注册成功',   
                icon: 'success',   
                duration: 2000   
              }) 
              wx.navigateTo({
                url: '/pages/login/login'
              })
        }).catch(err=>{
            console.log(err)
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})