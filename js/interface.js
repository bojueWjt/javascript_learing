//javascript 实现接口的方法有鸭式辩型法（最完善的javascript的接口实现方法）
//注解描述法、属性检测法


//下面实现鸭式辩型法


//1.接口类 Interface
/*
* param interfaceName(string) methods(array(String))
*
*
*/

function Interface(interfaceName,methods){

	if(arguments.length != 2){
		throw new Error('需要两个参数！');
	}

	if(typeof interfaceName !== 'string'){
		throw new Error('参数名必须为字符型！');
	}

	this.name = interfaceName;
    
	if(!(Object.prototype.toString.apply(methods) === '[object Array]')){
		throw new Error('methods必须为数组');
	}

	this.methods = [];

	for(var i = 0,len = methods.length; i < len; i++){
		if(typeof methods[i] !== 'string'){
			throw new Error('参数名必须全部为字符串！');
		}
		this.methods.push(methods[i]);
	}
}


// CompositeImpl implement CompositeInterface,FormItemInterface

var CompositeInterface = new Interface('CompositeInterface',['add','remove']);
var FormItemInterface = new Interface('FormItemInterface',['delete','update']);


//实现接口CompositeImpl

function CompositeImpl(){

}

CompositeImpl.prototype.add = function(){
	console.log('add>>>>>>>>>>>>');
}


CompositeImpl.prototype.remove = function(){
	console.log('remove>>>>>>>>>>>>');
}

CompositeImpl.prototype.delete = function(){
	console.log('delete>>>>>>>>>>>>');
}
 
CompositeImpl.prototype.update = function(){
	console.log('update>>>>>>>>>>>>');
}
 
Interface.ensureImplements = function(obj){

	if(arguments.length < 2){
		throw new Error('必须包含两位以上参数！');
	}

	for(var i = 1,len = arguments.length; i < len ; i++){

		if(!(arguments[i].constructor === Interface)){
			throw new Error(arguments[i] + '不是一个接口实例！');
		}

		for(var j = 0, methodsLen = arguments[i].methods.length; j < methodsLen ; j++ ){
			
			var method = arguments[i].methods[j];
			if(!(typeof obj[method] === 'function')){
				throw new Error('未实现' + arguments[i].name + '接口的' + method + '方法！');
			}
		}
	}
}

var p1 = new CompositeImpl();

Interface.ensureImplements(p1,CompositeInterface,FormItemInterface);