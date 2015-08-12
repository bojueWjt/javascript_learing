/*****************object的创建方式********************/

//创建直接的实例
/*

var person = new Object();
person.name = 'wjt';
person.email = '322414@qq.com';
person.age = 23;

//替代语法（使用对象 literals）：字面量

var person = { name : 'wjt', email : '322414@qq.com' , age : 23};
*/

//使用对象构造器

var Person = function(Name,Email,Age){
	this.name = Name;
	this.email = Email;
	this.age = Age;
}

var person = new Person('wjt','322414@qq.com',23);
console.log(person); 

/****************使用for in 语句对object实现枚举*************/

for( attributes in person){
	console.log(attributes + ":" + person[attributes]);
}

/*****************每一个object都会拥有的属性和方法********************/

//constructor 这个属性保存的事创建当前对象的函数。（构造函数）

console.log(person.constructor);

//hasOwnProperty(propertyName) 这个方法用来判断当前传入的属性是否属于当前实例的属性（而不是存在在原型中）

console.log(person.hasOwnProperty(name));

//isPrototypeOf(Obj)判断传入的对象的原型链中，是否有调用方法的对象

var prop = new Object();
person.prototype = prop;

console.log(prop.isPrototypeOf(person)); 

//propertyIsEnumerable(propname) 用来检测该属性是否可以被枚举

//toLocaleString() 返回一个日期，该日期使用当前区域设置并已被转换为字符串。 返回Data对象

console.log(person.toLocaleString());

//toString()返回字符串表示

console.log(person.toString());

//valueOf() 返回对象的字符串，布尔，数值表达

console.info(person.valueOf())