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

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	/*
	* 变量结构，分为数组结构,对象结构,字符串，函数等解构
	* 数组，对象允许嵌套赋值
	* 数组，对象属性必须严格等于undefined，默认值才生效
	* */
	//数组进行结构
	{
	    var a = 1,
	        b = 2;

	    console.log(a, b);
	}
	{
	    var _ref = [1, 2, 3],
	        x = _ref[0],
	        y = _ref[2];

	    console.log(x, y);
	}
	{
	    var _x = 1,
	        _ref2 = [2],
	        _y = _ref2[0],
	        z = _ref2[1],
	        g = 3;

	    console.log(_x, _y, z, g);
	}
	{
	    // 默认值，必须右边严格为undefined才生效
	    var _undefined = undefined,
	        _x2 = _undefined === undefined ? 1 : _undefined;

	    var _ref3 = null,
	        _y2 = _ref3 === undefined ? 1 : _ref3;

	    console.log(_x2, _y2);
	}
	{
	    //数组有个length属性
	    var _hello = 'hello',
	        len = _hello.length;

	    console.log(len);
	}

	//对象结构，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。
	{
	    var _foo$baz = { foo: 'foo', baz: 'baz' },
	        foo = _foo$baz.foo,
	        bar = _foo$baz.bar;

	    console.log(foo, bar);
	}
	{
	    //属性对应赋值，例子中对应变量是f,l 而不是first world,其为模式。实用性不高。
	    var _first$last = { first: 'hello', last: 'world' },
	        f = _first$last.first,
	        l = _first$last.last;

	    console.log(f, l);
	}
	{
	    //p是模式，无法赋值
	    var obj = {
	        p: ['Hello', { y: 'World' }]
	    };

	    var _obj$p = _slicedToArray(obj.p, 2),
	        _x3 = _obj$p[0],
	        _y3 = _obj$p[1].y;

	    console.log(_x3, _y3);
	}
	{
	    //指定默认值,和数组解构一样，需要严格undefined
	    var _x$z = { x: 1, z: null },
	        _x4 = _x$z.x,
	        _x$z$y = _x$z.y,
	        _y4 = _x$z$y === undefined ? 1 : _x$z$y,
	        _z = _x$z.z;

	    console.log(_x4, _y4, _z);
	}
	{
	    //直接解构对象方法
	    var cos = Math.cos,
	        sin = Math.sin,
	        floor = Math.floor;

	    console.log(cos, sin, floor);
	}
	{
	    //数组,对象解构
	    var _ref4 = [1, 2],
	        first = _ref4[0],
	        second = _ref4[1];

	    console.log(first, second);
	}

	//字符串解构
	{
	    //赋值
	    var _ = "123",
	        _ref5 = _slicedToArray(_, 3),
	        _a = _ref5[0],
	        _b = _ref5[1],
	        c = _ref5[2];

	    console.log(_a, _b, c);
	    //字符串的length属性
	    var _2 = "123",
	        _len = _2.length;

	    console.log(_len);
	}

	//函数解构
	{
	    var arr = [[1, 2], [3, 4]];
	    var arrCopy = arr.map(function (_ref6) {
	        var _ref7 = _slicedToArray(_ref6, 2),
	            a = _ref7[0],
	            b = _ref7[1];

	        return a + b;
	    });
	    console.log(arrCopy);
	}

/***/ }
/******/ ]);