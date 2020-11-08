const express = require('express');
const Case = require('../../Models/Case');
const router = express.Router();

// @route   GET api/cases
// @desc    Get all cases
// @access  Public
router.get('/', async (req, res) => {
	try {
		const cases = await Case.find({});

		res.json(cases);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

// @route   POST /api/users
// @desc    Create a user
// @access  Public
router.post('/', async (req, res) => {
	console.log('req.body', req.body);

	const { number, title } = req.body;

	try {
		let _case = new Case({
			number,
			title,
		});
		await _case.save();
		const cases = await Case.find({});

		res.json(cases);
	} catch (error) {
		console.error('Error', error.message);
		res.status(500).send('Server error');
	}
});

// @route   DELTE /api/cases/:id
// @desc    Delete a case
// @access  Public
router.delete('/:id', async (req, res) => {
	try {
		const _case = await Case.findById(req.params.id);

		if (!_case) {
			return res.status(404).json({ msg: 'Case not found' });
		}

		await _case.remove();

		res.json({ msg: 'Case deleted successfully' });
	} catch (error) {
		console.error('Error', error.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;