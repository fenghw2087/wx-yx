// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  const db = cloud.database();

  db.collection('user').where({
	  id:1
  }).get().then(res=>{
	  return {
		  id:1
	  }
  })

  
}