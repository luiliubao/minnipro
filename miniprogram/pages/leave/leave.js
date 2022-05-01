// pages/leave/leave.js
const { $Toast } = require('../../dist/base/index');
const db = wx.cloud.database()
const add_leave = db.collection("add_leave")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        nameinfo:"",
        state:"详情",
        add_leavedatas:[]
    },
    handleChange:function(e){
        wx.navigateTo({
          url: '../addLeave/addLeave',
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
      add_leave.get().then(res=>{
        console.log(res.data)
        $Toast({
          content: '加载中',
          type: 'loading'
      });
        this.setData({
          add_leavedatas:res.data
        })
      }).catch(err=>{
        $Toast({
          content: '错误的提示',
          type: 'error'
      });
      })
    }
})