// 文章相关
const express = require('express')
// const { router } = require('./profile')
const router = express()
const atricleCtrl = require('../controller/article')


router.get('/', atricleCtrl.listArticles)

router.get('/feed', atricleCtrl.feedArticles)

// 获取文章
router.get('/:slug', atricleCtrl.getArticle)


// 更新文章
router.put('/:slug',atricleCtrl.updateArticle)

// 删除文章
router.delete('/:slug', atricleCtrl.deleteArticle)


// 发布评论
router.post('/:slug/comments',atricleCtrl.addComments)

// 获取评论
router.get('/:slug/comments',atricleCtrl.getComments)

// 删除评论
router.delete('/:slug/comments/:id',atricleCtrl.deleteComment)

// 点赞品论
router.post('/:slug/favorite',atricleCtrl.favoriteArticle)

// 取消点赞
router.delete('/:slug/favorite',atricleCtrl.unfavoriteArticle)

module.exports = router