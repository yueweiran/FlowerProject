App({
  //设置全局变量
globalData:{
  name: "马静云",
  age: 18
},

//这些都是生命周期函数
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //获取用户信息，该方法以后可能会丢弃
    wx.getUserInfo({
      success:function(res){
         // console.info(res)
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    //判断小程序的进入场景
    switch(options.scene){
    case 1001:
    break;
    }
    console.info(options);
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
