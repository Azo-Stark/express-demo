const mongoose = require("mongoose");
const { connect } = require("../router");
const { dburl } = require('../config/config.default')

// 连接数据库
mongoose.connect(dburl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection

// 连接失败
db.on('error', err => {
    console.log('数据库连接失败');
})

db.once('open', () => {
    console.log('数据库连接成功')
})

// 组织导出数据模型
module.exports = {
    User: mongoose.model('User', require('./user')),
    Article: mongoose.model('Article', require('./article')),
    Profile: mongoose.model('Profile', require('./profile'))
}