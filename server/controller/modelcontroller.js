'use strict';
const studentModel = require('../model/studentmodel');
const bodyParser = require('body-parser');
// const jsonParser = bodyParser.json();
let obj = {
	name: 'sooeunglee',
	email: 'dfd',
	password: '1234'
}
const add = (req, res, next) => {		
		studentModel.sequelize.sync({ force: true }).then(() => {
			// studentModel.student.create(obj);
			return studentModel.Students.create(obj)
		});
	}

module.exports = add;

//sequelize isn't defined
//headers aren't set

