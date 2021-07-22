const express = require("express");
const router = express();
const userCtrl = require("../controller/user");
const userValidator = require('../vildator/user')
const auth = require('../middleware/auth')


// 用户登陆
router.post("/users/login", userValidator.login, userCtrl.login);

// 用户注册
router.post("/users", userValidator.register, userCtrl.register);

// 获取当前用户
router.get("/user", auth, userCtrl.getCurrentUser);

// 修改用户
router.put("/user", userCtrl.updateUser);

module.exports = router;
