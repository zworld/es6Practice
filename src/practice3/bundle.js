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
	{
	    //字符串遍历
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = 'abc'[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var codePoint = _step.value;

	            console.log(codePoint);
	        }
	        //includes(), startsWith(), endsWith() 返回boolean
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

	    var _str3 = "hello world";
	    console.log(_str3.includes('hello'));
	    console.log(_str3.startsWith('he'), _str3.startsWith('z'));
	    console.log(_str3.endsWith('ld'), _str3.endsWith('z'));

	    //repeat
	    console.log(_str3.repeat(2));

	    //padStart()，padEnd()是ES7语法
	    // let padStr = 'pad';
	    // console.log(padStr.padStart(6,'add'))
	    // console.log(padStr.padEnd(6,'add'))
	}
	{
	    //字符串模板``,${}中可以是任意js运算
	    var _str4 = "hello world zhongxinzhi";
	    var newStr = '\u65B0\u7684\u5B57\u7B26\u4E32: ' + _str4.split(' ').map(function (item) {
	        return '\n        <strong>' + item + '</strong>\n    ';
	    }).join('\n');

	    console.log(newStr);
	}

/***/ }
/******/ ]);