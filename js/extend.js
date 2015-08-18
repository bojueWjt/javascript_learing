//原型继承
/*
function Person(name , age){
	this.name = name ;
	this.age = age ;
}

Person.prototype.id = 10;

function Boy(friend){
	this.friend = friend;
}

Boy.prototype = new Person('haiming',21);

var p1 = new Boy('yangtian');

console.log(p1.friend);
console.log(p1.id);
console.log(p1.name);
*/


//借用构造函数继承模式
/*
function Person(name , age){
	this.name = name ;
	this.age = age ;
}

Person.prototype.id = 10;

function Boy(name , age ,friend){
	this.friend = friend;
	Person.call(this,name,age);
}

var p1 = new Boy('shijie',23,'xixisu');

console.log(p1.friend);
console.log(p1.name);
console.log(p1.id);  //显而易见这是undefined

*/


//混合继承模式  原型继承 + 借用构造函数继承


function Person(name , age){
	this.name = name;
	this.age = age;
	console.log('-------------nicnini-------------');
}

Person.prototype.id = 10;

function Boy(name , age ,friend){
	this.name = name ;
	Person.call(this,name,age);
}

Boy.prototype = new Person();

var p1 = new Boy('haiming',23,'shijie');
var p2 = new Boy('haiming',23,'shijie');

console.log(p1.name);
console.log(p1.friend);
console.log(p1.id);