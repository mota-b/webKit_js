/**
 * Module dependencies.
 */
let passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

module.exports = function(app){

    /**
     * Passport Config
     */    
    app.use(passport.initialize()); // init the passport elements in the Req (as req._passport.instance)
    app.use(passport.session()); // bind the passport session with express session (only 1 session here)

    // prepare the user object in the session 
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    // get the user object from the session {data} 
    passport.deserializeUser((userPassport, done) => {
        
        var userSession = {
            '_id': userPassport._id,
            'email': userPassport.email,
            'username': userPassport.username,
            'isVerified': userPassport.isVerified,
            'isActivated': userPassport.isActivated,
            'type': userPassport.type
        }

        userSession.token = User.generateJWT(userSession);

        done(null, userSession);
    }); 

    // Global user to EJS
    app.use(function(req, res, next){
        res.locals.user = req.user 
        next();
    })
}