const express = require("express");
const asyncHandler = require("express-async-handler");

const { check } = require("express-validator");
const { handleValidationErrors } = require('../../utils/validation');



const router = express.Router();

const validateImage = [
    check('url')
        .exists({ checkFalsy: true })
        .isURL()
        .withMessage('Please provide a valid https URL.'),
    handleValidationErrors
];

router.put(
  "/:id",
  itemValidations.validateUpdate,
  asyncHandler(async function (req, res) {
    const item = await ItemsRepository.updateItem(req.body);
    return res.json(item);
  })
);

router.delete("/:id", asyncHandler(async function (req, res) {
  const itemId = await ItemsRepository.deleteItem(req.params.id);
  return res.json({ itemId });
}));

module.exports = router;
