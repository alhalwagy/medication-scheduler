const express = require('express');
const authController = require('./../controller/authController');
const userController = require('./../controller/userContoller');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.get('/getAllUsers', authController.protect, userController.getAllUsers);

router.post(
  '/createParent',
  authController.protect,
  userController.createParent
);

router.patch(
  '/updatePassword',
  authController.protect,
  authController.updatePassword
);

router.get('/getUserInfo', authController.protect, userController.getUserInfo);

module.exports = router;
