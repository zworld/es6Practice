/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	/*
	数组操作
	 */

	//ES5
	{
	    //监测是否是数组 1、Object.prototype.toString.call() 2、Array.isArray()
	    var arr = [1, 2, 3, 4, 5, 6];
	    console.log(Object.prototype.toString.call(arr) == '[object Array]', Array.isArray(arr));
	}
	{
	    //转换方法
	    var _arr = [1, 2, 3, 4];
	    console.log(_arr.toString()); //数组转成字符串用逗号隔开
	    console.log(_arr.valueOf()); //返回数组
	    console.log(_arr.join('!')); //返回！分割的字符串
	}
	{
	    //栈方法 push pop 会改变原本数组
	    var _arr2 = new Array();
	    _arr2.push('testPush1');
	    _arr2.push('testPush2', 'testPush3');
	    console.log(_arr2);
	    _arr2.pop();
	    console.log(_arr2);
	}
	{
	    //队列方法 shift unshift 会改变原本数组
	    var _arr3 = new Array();
	    _arr3.unshift('testShift1');
	    _arr3.unshift('testShift2');
	    _arr3.unshift('testShift3');
	    console.log(_arr3);
	    _arr3.shift();
	    console.log(_arr3);
	}
	{
	    //重排序方法 reverse sort 会改变原本数组
	    var _arr4 = [2, 1, 5, 7, 3, 4];
	    _arr4.reverse();
	    console.log(_arr4);
	    var arrCopy1 = _arr4.concat(); //用数组操作方法来实现数组的深拷贝
	    var arrCopy2 = _arr4.concat(); //用数组操作方法来实现数组的深拷贝
	    arrCopy1.sort();
	    console.log(arrCopy1);

	    //sort如果第一个参数小于第二个返回负数   sort不传参，默认调用tostring,然后比较字符串
	    arrCopy2.sort(function (item1, item2) {
	        return item1 - item2;
	    });
	    console.log(arrCopy2);
	}
	{
	    //操作方法splice slice concat 注意splice会改变原来的数组
	    var _arr5 = [1, 2, 3, 4, 5];
	    console.log(_arr5.concat(6, 7), _arr5.concat([6, 7]), _arr5.concat([6, [7, 8]])); //一层数组会被遍历
	    console.log(_arr5.slice(2, 3)); //第二个参数是截取的位置
	    _arr5.splice(2, 1); //第二个参数是个数,返回截取的数组
	    console.log(_arr5);
	    _arr5.splice(2, 0, 3, 3.1); //splice第三个及之后的参数是插入的数据
	    console.log(_arr5);
	}
	{
	    ///位置方法 indexof lastindexOf 第二个参数都是查找的起始点
	    var _arr6 = [1, 2, 3, 4, 5, 6];
	    console.log(_arr6.indexOf(2, 4));
	    console.log(_arr6.lastIndexOf(4, 4));
	}
	{
	    //迭代方法 every filter forEach map some 参数均是（item,index,array）

	    var _arr7 = [1, 2, 3, 4, 5, 6];
	    //every,遍历每一项 如果均返回true，则结果返回true,如果某一项没返回true,终止递归，返回false
	    var everyResult = _arr7.every(function (item, index, array) {
	        return true;
	    });
	    console.log(everyResult);

	    //filter 运行每一项 返回结果为true的项组成数组
	    var filterResult = _arr7.filter(function (item, index, arr) {
	        if (item < 4) return true;
	    });
	    console.log(filterResult);

	    //forEach遍历每一项，无返回值
	    var forEachResult = _arr7.forEach(function (item, index, array) {});

	    //map 返回每次函数调用的结果组成的数组,没有返回则返回数组该项为undefined
	    var mapResult = _arr7.map(function (item, index, array) {
	        return Math.pow(item, 2);
	    });
	    console.log(mapResult);

	    //some 迭代每一项，如果有一项返回true 则返回true

	    var someResult = _arr7.some(function (item, index, array) {
	        if (item == 1) return true;
	    });
	    console.log(someResult);
	}
	{
	    //归并方法 reduce reduceRight
	    var _arr8 = [1, 2, 3, 4, 5, 6, 7];
	    //reduce 第一次执行 prev是数组第一项
	    var sum = _arr8.reduce(function (prev, cur, index, array) {
	        return prev + cur;
	    });
	    console.log(sum);
	}

	//ES6
	{
	    //数组实例的find()和findIndex()查找到第一个返回为true的值终止递归，find返回数值，findindx返回位置
	    var _arr9 = [5, 6, 7, 8, 9, 10];
	    var result = _arr9.find(function (value, index, arr) {
	        return value > 7;
	    });
	    console.log(result);
	    result = _arr9.findIndex(function (value, index, arr) {
	        return value > 7;
	    });
	    console.log(result);
	}
	{
	    //数组实例的entries()，keys()和values(),数组支持for....of,用作遍历
	    var _arr10 = [5, 6, 7, 8, 9];

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = _arr10.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var index = _step.value;

	            console.log(index);
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }

	    console.log(_arr10.keys());
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	        for (var _iterator2 = _arr10.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var value = _step2.value;

	            console.log(value);
	        }
	    } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	            }
	        } finally {
	            if (_didIteratorError2) {
	                throw _iteratorError2;
	            }
	        }
	    }
	}

/***/ }
/******/ ]);