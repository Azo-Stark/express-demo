const crypto = require('crypto')

// 获取 crypto 支持的散列算法
// console.log(crypto.getHashes())

const ret = crypto.createHash('md5')
      

module.exports = str => { //账号密码通过md5加密
      return ret.update('123' + str)
                .digest('hex')
}