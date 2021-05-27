const authController = require('../controller/authController');

const authRoutes = (app, fs) => {

    // LOGIN
    app.post('/login', authController.login);

}



module.exports = authRoutes;