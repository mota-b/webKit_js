let router = require('express').Router(),
    pagesManager = require("../plugins/PagesManager")("login");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('loginViews/loginView', { 
    title: 'Login', 
    links: pagesManager.links,
    scripts: pagesManager.scripts
  });

});

module.exports = router;
