"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n//next js allows one to write backedn code too following the structure here\n\n//api/new-meetup\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://shivam1040:9695838438@cluster0.nhq4c5q.mongodb.net/meetups?retryWrites=true&w=majority\");\n        const db = client.db();\n        const meetupsCollection = db.collection(\"meetups\");\n        const result = await meetupsCollection.insertOne({\n            data\n        });\n        client.close();\n        res.status(201).json({\n            message: \"Inserted\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwyRUFBMkU7QUFDeEM7QUFDbkMsZ0JBQWdCO0FBQ2hCLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUMzQixJQUFHRCxJQUFJRSxNQUFNLEtBQUssUUFBTztRQUNyQixNQUFNQyxPQUFPSCxJQUFJSSxJQUFJO1FBQ3JCLE1BQU1DLFNBQVMsTUFBTVAsZ0RBQVdBLENBQUNRLE9BQU8sQ0FBQztRQUN6QyxNQUFNQyxLQUFLRixPQUFPRSxFQUFFO1FBQ3BCLE1BQU1DLG9CQUFvQkQsR0FBR0UsVUFBVSxDQUFDO1FBQ3hDLE1BQU1DLFNBQVMsTUFBTUYsa0JBQWtCRyxTQUFTLENBQUM7WUFBQ1I7UUFBSTtRQUV0REUsT0FBT08sS0FBSztRQUNaWCxJQUFJWSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUNDLFNBQVM7UUFBVTtJQUM3QztBQUNKO0FBRUEsaUVBQWVoQixPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9uZXctbWVldHVwLmpzPzczOTQiXSwic291cmNlc0NvbnRlbnQiOlsiLy9uZXh0IGpzIGFsbG93cyBvbmUgdG8gd3JpdGUgYmFja2VkbiBjb2RlIHRvbyBmb2xsb3dpbmcgdGhlIHN0cnVjdHVyZSBoZXJlXG5pbXBvcnQge01vbmdvQ2xpZW50fSBmcm9tICdtb25nb2RiJ1xuLy9hcGkvbmV3LW1lZXR1cFxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcyl7XG4gICAgaWYocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKXtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vc2hpdmFtMTA0MDo5Njk1ODM4NDM4QGNsdXN0ZXIwLm5ocTRjNXEubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKVxuICAgICAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpXG4gICAgICAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmluc2VydE9uZSh7ZGF0YX0pXG5cbiAgICAgICAgY2xpZW50LmNsb3NlKClcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe21lc3NhZ2U6ICdJbnNlcnRlZCd9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlciJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();