//prototype 可以使类的实例共享方法和属性，但是需要拥有独特的属性和方法就需要在构造函数中定义

//组合模式
/*
function Person(name,friends ){
	this.name = name;
	this.friends = friends;
}

Person.prototype = {
	constructor: Person,
	boss:'wjt',
	sayFriend: function(){
		console.log(this.friends);
	}
}

var p1 = new Person('yangtian',['haiming','ninico']);

p1.sayFriend();



*/
//动态原型方式
/*
function Person(name , friends){
	this.name = name;
	this.friends = friends;

	
	if(typeof this.sayFriends != 'function'){
		Person.prototype.sayFriends = function(){  //这个方法先判断属于原型的这个函数有没有被声明，如果被声明后就不再重复赋值，达到动态原型的效果
			console.log(this.friends);
		};
		Person.prototype.boss = 'wjt';

		console.log('-------------------ninico--------------------');
	}


}

var p1 = new Person('yangtian',['haiming','ninico']);
var p2 = new Person('xiuxiu',['nixni']);

p1.sayFriends();
*/


//稳妥方式 适用于对于安全要求较高的环境中
//1.不能使用this属性
//2.没有公共属性


function Person(name, friends){
	var obj = new Object();
	var name = name;
	var friends = friends;
	obj.sayFriends = function(){
		console.log(friends);
	}

	return obj;
}


var p1 = new Person('yangtian',['haiming','ninico']);

p1.sayFriends();


