let router = require('express').Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('loginView', {
    title: 'Login', 
    links: [
      "https://use.fontawesome.com/releases/v5.7.0/css/all.css", // Font Awesome
      "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/css/bootstrap.min.css", // Bootstrap Core
      "https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.1/css/mdb.min.css", // Material Design Bootstrap 
      "/css/indexStyle.css" // Custom css of the route
    ],
    scripts: [
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js", // jQuery
      "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js", // Bootstrap tooltips
      "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/js/bootstrap.min.js", // Bootstrap Core
      "https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.1/js/mdb.min.js", // Material Design Bootstrap JS 
      "/js/indexScript.js" // Custom javascripts of the route
    ] 
  });
});

module.exports = router;
