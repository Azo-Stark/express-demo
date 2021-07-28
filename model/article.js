// 用户相关的数据模型
const mongoose = require('mongoose')
const Schema = mongoose.Schema
//导入公共的数据模型
const baseModel = require("./base-model")

const articleSchem = new mongoose.Schema({
    ...baseModel,
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    tagList: {
        type: [String],
        default: null
    },
    favoritesCount: {
        type: Number,
        default: 0
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = articleSchem