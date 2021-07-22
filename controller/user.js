// 用户相关接口
const { User } = require('../model');
const  jwt  = require('../util/jwt')
const { jwtSecret }  = require('../config/config.default')
exports.login = async (req, res, next) => {
  try {
    const user = req.user.toJSON()
    delete user.password
    // 生成token
    const token = await jwt.sign({
      userId : user._id
    }, jwtSecret, {
      expiresIn: 60
    })
    res.status(200).json({
      ...user,
      token
    });
  } catch (err) {
    next(err);
  }
};

// 用户注册
exports.register = async (req, res, next) => {
  try {
    let user = new User(req.body.user)  
    // 保存到数据库
    await user.save()

    // delete user.password 这种做法每个接口都要写， 直接在数据模型中通过select 选项来控制密码不被返回
    
     user = user.toJSON() // 把moogose数据类型钻换成json对象
     delete user.password
    res.status(201).json({
        user
    })
  } catch (err) {
    next(err);
  }
};

// 获取当前用户
exports.getCurrentUser = async (req, res, next) => {
  try {
    res.status(200).json({
      user: req.user
    })
  } catch (err) {
    next(err);
  }
};

// 修改用户信息
exports.updateUser = async (req, res, next) => {
  try {
    res.send("put/user");
  } catch (err) {
    next(err);
  }
};
