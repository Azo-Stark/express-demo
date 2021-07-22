// 加载文章列表
exports.listArticles = async(req,res,next) => {
    try{
        res.send('/articles')
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


exports.getArticle = async(req,res,next) => {
    try{
        res.send('/articles/:slug')
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
