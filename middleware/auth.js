const { verify } = require('../util/jwt')
const {jwtSecret} = require('../config/config.default')
const {User} = require('../model')

module.exports = async (req,res, next) => {
    // 从请求头中获取token
    // console.log(req.headers)
    let token = req.headers.authorization
    // console.log(token)
    token = token ? token.split('Bearer ')[1] : null // 判断Token是否存在
    //console.log(token)
    if(!token) {
        return res.status(401).end()
    }

    try{
        const  decodeToken = await verify(token, jwtSecret)
        console.log(decodeToken.userId)
        req.user = await User.findById(decodeToken.userId)
        // console.log(user)
        next()
    } catch(err) {
        return res.status(401).json({
            error:err 
        })
    }
    // 验证Token是否有效
    // Token 无效 返回401
    // 有效： 把请求对象挂载到header上, 通过进入下一个中间件
}