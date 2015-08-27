//这里我们仿照jQuery的$方法来试着实现它的方法


(function(window,undefined){

	var _$ = function(str){  // 带_的变量名代表着私有属性

	}

	_$.prototype = {
		constructor : _$,
		addEvent : addEvent,
		setStyle : setStyle
	}

	Function.prototype.addMethod = function(methodName, fn){

		this.prototype[methodName] = fn;
		return this ; //返回this用于链式调用
	}

	function addEvent(){
		console.log('addEventListener-------');
		return this;
	}

	function setStyle(){
		console.log('setStyle-------------');
		return this;
	}

	window.$ = _$; // 简历联系

	_$.onReady = function(fn){
		window.$ =function(){
			return new _$(arguments);
		} 

		fn();

		_$.addMethod('addEvent',function(){   //不知道这里干嘛多此一举，下来再来看看

		}).addMethod('setStyle',function(){

		})
	}


})(window)  //将window作用域传入匿名函数中



$.onReady(function(){
	// console.log($('#add'));
	$('#add').addEvent().setStyle();
})