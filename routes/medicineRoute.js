const express = require('express');
const authController = require('./../controller/authController');
const medicineController = require('./../controller/medicineController');

const router = express.Router();

router.post(
  '/addMedicine',
  authController.protect,
  authController.restrictTo('son'),
  medicineController.addMedicine
);
router.patch(
  '/updateMedicine/:id',
  authController.protect,
  authController.restrictTo('son'),
  medicineController.updateMedicine
);
router.delete(
  '/deleteMedicine/:id',
  authController.protect,
  authController.restrictTo('son'),
  medicineController.deleteMedicine
);
router.get(
  '/getAllMedicines',
  authController.protect,
  medicineController.getAllMedicines
);

router.get(
  '/getParentMedicines',
  authController.protect,
  medicineController.getParentMedicines
);

router.get(
  '/getSonMedicines',
  authController.protect,
  medicineController.getSonMedicines
);

module.exports = router;
