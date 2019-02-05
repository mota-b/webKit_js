
module.exports = function (app) {


    /**
     * Router Initialisation and Use.
     */
    let index = require('../routes/indexRoute');
        login = require('../routes/loginRoute');
     
    app.use('/', index);
    app.use('/login' || '/register', login);
    

    // API access
    //var api = require('../routes/apiRoutes/api_balancer');
    //app.use('/api', api);

}