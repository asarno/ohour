const Sequelize = require('sequelize');

const sequelize = new Sequelize('student', 'sooeunglee', '1234', {
	host: 'localhost',
	dialect: 'postgres'
});

let Students = sequelize.define('students', {
	_id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: Sequelize.STRING,
	email: Sequelize.STRING,
	password: Sequelize.STRING,
});

export {Students, sequelize}
