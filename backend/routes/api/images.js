const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { singleMulterUpload, singlePublicFileUpload } = require('../../awsS3');

const { Listing } = require('../../db/models');
const { Image } = require('../../db/models');

const router = express.Router();


// ------------------- Get all images ------------------- //
router.get('/', asyncHandler(async (_req, res) => {
    const images = await Image.findAll();

    return res.json(images);
}));


// ------------------- Get all images for a listing route ------------------- //
router.get('/:id/images', asyncHandler(async (req, res) => {
    const listingId = req.params.id;

    if (!listingId) {throw new Error ('Unable to find images.')};

    const images = await Image.findAll({ where: { listingId: listingId }});

    return res.json(images);
}));


// ------------------- Create image for a listing route ------------------- //
router.post('/:id/images/create', singleMulterUpload("image"), asyncHandler(async (req, res) => {
    const { listingId } = req.body;

    const url = await singlePublicFileUpload(req.file);

    const image = await Image.create({ listingId, url });

    return res.json({ image });
}));


// // ------------------- Update image for a listing route ------------------- //
// router.put("/:id", validateImage, asyncHandler(async function (req, res) {
//     const item = await ItemsRepository.updateItem(req.body);
//     return res.json(item);
//   })
// );


// // ------------------- Delete image for a listing route ------------------- //
// router.delete("/:id", asyncHandler(async function (req, res) {
//   const itemId = await ItemsRepository.deleteItem(req.params.id);
//   return res.json({ itemId });
// }));


module.exports = router;
