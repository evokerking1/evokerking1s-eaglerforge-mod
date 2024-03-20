/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dev/evokerking/eaglerfoge/util/mc.ts":
/*!**************************************************!*\
  !*** ./src/dev/evokerking/eaglerfoge/util/mc.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mc = void 0;
exports.mc = ModAPI.mcinstance;


/***/ }),

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
__webpack_require__(/*! ./util/mc */ "./src/dev/evokerking/eaglerfoge/util/mc.ts");
//logToConsole(msg:"Starting.");
//logToConsole(msg:,"Starting..");
//logToConsole(msg:"Starting...");
//ModAPI.displayToChat({msg: "hello, this is eaglerforge!"})
//ModAPI.logger.loginfo({string: "you can log a string to console"})
//ModAPI.uwuify({string: "and even uwuify a string?"})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ09vbCBtb2RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxVQUFVO0FBQ1YsVUFBVTs7Ozs7Ozs7Ozs7QUNIRztBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7Ozs7OztVQ1JuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQixtQkFBTyxDQUFDLHdHQUFpRDtBQUM3RTtBQUNBLG1CQUFPLENBQUMsNkRBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1DQUFtQztBQUMzRCx5QkFBeUIsMENBQTBDO0FBQ25FLGlCQUFpQixvQ0FBb0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9DT29sIG1vZHMvLi9zcmMvZGV2L2V2b2tlcmtpbmcvZWFnbGVyZm9nZS91dGlsL21jLnRzIiwid2VicGFjazovL0NPb2wgbW9kcy8uL3NyYy9pby9naXRodWIvbXVydHVydGxlL2J1cm1vZC9yZXF1aXJlX2FsbC50cyIsIndlYnBhY2s6Ly9DT29sIG1vZHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQ09vbCBtb2RzLy4vc3JjL2Rldi9ldm9rZXJraW5nL2VhZ2xlcmZvZ2UvTWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubWMgPSB2b2lkIDA7XG5leHBvcnRzLm1jID0gTW9kQVBJLm1jaW5zdGFuY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVxdWlyZV9hbGwgPSB2b2lkIDA7XG5mdW5jdGlvbiByZXF1aXJlX2FsbCgpIHtcbiAgICBNb2RBUEkucmVxdWlyZShcInBsYXllclwiKTtcbiAgICBNb2RBUEkucmVxdWlyZShcIm5ldHdvcmtcIik7XG4gICAgTW9kQVBJLnJlcXVpcmUoXCJzZXR0aW5nc1wiKTtcbn1cbmV4cG9ydHMucmVxdWlyZV9hbGwgPSByZXF1aXJlX2FsbDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZXF1aXJlX2FsbF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2lvL2dpdGh1Yi9tdXJ0dXJ0bGUvYnVybW9kL3JlcXVpcmVfYWxsXCIpO1xuKDAsIHJlcXVpcmVfYWxsXzEucmVxdWlyZV9hbGwpKCk7XG5yZXF1aXJlKFwiLi91dGlsL21jXCIpO1xuLy9sb2dUb0NvbnNvbGUobXNnOlwiU3RhcnRpbmcuXCIpO1xuLy9sb2dUb0NvbnNvbGUobXNnOixcIlN0YXJ0aW5nLi5cIik7XG4vL2xvZ1RvQ29uc29sZShtc2c6XCJTdGFydGluZy4uLlwiKTtcbi8vTW9kQVBJLmRpc3BsYXlUb0NoYXQoe21zZzogXCJoZWxsbywgdGhpcyBpcyBlYWdsZXJmb3JnZSFcIn0pXG4vL01vZEFQSS5sb2dnZXIubG9naW5mbyh7c3RyaW5nOiBcInlvdSBjYW4gbG9nIGEgc3RyaW5nIHRvIGNvbnNvbGVcIn0pXG4vL01vZEFQSS51d3VpZnkoe3N0cmluZzogXCJhbmQgZXZlbiB1d3VpZnkgYSBzdHJpbmc/XCJ9KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9