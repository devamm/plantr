const {db, Gardener, Plot, Vegetable} = require('./models');

db.sync({force: true}).then( ()=> {
		console.log("connected to database");
		
		var veg1 = Vegetable.build({
			name: 'Carrot',
			color: 'Orange',
			planted_on:'2016-06-23' 
		});

		var veg2 = Vegetable.build({
			name: 'Cucumber',
			color: 'Green',
			planted_on:'2016-06-23' 
		});

		var veg3 = Vegetable.build({
			name: 'Turnip',
			color: 'Red',
			planted_on:'2016-06-23' 
		});

		let promise = Promise.all([veg1, veg2, veg3]).then(()=> {
			//console.log(veg1);
			//console.log("-------");
			//console.log(veg2);
			//console.log("-------");
			//console.log(veg3);
			promise.create();
			console.log('planted');

		}).catch(()=>{
			console.log('could not plant');
		});

	//console.log(veg1);

		db.close();
	}).catch( () =>{
		console.log("could not connect");
		db.close();
	});

//db.close();
