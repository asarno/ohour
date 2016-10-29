const Sequelize = require('sequelize');

	const sequelize = new Sequelize('student', 'anthonysarno1', 'kobe', {
		host: 'localhost',
		dialect: 'postgres'
	});

	var Students = sequelize.define('students', {
		_id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: Sequelize.STRING,
		email: Sequelize.STRING,
		password: Sequelize.STRING,
	})

module.exports = { sequelize, Students };	
