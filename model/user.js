// 用户相关的数据模型
const mongoose = require('mongoose')
const md5 = require('../util/md5')

const userSchem = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        set: v => md5(v), // 把密码进行md5加密存储起来
        select: false  // 默认不会返回密码字段
    },
    bio: {
        type: String,
        default: null
    },
    image: {
        type: String,
        default: null
    },
    createAt: {
        type: Date,
        dafult: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = userSchem