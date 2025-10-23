const { Router } = require('express');
const authController = require('../controllers/authController');
const dogController = require('../controllers/dogController');
const { requireAuth, checkUser } = require('../middleware/authMiddleware');

const router = Router()

router.route('/register')
    .get(checkUser, authController.register_get)
    .post(authController.register_post)

router.route('/login')
    .get(checkUser, authController.login_get)
    .post(authController.login_post)

router.route('/logout')
    .get(checkUser, authController.logout_get)

router.route('/register-dog')
    .get(checkUser, requireAuth, dogController.dogs_get)
    .post(checkUser, requireAuth, dogController.dog_post)

router.route('/adoption')
    .get(checkUser, dogController.adoption_get)

module.exports = router
