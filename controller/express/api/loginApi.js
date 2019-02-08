let router = require('express').Router(),
    passport = require("passport")

// Register
router.post("/reg", (req, res, next) => {    
})


// Login
router.post("/log/local", function(req, res, next){  

    
    let {strat_number} = req.body,
        strategies = ['local']
    if (strategies[strat_number]) {
        passport.authenticate( strategies[strat_number], (err, data, info) => {
            // This is the result authentication callback
            console.log("authenticate Result");
            
            //Verify if The authentification has succeded
            if(data){
                //console.log(data);
                
                res.json(data)
            }else{
                res.json({error : info})
            }
        })(req, res, next)    
    }else{
        res.json({error : {message: "not a valid strategie"}})
    }
})

    
module.exports = router
  