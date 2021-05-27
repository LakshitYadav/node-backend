// import other routes
const userRoutes = require('./users');
const authRoutes = require('./auth');
const authController = require('../controller/authController');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    authRoutes(app, fs);

    // app.use('/', (req, res, next) => {
    //     authController.authenticateToken(req, res, next);
    // });

    userRoutes(app, fs);

};

module.exports = appRouter;