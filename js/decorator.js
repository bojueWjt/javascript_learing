//装饰者模式
// 在保证不破坏原有对象的基础上，扩展方法和属性
//

//定义car对象应实现的接口
var CarInterface = new ninico.Interface('CarInterface',['getPrice','action']);

var Car = function(car){
	this.car = car;

	//验证接口方法是否实现
	ninico.Interface.ensureImplement(this,CarInterface);
}

Car.prototype = {
	constructor: Car,
	getPrice: function(){
		return 21110;
	},
	action: function(){
		document.write('ninico runing!');
	}
}

var newbl = new Car();


//为原始对象增加 light属性


var LightCar = function(car){


	//借用构造函数法
	LightCar.superClassPrototype.constructor.call(this,car);
}

ninico.extend(LightCar,Car);


LightCar.prototype = {
	constructor: LightCar,
	getPrice : function(){

		//在这里使用了原始对象
		return this.car.getPrice() + 10000;
	},
	action: function(){

		document.write('ninico runing and lighting!');
	}
}





//为原始对象增加 size


var SizeCar = function(car){


	//借用构造函数法
	SizeCar.superClassPrototype.constructor.call(this,car);
}

ninico.extend(SizeCar,Car);

SizeCar.prototype = {
	constructor　: SizeCar,
	getPrice : function(){
		return this.car.getPrice() + 30000;
	},
	action : function(){
		document.write("ninico fighting!");
	}
}

var supCar = new Car();
console.log(supCar.getPrice());
supCar.action();

var lightCar = new LightCar(supCar);
console.log(lightCar.getPrice());
lightCar.action();

var sizeCar = new SizeCar(supCar);
console.log(sizeCar.getPrice());
sizeCar.action();
