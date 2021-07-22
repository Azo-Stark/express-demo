const jwt = require('jsonwebtoken')

const { promisify } = require('util')

// 将jwt方法转换Promise
exports.sign = promisify(jwt.sign)

exports.verify = promisify(jwt.verify)

exports.decode = promisify(jwt.decode)
// 生成 jwt 
// const token = jwt.sign({
//     foo: 'bar'
// }, 'nasnannansanx')

// 异步生成token ,效率更高
// jwt.sign({ foo: 'bar' }, 'privateKey',  (err, token) => {
//     if  (err) {
//         console.log('生成token失败')
//     }
//     console.log(token)
//   });

// // 验证 jwt
// const ret = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2MjY0MTk3MDh9.ZwbFTE_Sr8iNIj4aekUOEGH8S0DT3Z2gFcXxfCvHE5s', 'privateKey')

// console.log(ret)