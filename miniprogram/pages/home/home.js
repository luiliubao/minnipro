// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      current: 0,  //当前所在页面的 index

    indicatorDots: true, //是否显示面板指示点

    autoplay: true, //是否自动切换

    interval: 3000, //自动切换时间间隔

    duration: 800, //滑动动画时长

    circular: true, //是否采用衔接滑动

    imgUrls: [

      '../../images/1.png',

      '../../images/2.png',

      '../../images/3.png'

    ],

        menus: [
            {
            "name": "线上请假",
            "class": "circle-1",
            "url": '../images/alarmclock.png'
          },
          {
            "name": "我的课表",
            "class":"circle-2",
            "url": '../images/briefcase.png'
          },
          {
            "name": "成绩信息",
            "class": "circle-3",
            "url": '../images/grid.png'
          },
          {
            "name": "联系教师",
            "class": "circle-4",
            "url": '../images/notebook.png'
          },
          {
            "name": "上传笔记",
            "class": "circle-5",
            "url": '../images/homework.png'
          },
          {
            "name": "宿舍报修",
            "class": "circle-6",
            "url": '../images/tools.png'
          }
        ]
    },
    //轮播图的切换事件

  swiperChange: function(e) {

    this.setData({

      swiperCurrent: e.detail.current

    })

  },

  //点击指示点切换

  chuangEvent: function(e) {

    this.setData({

      swiperCurrent: e.currentTarget.id

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
        // home.js
        this.getTabBar().setData({
            current: 'home'
        })
        wx.setNavigationBarTitle({
          title: '首页',
        })

    },
    goItem: function (e) {

      let index = e.currentTarget.dataset.item;
      console.log(index);
      if (index == 0) {
        wx.navigateTo({
          url: '../leave/leave',
        })
      }else if (index == 1) {
        wx.navigateTo({
          url: '../schedul/schedul',
        })
      }else if(index==2){
        wx.navigateTo({
          url: '../grade/grade',
        })
      } else if (index == 3) {
        wx.navigateTo({
          url: '../teacher/teacher',
        })
      } else if (index==4){
        wx.navigateTo({
          url: '../note/note',
        })
      }
      else if (index == 5) {
        wx.navigateTo({
          url: '../repair/repair',
        })
      }
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