/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/*
	 页面元素坐标和偏移（clientX/pageX/screenX/layerX/offsetWidth/scrollWidth/clientWidth等）相关整理
	 */
	var el = document.querySelector('#div2');
	el.addEventListener('click', function (e) {
	    var content = '\u9F20\u6807\u76F8\u5BF9\u4E8E\u89C6\u53E3\u5927\u5C0F\uFF1AclientX\uFF1A' + e.clientX + ',clientY: ' + e.clientY;
	    content += '\n\u9F20\u6807\u76F8\u5BF9\u4E8E\u5C4F\u5E55\u5927\u5C0F\uFF1AscreenX\uFF1A' + e.screenX + ',screenY: ' + e.screenY;
	    content += '\n\n\u5143\u7D20\u7684\u504F\u79FB\u91CF\uFF08offsetLeft/offsetTop),\u76F8\u5BF9\u4E8Erelative\u7684\u7236\u5143\u7D20\uFF0C\u5982\u679C\u6CA1\u6709\u5219\u662Fbody,\u548C\u6EDA\u52A8\u6761\u65E0\u5173! offsetLeft\uFF1A' + this.offsetLeft + ',offsetTop: ' + this.offsetTop;
	    content += '\n\n  \u5143\u7D20\u7684\u5BA2\u6237\u533A\u7684\u5927\u5C0F\u5C31\u662F\u6307\u5143\u7D20\u5185\u5BB9\u53CA\u5176\u5185\u8FB9\u8DDD\u6240\u5360\u7A7A\u95F4\u7684\u5927\u5C0F\uFF08\u6EDA\u52A8\u6761\u5360\u7528\u7684\u7A7A\u95F4\u4E0D\u8BA1\u7B97\u5728\u5185\uFF09\uFF08clientWidth=width+padding\uFF08left\u3001right\uFF09/clientHeight=height+padding\uFF08top\u3001bottom\uFF09)\uFF0CclientWidth\uFF1A' + this.clientWidth + ',clientHeight: ' + this.clientHeight;
	    content += '\n\n  \u5143\u7D20\u7684\u5927\u5C0F\u5C31\u662F\u6307\u5143\u7D20\u5185\u5BB9,\u5185\u8FB9\u8DDD\uFF0Cborder\u8DDD\u6240\u5360\u7A7A\u95F4\u7684\u5927\u5C0F\uFF08offsetWidth=width+padding\uFF08left\u3001right\uFF09+border/offsetHeight=height+padding\uFF08top\u3001bottom\uFF09)+border\uFF0CoffsetWidth\uFF1A' + this.offsetWidth + ',offsetHeight: ' + this.offsetHeight;
	    content += '\n\n  \u6EDA\u52A8\u6761\u6EDA\u52A8\u8DDD\u79BB (scrollLeft,scrollTop)  scrollLeft\uFF1A' + this.scrollLeft + ',scrollTop: ' + this.scrollTop;
	    content += '\n\n  \u5305\u542B\u6EDA\u52A8\u90E8\u5206\u7684\u6240\u6709\u5185\u5BB9\u5BBD\u9AD8 (scrollWidth,scrollHeight)  scrollWidth\uFF1A' + this.scrollWidth + ',scrollHeight: ' + this.scrollHeight;
	    var x = window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
	    var y = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	    content += '\n\n  window.pageXOffset/window.pageYOffset\u76F8\u5F53\u4E8Ewindow.scrollX/window.scrollY\uFF0C\u8FD4\u56DE\u7684\u662F\u6574\u4E2A\u6587\u6863document\u5728\u6C34\u5E73\u548C\u7AD6\u76F4\u65B9\u5411\u6EDA\u52A8\u4E86\u7684\u8DDD\u79BB  window.pageXOffset\uFF1A' + x + ',window.pageYOffset: ' + y;
	    content += '\n\n  window.innerHeight,window.innerWidth\u6587\u6863\u7684\u89C6\u53E3\u5BBD\u9AD8  window.innerWidth\uFF1A' + window.innerWidth + ',window.innerWidth: ' + window.innerHeight;
	    content += '\n\n  window.outerHeight,window.outerWidth\u6D4F\u89C8\u5668\u53EF\u89C6\u5BBD\u9AD8\uFF0C\u5305\u542B\u4E66\u7B7E\u90A3\u4E9B  window.outerWidth: ' + window.outerWidth + '\uFF0Cwindow.outerHeight\uFF1A' + window.outerHeight;
	    var bcr = this.getBoundingClientRect();
	    content += '\n\n  getBoundingClientRect\u7528\u4E8E\u83B7\u5F97\u9875\u9762\u4E2D\u67D0\u4E2A\u5143\u7D20\u7684\u5DE6\uFF0C\u4E0A\uFF0C\u53F3\u548C\u4E0B\u5206\u522B\u76F8\u5BF9\u6D4F\u89C8\u5668\u89C6\u7A97\u7684\u4F4D\u7F6E  left\u5143\u7D20\u5DE6\u8FB9\u79BB\u9875\u9762\u5DE6\u8FB9\u8DDD\u7684\u8DDD\u79BB:' + bcr.left + ',right\u5143\u7D20\u53F3\u8FB9\u79BB\u9875\u9762\u5DE6\u8FB9\u8DDD\u7684\u8DDD\u79BB:' + bcr.right + ',top\u5143\u7D20\u4E0A\u8FB9\u79BB\u9875\u9762\u4E0A\u8FB9\u8DDD\u7684\u8DDD\u79BB:' + bcr.top + ',bottom\u5143\u7D20\u4E0B\u8FB9\u79BB\u9875\u9762\u4E0A\u8FB9\u8DDD\u7684\u8DDD\u79BB:' + bcr.bottom + ',width\u7B49\u4EF7\u4E8EoffsetWidth:' + bcr.width + ',width\u7B49\u4EF7\u4E8EoffsetHeight:' + bcr.height;
	    var a = { test: 1 };
	    console.log(this.getBoundingClientRect());
	
	    this.innerText = content;
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map