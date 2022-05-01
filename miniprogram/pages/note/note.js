// pages/note/note.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    handleClick(){
        wx.chooseMessageFile({
          count: 1,
          type:"all"
        }).then(res=>{
            wx.cloud.uploadFile({
                cloudPath:"笔记/"+res.tempFiles[0].name,
                filePath:res.tempFiles[0].path,
            }).then(res=>{
                console.log('上传成功')
                wx.showToast({
                  title: '上传成功',
                  type:'success'
                })
            }).catch(err=>{
                console.log('上传失败')
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