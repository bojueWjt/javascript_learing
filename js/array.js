//在Array的原型prototype上扩展array方法

//先来复习一下ECMA5 中数组的新特性 forEach()方法

var arr = [1,2,[3,[4,[5]]]];
arr.forEach(function(item,indexof,array){
	console.log(item);	
});

//forEach()方法只能遍历一维数组 

Array.prototype.each = function(fn){
	try{
		// this.i 遍历数组每一项时记录数组当前的位置，选用this.i而不声明新变量，是为了防止变量污染
		this.i || (this.i = 0);
		// if 进行严格的判断，什么时候可以使用each方法
		// 调用的对象必须是数组 && 不能是空数组 && 传入的参数必须是函数
		if(this.constructor === Array && this.length > 0 && fn.constructor === Function){
			//遍历数组
			for(this.i;this.i<this.length;this.i++){
				var item = this[this.i];
				//如果得到的子元素还是数组，那么进行递归
				if(item.constructor == Array){
					arguments.callee.call(item,fn);
				}else{
					//执行传入的函数
					fn.call(item,item);
				}
			}
		}
		this.i =null;
	}catch(ex){
		//do something
	}
}


arr.each(function(item) {
	console.log(item);
});