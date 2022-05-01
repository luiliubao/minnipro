// pages/schedul/schedul.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        value2:"",
        imagePath:""
    },

    inputID(e){
        console.log(e.detail.detail.value)
        this.setData({
            value2:e.detail.detail.value
        })
    },
    handleClick(){
        if(this.data.value2>=17000&&this.data.value2<18000){
            wx.cloud.downloadFile({
                fileID:'cloud://test-9g24cij424cc850c.7465-test-9g24cij424cc850c-1253649112/课表/1.jpeg'
            }).then(res=>{
                console.log(res)
                this.setData({
                    imagePath:res.tempFilePath
                })
            }).catch(err=>{
                console.log(err)
            })
        }
        else if(this.data.value2>=18000&&this.data.value2<19000){
            wx.cloud.downloadFile({
                fileID:'cloud://test-9g24cij424cc850c.7465-test-9g24cij424cc850c-1253649112/课表/3.png'
            }).then(res=>{
                console.log(res)
                this.setData({
                    imagePath:res.tempFilePath
                })
            }).catch(err=>{
                console.log(err)
            })
        }
        else if(this.data.value2==""){
            wx.showToast({
              title: '学号不能为空！！！',
              icon:"error"
            })
        }
        else {
            wx.cloud.downloadFile({
                fileID:'cloud://test-9g24cij424cc850c.7465-test-9g24cij424cc850c-1253649112/课表/2.jpeg'
            }).then(res=>{
                console.log(res)
                this.setData({
                    imagePath:res.tempFilePath
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