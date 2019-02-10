let router = require('express').Router(),
    pagesManager = require("../plugins/PagesManager")("index");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('indexView', { 
    title: 'Index', 
    links: pagesManager.links,
    scripts: pagesManager.scripts
  });

});

module.exports = router;
