// pages/grade/grade.js

Page({

    /**
     * 页面的初始数据
     */
    data: {
        gradeInfos: [{
                id: 0,
                name: '高数'
            },
            {
                id: 1,
                name: '密码学',
            },
            {
                id: 2,
                name: '英语'
            }
        ],
        index: 0,
        gradeName: "",
        value2: "",
        add_leavedatas: []
    },

    bindGradePickerChange(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index: e.detail.value,
            gradeName: this.data.gradeInfos[e.detail.value].name
        })
    },

    inputID(e) {
        console.log(e.detail.detail.value)
        this.setData({
            value2: e.detail.detail.value
        })
    },

    handleClick() {
        switch(this.data.gradeName){
            case "高数":
                {
                    const db = wx.cloud.database()
                    const findData = db.collection('math')
                    findData.where({
                        id: this.data.value2
                    }).get().then(res => {
                        console.log(res.data)
                        this.setData({
                            add_leavedatas: res.data
                        })
                    }).catch(err => {
                        console.log(err)
                    })
                };
                break;
                case "英语":{
                    const db = wx.cloud.database()
                    const findData = db.collection('english')
                    findData.where({
                        id: this.data.value2
                    }).get().then(res => {
                        console.log(res.data)
                        this.setData({
                            add_leavedatas: res.data
                        })
                    }).catch(err => {
                        console.log(err)
                    })
                };
                break;
                case "密码学":{
                    const db = wx.cloud.database()
                    const findData = db.collection('cryptology')
                    findData.where({
                        id: this.data.value2
                    }).get().then(res => {
                        console.log(res.data)
                        this.setData({
                            add_leavedatas: res.data
                        })
                    }).catch(err => {
                        console.log(err)
                    })
                };

        }

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

    },
})