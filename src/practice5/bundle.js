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

/***/ }
/******/ ]);