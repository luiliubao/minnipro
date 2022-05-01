// pages/repair/repair.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        message: '',
        applicantName: "",
        address: "",
        description: "",
        remarks: "",
        typeId: "1",
        typeName: "设备报修",
        types: [{
            "id": "1",
            "name": "设备报修"
        }, {
            "id": "2",
            "name": "总务报修"
        }],
        classId: ""

    },
    getApplicantId(e) {
        console.log(e.detail.detail.value)
        this.setData({
            classId: e.detail.detail.value
        })
    },
    getApplicantName(e) {
        console.log(e.detail.detail.value)
        this.setData({
            applicantName: e.detail.detail.value
        })
    },
    bindTypePickerChange(e) {
        console.log(e.detail.value)
        this.setData({
            typeName: this.data.types[e.detail.value].name
        })
    },
    getAddress(e) {
        console.log(e.detail.detail.value)
        this.setData({
            address: e.detail.detail.value
        })
    },
    getDescription(e) {
        console.log(e.detail.detail.value)
        this.setData({
            description: e.detail.detail.value
        })
    },
    getRemarks(e) {
        console.log(e.detail.detail.value)
        this.setData({
            remarks: e.detail.detail.value
        })
    },
    handleClick() {
        console.log("注册")
        //1.打开数据库
        const database = wx.cloud.database()
        //2.打开users集合
        const add_repair = database.collection("add_repair")
        //3.插入参数
        add_repair.add({
            data: {
                applicantName: this.data.applicantName,
                classId: this.data.classId,
                typeName: this.data.typeName,
                address: this.data.address,
                description: this.data.description,
                remarks: this.data.remarks
            }
        }).then(res => {
            console.log(res)
            wx.showToast({
                title: '上报成功',
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