
module.exports = function (app) {


    /**
     * Router Initialisation and Use.
     */
    let index = require('../routes/indexRoute'),
        login = require('../routes/loginRoute');
     
    app.use('/', index);
    app.use('/login' || '/register', login);
    

    // API access
    let loginApi = require('../api/loginApi'),
        usersApi = require('../api/usersApi')
    
    app.use('/api/login', loginApi);
    app.use('/api/users', usersApi);

}