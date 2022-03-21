const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { singleMulterUpload, singlePublicFileUpload } = require('../../awsS3');

const { Listing } = require('../../db/models');
const { Image } = require('../../db/models');

const router = express.Router();


// ------------------- Validating signup request body ------------------- //
// Checks + validates keys (username, email, password)
const validateListing = [
    check('address')
        .exists({ checkFalsy: true })
        .isLength({ min: 5, max: 100 })
        .withMessage('Please provide a valid address with at least 5 characters.'),
    check('city')
        .exists({ checkFalsy: true })
        .isLength({ min: 3, max: 50 })
        .withMessage('Please provide a valid city with at least 3 characters.'),
    check('state')
        .exists({ checkFalsy: true })
        .isLength({ min: 2, max: 50 })
        .withMessage('Please provide a valid state with at least 2 characters.'),
    check('country')
        .exists({ checkFalsy: true })
        .isLength({ min: 2, max: 50 })
        .withMessage('Please provide a valid country with at least 2 characters.'),
    check('lat')
        .optional({ checkFalsy: true })
        .isDecimal({ min: -90, max: 90 })
        .isLength({ min: 2 })
        .withMessage('Please provide a decimal latitude between -90 and 90 degrees.'),
    check('lng')
        .optional({ checkFalsy: true })
        .isDecimal({ min: -180, max: 180 })
        .isLength({ min: 2 })
        .withMessage('Please provide a decimal longitude between -180 and 180 degrees.'),
    check('name')
        .exists({ checkFalsy: true })
        .isLength({ min: 5, max: 50 })
        .withMessage('Please provide a listing name between 5 - 50 characters.'),
    check('description')
        .exists({ checkFalsy: true })
        .isLength({ min: 25 })
        .withMessage('Please provide a listing description at least 25 characters long.'),
    check('price')
        .exists({ checkFalsy: true })
        .isInt()
        .withMessage('Price must be a whole number value.'),
    handleValidationErrors,
];

const validateImage = [
    check('url')
        .exists({ checkFalsy: true })
        .isURL()
        .withMessage('Please provide a valid https URL.'),
    handleValidationErrors,
];


// ------------------- Get all listings route ------------------- //
router.get('/', asyncHandler(async (_req, res) => {
    const listings = await Listing.findAll({order: [['createdAt', 'DESC']]});

    return res.json(listings);
}));


// ------------------- Get one listing route ------------------- //
router.get('/:id', asyncHandler(async (req, res) => {
    // const listingId = await Listing.findByPk(req.params.id)
    // const listing = await Listing.one(listingId);

    const listing = await Listing.findByPk(req.params.id);
    return res.json(listing);
}));


// ------------------- Create listing route ------------------- //
router.post('/', validateListing, asyncHandler(async (req, res) => {
    const { userId, address, city, state, country, lat, lng, name, description, price } = req.body;

    const listing = await Listing.create({
        userId, address, city, state, country, lat, lng, name, description, price
    });

    return res.json(listing);
}));


// ------------------- Update listing route ------------------- //
router.put('/:id', validateListing, asyncHandler(async (req, res) => {
    const listing = await Listing.findByPk(req.params.id);

    const { userId, address, city, state, country, lat, lng, name, description, price } = req.body;

    if (listing) {
        await listing.update({
            userId, address, city, state, country, lat, lng, name, description, price
        });
    } else {
        throw new Error('Unable to update listing.')
    };

    const newListing = await Listing.findByPk(req.params.id);
    return res.json(newListing);
}));


// ------------------- Delete listing route ------------------- //
router.delete("/:id", asyncHandler(async (req, res) => {
    const listing = await Listing.findByPk(req.params.id);

    if (!listing) {throw new Error ('Unable to delete listing.')};

    await listing.destroy();
    return res.json(listing);
}));


// // ------------------- Get all images for a listing route ------------------- //
// router.get('/:id/images', asyncHandler(async (req, res) => {
//     const listingId = await Listing.findByPk(req.params.id);

//     if (!listingId) {throw new Error ('Unable to find images.')};

//     const images = await Image.findAll({ where: { listingId }})

//     return res.json(images);
// }));


// ------------------- Create image for a listing route ------------------- //
router.post('/:id/images', singleMulterUpload("image"), validateImage, asyncHandler(async (req, res) => {
    const { listingId } = req.body;
    const imageUrl = await singlePublicFileUpload(req.file);

    const image = await Image.create({ listingId, imageUrl });

    return res.json({ image });
}));


module.exports = router;
