// 用户相关的数据模型
const mongoose = require('mongoose')

//导入公共的数据模型
const baseModel = require("./base-model")

const articleSchem = new mongoose.Schema({
    ...baseModel,
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
        required: true
    },
    bio: {
        type: String,
        default: null
    },
    image: {
        type: String,
        default: null
    },
  
})

module.exports = articleSchem