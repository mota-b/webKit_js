let router = require('express').Router(),
    passport = require("passport")
    User = require("../../../model/userModel")


// Create
router.post("/", (req, res, next) => {

})

// Read List
router.get("/", passport.authenticate('jwt', {session:false}), (req, res, next) => {
    // Return Users list
    User.find({}, (err, users) => {
        if (users){
            let data = [];
            users.forEach( (user) => {
                data.push({
                    _id: user._id,
                    username: user.username,
                    email: user.email    
                })
            });

            res.json(data)
        }
    })
})

// Read One
router.get("/:id", (req, res, next) => {
    let id = req.params['id']
    if(req.params && id){
        User.findById(id, (err, user) => {
            if(user){
                res.json(user)
            }
        })
    }else{console.log(req.params & id);
    }
    
})
    
// Update
router.put("/:id", (req, res, next) => {
    
})

// Delete
router.delete("/", (req, res, next) => {

})
  

module.exports = router