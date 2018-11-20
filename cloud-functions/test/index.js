// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  const db = wx.cloud.database();

  db.collection('user').where({
	  id:1
  }).then(res=>{
	  return {
		  event,
		  openid: wxContext.OPENID,
		  appid: wxContext.APPID,
		  unionid: wxContext.UNIONID,
		  res
	  }
  })

  
}