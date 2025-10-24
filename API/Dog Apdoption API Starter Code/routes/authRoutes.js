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
    .post(requireAuth, dogController.dog_post)

router.route('/adoption')
    .get(checkUser, dogController.adoption_get)

router.route('/dogs/:id')
    .get(checkUser, dogController.dog_details)
    .delete(checkUser, dogController.dog_delete)
    .patch(checkUser, requireAuth, dogController.dog_patch)

router.route('/dogs/thanks/:id')
    .get(checkUser, requireAuth, dogController.dog_thanks)
    .patch(checkUser, requireAuth, dogController.send_thanks)

router.route('/user/:id')
    .get(checkUser, requireAuth, authController.user_details)

module.exports = router
