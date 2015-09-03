function BaseCar(){};
BaseCar.prototype = {
	constructor: BaseCar,
	start: function(){
		console.log("----------------start!----------------");
	},
	run:function(){
		console.log('-----------------run!-----------------');
	}
}

function Benz(){};
Benz.prototype = {
	constructor: Benz,
	derivceBenz: function(){
		console.log("--------------derivceBenz!----------");
	}
}

ninico.extend(Benz,BaseCar);

function Bmw(){};
Bmw.prototype = {
	constructor: Benz,
	derivceBmw: function(){
		console.log("--------------derivceBmw!----------");
	}
}

ninico.extend(Bmw,BaseCar);

function Audi(){};
Audi.prototype = {
	constructor: Audi,
	derivceAudi: function(){
		console.log("--------------derivceAudi!----------");
	}
}

ninico.extend(Audi,BaseCar);


var carInterface = new ninico.Interface('carInterface',['start','run']);

function Carshop(){

}

Carshop.prototype = {
	constructor: Carshop,
	sellcar: function(type){
		//do some thing
		//
		//
		
		var car = Carfactory.createCar(type);
		return car;
	}
}


var Carfactory = {
	createCar: function(type){
		var car = null;
		switch(type){
			case 'Benz': car = new Benz();break;
			case 'Bmw': car = new Bmw();break;
			case 'Audi': car = new Audi();break;
		}

		ninico.Interface.ensureImplement(car,carInterface);

		return car;
	}
}



var carshop = new Carshop();

console.log(carshop.sellcar('Benz'));