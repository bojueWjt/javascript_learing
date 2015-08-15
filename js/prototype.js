function Person(Name,Age,Phone){
	this.name = Name;
	this.age = Age;
	this.phone = Phone;
}

var obj = new Object();
Person.prototype = obj;

obj.sayName = function(){
	console.log("我是原型对象");
};

obj.email = '53243@qq.com';

var p1 = new Person('xiao',34,'1234233234');
p1.sayName();


//getPrototypeOf 是ECMA5中引进的Object的新方法，传入一个对象，找到它的原型，优先使用此方法，一些场景里也可以使用_proto_属性代替
console.log(Object.getPrototypeOf(p1));

//hasOwnproperty() 在object文件中已经有所描述了，我们这里做点小例子

console.log(p1.hasOwnProperty('email'));

p1.email = "xiaoxiao@qq.com";

console.log(p1.hasOwnProperty('email'));

delete p1.email;

console.log(p1.hasOwnProperty('email'));

//javascript 中可以使用in操作符判断 属性是否属于这个对象，保存对象本身带有的和从原型继承来的

console.log('name' in p1);

console.log('email' in p1);


//下面我们实现一个方法 hasPrototypeProperty()方法，用来判断传入的属性是否是原型的属性

var hasPrototypeProperty = function(name){
	var obj = this;
	if(!obj.hasOwnProperty(name)&&name in obj){
		return true;
	}else{
		return false;
	}
}

p1.hasPrototypeProperty = hasPrototypeProperty;

console.log(p1.hasPrototypeProperty('email'));

//object中的keys方法是ECMA5的新特性,可以列出传入参数中的属性(不包括不可以枚举的属性)

console.log(Object.keys(p1));

//object中的getOwnPropertyName是ECMA5的新特性，可以列出传入对象中的属性（包括不可枚举的属性）


console.log(Object.getOwnPropertyNames(p1));

