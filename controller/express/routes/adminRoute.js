let router = require('express').Router(),
    pagesManager = require("../plugins/PagesManager")("admin");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('adminView', { 
    title: 'Admin', 
    links: pagesManager.links,
    scripts: pagesManager.scripts
  });

});

module.exports = router;
