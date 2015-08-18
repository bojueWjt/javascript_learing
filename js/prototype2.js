//原型prototype的字面量继承
/*
function Person(){

}

Person.prototype = {
	constructor: Person,
	name: 'yangtian',
	age: 23,
	sayName: function(){
		alert('我是原型方法');
	}
}

var p1 = new Person();

// p1.sayName();

for( attributes in p1){       //使用这种方式定义原型，所创建的对象，constructor 这个属性将可以枚举
	console.log(attributes);
}
*/


//下面我们介绍ECMA5 中的新特性 Object.definePrpperty()方法来设置原型的构造函数指向Person

/*
function Person(){

}

Person.prototype = {
	name: 'yangtian',
	age: 23,
	sayName: function(){
		console.log('i am the prototype');
	}
}

Object.defineProperty(Person.prototype,'constructor',{
	enumerable: false,  //将enumerable属性设置为false
	value: Person
})

var p1 = new Person();

for( attributes in p1){  //可以看到这样就不会出现constructor
	console.log(attributes);
}

*/


//prototype 的动态特性

/*
function Person(){

}

var p1 = new Person();

Person.prototype = {
	constructor : Person,
	name : 'yangtian'
}

console.log(p1.name); //undefine
*/

function Person(){

}

var p1 = new Person();

Person.prototype.name = 'yangtian';  

console.log(p1.name); //yangtian
