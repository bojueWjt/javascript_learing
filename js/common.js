/**
 * 命名空间
 * @name ninico
 * @type 单例
 */
var ninico = {}

/**
 * 接口类
 * @name Interface
 * @param string InterfaceName 接口名
 * @param Array[string] methods  接口定义的方法
 *
 * @author ninico
 */
ninico.Interface = function(InterfaceName,methods){

	if(arguments.length !==2){
		throw new Error('该方法需要两个参数！');
	}

	if(typeof InterfaceName !== 'string'){
		throw new Error('接口名必须是字符串型！');
	}

	if(methods.constructor !== Array){
		throw new Error('methods 必须是一个数组!');
	}

	this.name = InterfaceName;
	this.methods = [];

	for(var i=0, len = methods.length; i < len ; i++){
		if(typeof methods[i] !== 'string'){
			throw new Error('方法名必须为字符型!');
		}

		this.methods.push(methods[i]);
	}

	i = null;
	len = null;
}

ninico.Interface.ensureImplement  =  function(obj){

	if( arguments.length < 2){
		throw new Error('此方法需要两个或两个以上参数！');
	}

	for(var i = 1, len = arguments.length; i < len ; i++){

		if(arguments[i].constructor !== ninico.Interface){
			throw new Error('传入的接口不是Interface的实例！');
		}

		for(var j = 0, methodsNum = arguments[i].methods.lenght; j < methodsNum ; i++){
			var methodName = arguments[i].methods[j];
			if(typeof obj[methodName] !== 'function'){
				throw new Error('未实现' + arguments[i].name + '接口的' + methodName + '方法！');
			}
		}
	}

	i = null;
	j = null;
	methodName = null;
}

/**
 * 继承方法
 * @name  extend
 * @param  {Function} sub 子类
 * @param  {[Function]} sup 父类
 * 
 */
ninico.extend = function( sub, sup){

	if(typeof sub !== 'function' || typeof sup !== 'function'){
		throw new Error('需要两个参数都为构造函数！');
	}

	var f = new Function();
	f.prototype = sup.prototype;

	//继承父类的原型对象
	sub.prototype = new f();
	sub.prototype.constructor = sub;

	//如果父类的构造函数未还原，为其还原
	if(sup.prototype.constructor == Object.prototype.constructor){
		sup.prototype.constructor = sup;
	}

	sub.superClassPrototype = sup.prototype;
	f = null;
}