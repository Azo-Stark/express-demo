// 文章相关
const express = require('express')
// const { router } = require('./profile')
const router = express()
const atricleCtrl = require('../controller/article')
const auth = require('../middleware/auth')
const articleValidator = require('../vildator/article')

router.get('/', atricleCtrl.listArticles)

router.get('/feed', atricleCtrl.feedArticles)

// 创建文章
router.post('/', auth, articleValidator.createArticle, atricleCtrl.createArticle)
// 获取文章
router.get('/:articleId', atricleCtrl.getArticle)


// 更新文章
router.put('/:articleId',atricleCtrl.updateArticle)

// 删除文章
router.delete('/:articleId', atricleCtrl.deleteArticle)


// 发布评论
router.post('/:articleId/comments',atricleCtrl.addComments)

// 获取评论
router.get('/:articleId/comments',atricleCtrl.getComments)

// 删除评论
router.delete('/:articleId/comments/:id',atricleCtrl.deleteComment)

// 点赞品论
router.post('/:articleId/favorite',atricleCtrl.favoriteArticle)

// 取消点赞
router.delete('/:articleId/favorite',atricleCtrl.unfavoriteArticle)

module.exports = router