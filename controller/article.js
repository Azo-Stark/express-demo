const { Article, User } = require('../model')

// 加载文章列表
exports.listArticles = async(req,res,next) => {
    try{
        const {limit = 20 , offset = 0, tag, author} = req.query  // 初始化查询的参数
        const filter = {}
        if(tag){
            filter.tagList = tag
        }
        if(author) {
            const user = await User.findOne({username: author})
            filter.author = user ? user._id : null
        }
        const articles = await Article.find()
        const articlesCount = await Article.countDocuments()
        .skip(Number.parseInt(offset))  // 跳过多少条
        .limit(Number.parseInt(limit)) // 取多少条
        .sort({
            craetedAt: -1
        })
        res.status(200).json({
            articles,
            articlesCount
        })
    }catch(err) {
        next(err)
    }
}

exports.feedArticles = async(req,res,next) => {
    try{
        res.send('/articles/feed')
    } catch(err) {
        next(err)
    }
}

exports.createArticle= async(req,res,next) => {
    try{
        // 处理相关请求
        const article = new Article(req.body.article)
        article.author = req.user._id
        article.populate('author').execPopulate()
        await article.save()
        res.send(201).json({
            article
        })
    } catch(err) {
        next(err)
    }
}

exports.getArticle = async(req,res,next) => {
    try{
        const article = await Article.findById(req.params.articleId)
        populate('anthor')
        if(!article) {
            return res.status(404).end()
        }
        res.status.send({
            article
        })
    } catch(err) {
        next(err)
    }
}

exports.updateArticle = async(req,res,next) => {
    try{
        res.send('/articles/:slug')
    }catch(err) {
        next(err)
    }
}

exports.deleteArticle = async(req,res,next) => {
    try{
        res.send('/articles/:slug')
    }catch(err) {
        next(err)
    }
}

exports.addComments = async(req,res,next) => {
    try{
        res.send('/articles/:slug/comments')
    } catch(err) {
        next(err)
    }
}

exports.getComments = async(req,res,next) => {
    try{
        res.send('/articles/:slug/comments')
    } catch(err) {
        next(err)
    }
}

exports.deleteComment = async(req,res,next) => {
    try{
        res.send('/articles/:slug/comments/:id')
    } catch(err) {
        next(err)
    }
}

exports.favoriteArticle = async(req,res,next) => {
    try{
        res.send('/articles/:slug/favorite')
    } catch(err) {
        next(err)
    }
}

exports.unfavoriteArticle = async(req,res,next) => {
    try {
        res.send('/articles/:slug/favorite')
    } catch(err) {
        next(err)
    }
}
