//组合模式是一种专门为创建web上的动态用户界面而量身制定的模式。
//使用这样的模式可以“用一条命令在多个对象上激发复杂的或递归的行为”


//组合模式的使用场景：
//  -1 存在一批组织成某种层次体系的对象
//  -2 希望对这批对象或者其中的一部分对象实施一个操作

//组合模式的特点：
//-组合模式中只有两种对象类型： 组合对象、叶子对象
//-这两种类型都实现同一批接口
//-一般我们会在组合对象中调用其他方法并隐式的调用“下级对象”的方法（这里我们一般采用递归的形式去做）


var CompositeInterface = new ninico.Interface('CompositeInterface',['addChild','getChild']);
var LeafInterface = new ninico.Interface('LeafInterface',['hardWorking','sleep']);


var Composite = function(name){
	this.name = name;
	this.type = 'composite';
	this.children = []
}

Composite.prototype = {
	constructor: Composite,
	addChild: function(child){
		this.children.push(child);
		return this;
	},
	getChild: function(){
		return this.children;
	},
	hardWorking: function(name){
		var elements = this.findLeaf(name);

		for(var i = 0,len = elements.length; i < len ; i++){

			elements[i].hardWorking();
		}
	},
	findLeaf: function(name){

		var elements = [];

		var findAllleaf = function(){

			this.children.forEach(function(e){
				if(e.type === 'composite'){
					e.children.forEach(arguments.callee);
				}else if(e.type === 'leaf'){
					elements.push(e);
				}
			});
		}

		if(!name || this.name === name){

			findAllleaf.call(this,name);

		}else{
			this.children.forEach(function(e){
				if(e.name === name){
					if(e.type === 'composite'){

						findAllleaf.call(e,name);
						return elements;

					}else if(e.type === 'leaf'){

						elements.push(e);
						return elements;

					}

				}else if(e.type === 'composite'){

					e.children.forEach(arguments.callee);
				}else if(e.type === 'leaf'){

				}
			})
		}

		return elements;
	},
	sleep: function(name){
		var elements = this.findLeaf(name);

		for(var i = 0,len = elements.length; i < len ; i++){

			elements[i].sleep();
		}
	}
}

var Leaf = function(name){
	this.name = name;
	this.type = 'leaf';
}

Leaf.prototype = {
	constructor: Leaf,
	addChild: function(){
		throw new Error('this method is disabled!');
	},
	getChild: function(){
		throw new Error('this method is disabled!');
	},
	hardWorking: function(){
		console.log( this.name + 'hardWorking!');
	},
	sleep: function(){
		console.log( this.name + 'sleep!');
	}
}


ninico.Interface.ensureImplement(Composite,CompositeInterface,LeafInterface);
ninico.Interface.ensureImplement(Leaf,CompositeInterface,LeafInterface);


/**
 *  伯爵科技
 *   	--->  深圳分公司
 *    			--->  深圳人事部
 *    					---> p1
 *    					---> p2
 *    					---> p3
 *    			--->  深圳技术部
 *    					---> p4
 *    					---> p5
 *    					---> p6
 * 		--->  广州分公司
 * 				--->  广州人事部
 *    					---> p7
 *    					---> p8
 *    					---> p9
 *    			--->  广州技术部
 *    					---> p10
 *    					---> p11
 *    					---> p12
 */


var org = new Composite('伯爵科技');
var branchOrgSZ = new Composite('深圳分公司');
var branchOrgGZ = new Composite('广州分公司');

org.addChild(branchOrgSZ).addChild(branchOrgGZ);

var deptSZ1 = new Composite('深圳人事部');
var deptSZ2 = new Composite('深圳技术部');

branchOrgSZ.addChild(deptSZ1).addChild(deptSZ2);

var deptGZ1 = new Composite('广州人事部');
var deptGZ2 = new Composite('广州技术部');

branchOrgGZ.addChild(deptGZ1).addChild(deptGZ2);

var p1 = new Leaf('p1');
var p2 = new Leaf('p2');
var p3 = new Leaf('p3');
var p4 = new Leaf('p4');
var p5 = new Leaf('p5');
var p6 = new Leaf('p6');
var p7 = new Leaf('p7');
var p8 = new Leaf('p8');
var p9 = new Leaf('p9');
var p10 = new Leaf('p10');
var p11 = new Leaf('p11');
var p12 = new Leaf('p12');

deptSZ1.addChild(p1).addChild(p2).addChild(p3);
deptSZ2.addChild(p4).addChild(p5).addChild(p6);
deptGZ1.addChild(p7).addChild(p8).addChild(p9);
deptGZ2.addChild(p10).addChild(p11).addChild(p12);

// org.hardWorking();
// org.hardWorking('伯爵科技');
// org.hardWorking('深圳分公司');
// org.hardWorking('广州分公司');
// org.hardWorking('广州技术部');
org.hardWorking('深圳人事部');
// org.hardWorking('p4');

org.sleep('p3');