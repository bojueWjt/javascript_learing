//混合继承模式对父类构造函数模板进行了两次继承，这样的效率明显是不高的
//在这里模范extjs的底层继承方式，来实现继承

function extend(sub,sup){
	var f = new Function();
	f.prototype = sup.prototype;
	sub.prototype = new f();
	sub.prototype.constructor = sub;
	console.log(Object.prototype.constructor)
	if(sup.prototype.constructor == Object.prototype.constructor){
		sup.prototype.constructor = sup;
	}
	sub.superClassPrototype = sup.prototype;
	console.log(sub.superClassPrototype);
	
}

function Person(name , age ){
	this.name = name ;
	this.age = age ;
}

Person.prototype = {
	id : 1,
	sayName:function(){
		console.log(this.name);
	}
}

extend(Boy,Person);

function Boy(name,age,friend){
	this.friend = friend;

	Boy.superClassPrototype.constructor.call(this,name,age);
}



var p1 = new Boy('haiming',23,'shijie');

console.log(p1.name);
console.log(p1.friend);
console.log(p1.id);