const Sequelize = require("sequelize");
const db = new Sequelize('postgres://localhost:5432/plantr', {
	logging: false
});


const Gardener = db.define('gardeners', {
	name: {
		type: Sequelize.STRING
	},
	age: {
		type: Sequelize.INTEGER
	}
});


const Plot = db.define('plots', {
	size: {
		type: Sequelize.INTEGER
	},
	shaded: {
		type: Sequelize.BOOLEAN
	}
});


const Vegetable = db.define('vegetables', {
	name: {
		type: Sequelize.STRING
	},
	color: {
		type: Sequelize.STRING
	},
	planted_on: {
		type: Sequelize.DATE
	}
});


Plot.belongsTo(Gardener);

Vegetable.belongsToMany(Plot, {through: 'planted'});
Plot.belongsToMany(Vegetable, {through: 'planted'});

Gardener.belongsTo(Vegetable, {as: 'fav_vegetable'});


module.exports = {db, Gardener, Plot, Vegetable};