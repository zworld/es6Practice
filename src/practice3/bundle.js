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
	    ES5和ES6字符串操作总结
	    es5中的操作均返回副本 原字符串不变
	 */

	//es5总结
	{
	    var str = "hello world";
	    console.log(str.charAt(1));
	    console.log(str.charCodeAt(1));
	    console.log(str.indexOf('o', 5)); //indexOf第二个参数包含该位置
	    console.log(str.lastIndexOf('o', 3), str.lastIndexOf('o', 4)); //第二个参数指截取字符串前这么多个字符，进行倒数寻找
	}
	{
	    // concat,slice,substr,substring,split,trim,slice,substring第二个参数是截止位置，可以是负数，但不包含在里面
	    var _str = "hello world";
	    console.log(_str.concat('xinzhi'), _str.concat('xinzhi', '!'), _str); //concat连接字符串，可传多个参数
	    console.log(_str.slice(6, 11), _str.slicestr);
	    console.log(_str.substring(6, 11), _str);
	    console.log(_str.substr(6, 5), _str); //substr第二个参数是截取的数量
	    console.log(_str.split(''), _str);
	    _str = ' hello world  ';
	    console.log(_str.length, _str.trim(), _str.length);
	}
	{
	    var _str2 = "HEllo WOrld";
	    //toUpperCase,toLowerCase
	    console.log(_str2.toUpperCase(), _str2);
	    console.log(_str2.toLowerCase(), _str2);
	}

	//ES6

/***/ }
/******/ ]);