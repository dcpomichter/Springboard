const { Router } = require('express');
const authController = require('../controllers/authController');
const dogController = require('../controllers/dogController');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const router = Router()

router.route('/register')
    .get(authController.register_get)
    .post(authController.register_post)

router.route('/login')
    .get(authController.login_get)
    .post(authController.login_post)

router.route('/logout')
    .get(authController.logout_get)

router.route('/register-dog')
    .get(requireAuth, dogController.dogs_get)
    .post(requireAuth, dogController.dog_post)

module.exports = router
