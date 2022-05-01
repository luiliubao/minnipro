// pages/addGrade/addGrade.js
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
        value3: ""
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

    inputGrade(e) {
        console.log(e.detail.detail.value)
        this.setData({
            value3: e.detail.detail.value
        })
    },

    handleClick() {
        const db = wx.cloud.database()
        if (this.data.gradeName == '高数') {
            const math = db.collection("math")
            math.add({
                data:{
                    id:this.data.value2,
                    grade:this.data.value3
                }
            }).then(res=>{
                console.log(res)
                wx.showToast({
                  title: '录入成功',
                  icon: 'success'
                })
            }).catch(err=>{
                console.log(err)
            })
        }else if(this.data.gradeName == '英语') {
            const math = db.collection("english")
            math.add({
                data:{
                    id:this.data.value2,
                    grade:this.data.value3
                }
            }).then(res=>{
                console.log(res)
                wx.showToast({
                  title: '录入成功',
                  icon: 'success'
                })
            }).catch(err=>{
                console.log(err)
            })
        }else if(this.data.gradeName == '密码学') {
            const math = db.collection("cryptology")
            math.add({
                data:{
                    id:this.data.value2,
                    grade:this.data.value3
                }
            }).then(res=>{
                console.log(res)
                wx.showToast({
                  title: '录入成功',
                  icon: 'success'
                })
            }).catch(err=>{
                console.log(err)
            })
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

    }
})