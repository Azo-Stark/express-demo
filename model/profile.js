// 用户相关的数据模型
const mongoose = require('mongoose')

// 公共的数据模型
const baseModel = require('./base-model')

const profileSchem = new mongoose.Schema({
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
    }
})

module.exports = profileSchem