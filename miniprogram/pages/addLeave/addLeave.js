// pages/addLeave/addLeave.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        departInfos: [{
                id: 0,
                name: '信息学院'
            },
            {
                id: 1,
                name: '管理学院',
            },
            {
                id: 2,
                name: '教育学院'
            }
        ],
        index: 0,
        departName: "",
        className: "",
        idName: "",
        studentName: "",
        date: '',
        time: '',
        content: ''
    },
    bindDepartPickerChange(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index: e.detail.value,
            departName: this.data.departInfos[e.detail.value].name
        })
    },
    inputClass(e) {
        console.log(e.detail.detail.value)
        this.setData({
            className: e.detail.detail.value
        })
    },

    inputId(e) {
        console.log(e.detail.detail.value)
        this.setData({
            idName: e.detail.detail.value
        })
    },

    inputStudent(e) {
        console.log(e.detail.detail.value)
        this.setData({
            studentName: e.detail.detail.value
        })
    },

    bindDateChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            date: e.detail.value
        })
        this.setData({
            hideAlert: true
        })
    },

    bindTimeChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            time: e.detail.value
        })
        this.setData({
            hideAlert: true
        })
    },

    contentInput(e) {
        console.log(e.detail.detail.value)
        this.setData({
            content: e.detail.detail.value
        })
    },

    handleClick() {
        console.log("注册")
        //1.打开数据库
        const database = wx.cloud.database()
        //2.打开users集合
        const add_leave = database.collection("add_leave")
        //3.插入参数
        add_leave.add({
            data: {
                departName: this.data.departName,
                className: this.data.className,
                idName: this.data.idName,
                studentName: this.data.studentName,
                date: this.data.date,
                time: this.data.time,
                content: this.data.content,
            }
        }).then(res => {
            console.log(res)
            wx.showToast({
                title: '请假上报成功',
                icon: 'success',
                duration: 2000
            })
        }).catch(err => {
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