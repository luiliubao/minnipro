Component({
    data: {
        //当前页索引
        current: 'homepage',
        list: [{
                pagePath: "/pages/home/home",
                text: "首页",
                status:'home',
                iconPath: 'homepage',
                selectedIconPath: 'homepage_fill',
            },
            {
                pagePath: "/pages/forum/forum",
                text: "伴侣",
                status:'forum',
                iconPath: 'group',
                selectedIconPath: 'group_fill'
            },
            {
                pagePath: "/pages/consult/consult",
                text: "联系",
                status:'consult',
                iconPath: 'mine',
                selectedIconPath: 'mine_fill'
            }
        ]

    },
    methods: {
        handleChange ({ detail }) {
            console.log(detail)
            this.setData({
                current: detail.key
            }),
            wx.switchTab({
              url: '/pages'+'/'+detail.key+'/'+detail.key,
            })
        }
        //小程序切换页面

    }
})