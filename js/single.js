//那，单例设计模式，单例顾名思义呢，就是只有一个实例或者对象


//简单单体，可以使由函数字面量直接定义的对象
/*
var single = {
	name : "xixii",
	f2 : 'f2',
	method1 : function(){
		console.log('i am zhe function 1');
	},
	method2 : function(){
		console.log('i am zhe function 2');
	}
}


single.method1();


//我们在多人开发的时候可以利用 单例模式，为个人设置命名空间
//这样就可以防止代码冲突了


var WJT = {};
WJT.single = {
	method1 : function(){
		console.log('i am zhe function 1');
	}
}

WJT.single.method1();

*/


//下面来介绍闭包单例模式

/*
var single = (function(){
	var name = 'wjt';             //定义私用属性
	var method1 = function(){
		return name;
	}

	return {
		getname : method1
	}

})();


console.log(single.getname());

*/
//闭包单例的优势就在于可以有效的定义和保护自己的私用属性


//惰性单例模式

/*

var Ext = {};

Ext.base = (function(){

	var uniqInstance ;

	

	function init(){
		var a1 = 10;
		var a2 = false;
		var method1 = function(){
			console.log('f1');
		} ;
		var method2 = function(){
			console.log('f2');
		}

		return {
			value1 : a1,
			value2 : a2,
			f1 : method1,
			f2 : method2
		}
	}

	return {
		getUniqInstance : function(){
			if(!uniqInstance){
				uniqInstance = init();
			}

			return uniqInstance;
		}
	}
})();

console.log(Ext.base)
Ext.base.getUniqInstance().f1();

*/

/*
/ 在这个实例中，可以通过uniqInstancce属性判断要传回的方法和属性
/ 这样，照这样的模式可以定义多个属性，将单例中的属性和方法分开
/ 需要什么方法和属性再传什么方法和属性
/ 效率就提高了
/
/
*/


//下面介绍分支单例模式


var Ext = {};
Ext.more = (function(){
	var Aobj = {
		name : 'A'
	};
	var Bobj = {
		name : 'B'
	};

	var type = true;

	return (type)?Aobj:Bobj;
})()



console.log(Ext.more.name);


//根据type判断要返回的单例， 一般用在处理不同浏览器兼容性问题上