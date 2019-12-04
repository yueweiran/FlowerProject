// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'Yuexiansen',
    age:26,
    students:[
      {id: 120, name: '张三', age: 19 },
      {id: 121, name: '李四', age: 20 },
      {id: 122, name: '王五', age: 18 },
      {id: 123, name: '赵六', age: 19 }
    ],
    counter:0
  },
  handleJiaBtnClick(){
    this.setData({
      counter:this.data.counter+1
    })
  },
  handleJianBtnClick(){
    if(this.data.counter>0){
      this.setData({
        counter: this.data.counter - 1
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