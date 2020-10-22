const express = require('express');
const { protect, restrictTo } = require('./../controllers/authController');
const {
	getCheckoutSession,
	getAllBooking,
	createBooking,
	getBooking,
	updateBooking,
	deleteBooking,
} = require('./../controllers/bookingController');

const router = express.Router({ mergeParams: true });

router.use(protect);
router.get('/checkout-session/:tourID', protect, getCheckoutSession);

router.use(restrictTo('admin', 'lead-guide'));
router
	.route('/')
	.get(getAllBooking)
	.post(createBooking);

router
	.route('/:id')
	.get(getBooking)
	.patch(updateBooking)
	.delete(deleteBooking);

module.exports = router;
