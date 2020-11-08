const mongoose = require('mongoose');

const CaseSchema = new mongoose.Schema({
	number: {
		type: String,
		required: [true, "Case number is required"],
	},
	title: {
		type: String,
		required: [true, "Case title is required"],
	},
});

module.exports = Case = mongoose.model('case', CaseSchema);