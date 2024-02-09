function secondMiddleware(req,res,next){
    console.log("I am second Middleware")
    next()
}

module.exports = secondMiddleware