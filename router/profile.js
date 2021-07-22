const express = require('express')

const router = express()
const profileCtrl = require('../controller/profile')

//获取个人资料
router.get('/:username', profileCtrl.getProfile)

// 关注用户
router.post('/:username/follow',profileCtrl.followUser)

// 取消关注
router.delete('/:username/follow',profileCtrl.unfollowUser)



module.exports = router