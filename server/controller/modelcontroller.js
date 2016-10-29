import {Students, sequelize} from './server/model/studentmodel';
const bodyParser = require('body-parser');
// const jsonParser = bodyParser.json();

const add = (req, res) => {
	let obj = {
		name: "Anthony",
		email: "asarno",
		password: "yup"
	}
	sequelize.sync({force: true}).then(() => {
		return Students.create(obj);
	})
}

export default
