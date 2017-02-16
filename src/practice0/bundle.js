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

	"use strict";

	/*
	    1、let，const块级作用域
	    2、let,const无变量提升
	    3、const是常量，如果指向的对象，数组。可以修改对象以及数组，但不能修改字面量。
	     */

	//块级作用域
	try {
	    {
	        var _a = 1;
	    }
	    console.log(a);
	} catch (e) {
	    console.log(e);
	}

	//实现iife
	{
	    var temp = 1;
	    console.log(temp);
	}

	//实现for循环中function触发问题
	var a = [];

	var _loop = function _loop(i) {
	    a[i] = function () {
	        console.log(i);
	    };
	};

	for (var i = 0; i < 3; i++) {
	    _loop(i);
	}
	a[2]();

/***/ }
/******/ ]);