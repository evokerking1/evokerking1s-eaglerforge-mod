/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/io/github/murturtle/burmod/require_all.ts":
/*!*******************************************************!*\
  !*** ./src/io/github/murturtle/burmod/require_all.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.require_all = void 0;
function require_all() {
    ModAPI.require("player");
    ModAPI.require("network");
    ModAPI.require("settings");
}
exports.require_all = require_all;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!***********************************************!*\
  !*** ./src/dev/evokerking/eaglerfoge/Main.ts ***!
  \***********************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var require_all_1 = __webpack_require__(/*! ../../../io/github/murturtle/burmod/require_all */ "./src/io/github/murturtle/burmod/require_all.ts");
(0, require_all_1.require_all)();
//logToConsole(msg:"Starting.");
//logToConsole(msg:,"Starting..");
//logToConsole(msg:"Starting...");
//ModAPI.displayToChat({msg: "hello, this is eaglerforge!"})
//ModAPI.logger.loginfo({string: "you can log a string to console"})
//ModAPI.uwuify({string: "and even uwuify a string?"})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ09vbCBtb2RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7Ozs7OztVQ1JuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQixtQkFBTyxDQUFDLHdHQUFpRDtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQ0FBbUM7QUFDM0QseUJBQXlCLDBDQUEwQztBQUNuRSxpQkFBaUIsb0NBQW9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ09vbCBtb2RzLy4vc3JjL2lvL2dpdGh1Yi9tdXJ0dXJ0bGUvYnVybW9kL3JlcXVpcmVfYWxsLnRzIiwid2VicGFjazovL0NPb2wgbW9kcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9DT29sIG1vZHMvLi9zcmMvZGV2L2V2b2tlcmtpbmcvZWFnbGVyZm9nZS9NYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZXF1aXJlX2FsbCA9IHZvaWQgMDtcbmZ1bmN0aW9uIHJlcXVpcmVfYWxsKCkge1xuICAgIE1vZEFQSS5yZXF1aXJlKFwicGxheWVyXCIpO1xuICAgIE1vZEFQSS5yZXF1aXJlKFwibmV0d29ya1wiKTtcbiAgICBNb2RBUEkucmVxdWlyZShcInNldHRpbmdzXCIpO1xufVxuZXhwb3J0cy5yZXF1aXJlX2FsbCA9IHJlcXVpcmVfYWxsO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlcXVpcmVfYWxsXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vaW8vZ2l0aHViL211cnR1cnRsZS9idXJtb2QvcmVxdWlyZV9hbGxcIik7XG4oMCwgcmVxdWlyZV9hbGxfMS5yZXF1aXJlX2FsbCkoKTtcbi8vbG9nVG9Db25zb2xlKG1zZzpcIlN0YXJ0aW5nLlwiKTtcbi8vbG9nVG9Db25zb2xlKG1zZzosXCJTdGFydGluZy4uXCIpO1xuLy9sb2dUb0NvbnNvbGUobXNnOlwiU3RhcnRpbmcuLi5cIik7XG4vL01vZEFQSS5kaXNwbGF5VG9DaGF0KHttc2c6IFwiaGVsbG8sIHRoaXMgaXMgZWFnbGVyZm9yZ2UhXCJ9KVxuLy9Nb2RBUEkubG9nZ2VyLmxvZ2luZm8oe3N0cmluZzogXCJ5b3UgY2FuIGxvZyBhIHN0cmluZyB0byBjb25zb2xlXCJ9KVxuLy9Nb2RBUEkudXd1aWZ5KHtzdHJpbmc6IFwiYW5kIGV2ZW4gdXd1aWZ5IGEgc3RyaW5nP1wifSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==