// pages/forum/forum.js
const { $Toast } = require('../../dist/base/index');
const db = wx.cloud.database()
const couple = db.collection("couple")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        value0:"",
        value1:"",
        coupledatas:[]
    },
    inputTitle(e){
        console.log(e.detail.detail.value)
        this.setData({
            value0:e.detail.detail.value
        })
    },
    inputCommon(e){
        console.log(e.detail.detail.value)
        this.setData({
            value1:e.detail.detail.value
        })
    },
    handleClick(){
        
        couple.add({
            data: {
                title:this.data.value0,
                common:this.data.value1
            }
        }).then(res => {
            console.log(res)
            wx.showToast({
                title: '记录成功',
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
        this.getalldata()
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
        this.getTabBar().setData({
            current: 'forum'
        })

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
        this.getalldata()

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
    getalldata(){
        couple.get().then(res=>{
          console.log(res.data)
          $Toast({
            content: '加载中',
            type: 'loading'
        });
          this.setData({
            coupledatas:res.data
          })
        }).catch(err=>{
          $Toast({
            content: '错误的提示',
            type: 'error'
        });
        })
      }
})