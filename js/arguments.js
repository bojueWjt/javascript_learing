//function中，arguments这个参数，代表实际传入函数的参数

var test = function(a,b,c){
	if(test.length===arguments.length){   //test.length 代表函数定义的参数个数
		return a+b+c;
	}else{
		return '参数个数错误';
	}
}

console.log(test(10,20));
console.log(test(10,20,30));

//arguments中有一个属性叫callee 指向函数本身
// ECMA5 标准中已经将callee移除，严格模式下不可食用

var diedai = function(num){
	if(num===1){
		return 1;
	}else{
		return num*arguments.callee(num-1);
	}
}

console.log(diedai(5));
