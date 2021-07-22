//
exports.getProfile = async(req,res,next) => {
    try {
        res.send('get/profiles/:username')
    }catch(err){
        next(err)
    }
}

exports.followUser = async(req,res,next) => {
    try{
        res.send('/profiles/:username/follow')
    } catch(err) {
        err
    }
}

exports.unfollowUser = async(req,res,next) => {
    try{
        res.send('/profiles/:username/follow')
    } catch(err) {
        next(err)
    }
}