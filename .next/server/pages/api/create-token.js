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
exports.id = "pages/api/create-token";
exports.ids = ["pages/api/create-token"];
exports.modules = {

/***/ "(api)/./src/pages/api/create-token.js":
/*!***************************************!*\
  !*** ./src/pages/api/create-token.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst PHYLLO_CREATE_TOKEN_URL = \"https://api.sandbox.getphyllo.com/v1/sdk-tokens\";\n// Kindly create an env file and pass your crendentials from there.\nconst PHYLLO_CLIENT_ID = \"3b2c7976-cfed-4b5c-9e41-a681245a9ec6\";\nconst PHYLLO_SECRET_ID = \"412e46c1-2e34-41ae-ae05-d6c3e6f0e04e\";\nasync function handler(req, res) {\n    let headers = new Headers();\n    headers.set(\"Authorization\", \"Basic \" + btoa(PHYLLO_CLIENT_ID + \":\" + PHYLLO_SECRET_ID));\n    headers.set(\"Content-Type\", \"application/json\");\n    if (req.method === \"POST\") {\n        try {\n            const response = await fetch(`${PHYLLO_CREATE_TOKEN_URL}`, {\n                method: \"POST\",\n                body: JSON.stringify(req.body),\n                headers: headers\n            });\n            const result = await response.json();\n            return res.status(response.status).json(result);\n        } catch (err) {\n            return res.status(err.status).json(err);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NyZWF0ZS10b2tlbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkVBQTZFO0FBQzdFLE1BQU1BLDBCQUEwQjtBQUVoQyxtRUFBbUU7QUFDbkUsTUFBTUMsbUJBQW1CQyxzQ0FBd0M7QUFDakUsTUFBTUcsbUJBQW1CSCxzQ0FBd0M7QUFFbEQsZUFBZUssUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUMsVUFBVSxJQUFJQztJQUNsQkQsUUFBUUUsR0FBRyxDQUFDLGlCQUFpQixXQUFXQyxLQUFLWixtQkFBbUIsTUFBTUk7SUFDdEVLLFFBQVFFLEdBQUcsQ0FBQyxnQkFBZ0I7SUFDNUIsSUFBSUosSUFBSU0sTUFBTSxLQUFLLFFBQVE7UUFDekIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxDQUFDLEVBQUVoQix3QkFBd0IsQ0FBQyxFQUFFO2dCQUN6RGMsUUFBUTtnQkFDUkcsTUFBTUMsS0FBS0MsU0FBUyxDQUFDWCxJQUFJUyxJQUFJO2dCQUM3QlAsU0FBU0E7WUFDWDtZQUNBLE1BQU1VLFNBQVMsTUFBTUwsU0FBU00sSUFBSTtZQUNsQyxPQUFPWixJQUFJYSxNQUFNLENBQUNQLFNBQVNPLE1BQU0sRUFBRUQsSUFBSSxDQUFDRDtRQUMxQyxFQUFFLE9BQU9HLEtBQUs7WUFDWixPQUFPZCxJQUFJYSxNQUFNLENBQUNDLElBQUlELE1BQU0sRUFBRUQsSUFBSSxDQUFDRTtRQUNyQztJQUNGLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGh5bGxvLW5leHQtc2FtcGxlLy4vc3JjL3BhZ2VzL2FwaS9jcmVhdGUtdG9rZW4uanM/ZTNkZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuY29uc3QgUEhZTExPX0NSRUFURV9UT0tFTl9VUkwgPSBcImh0dHBzOi8vYXBpLnNhbmRib3guZ2V0cGh5bGxvLmNvbS92MS9zZGstdG9rZW5zXCI7XG5cbi8vIEtpbmRseSBjcmVhdGUgYW4gZW52IGZpbGUgYW5kIHBhc3MgeW91ciBjcmVuZGVudGlhbHMgZnJvbSB0aGVyZS5cbmNvbnN0IFBIWUxMT19DTElFTlRfSUQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QSFlMTE9fQ0xJRU5UX0lEO1xuY29uc3QgUEhZTExPX1NFQ1JFVF9JRCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BIWUxMT19TRUNSRVRfSUQ7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICBoZWFkZXJzLnNldChcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBcIiArIGJ0b2EoUEhZTExPX0NMSUVOVF9JRCArIFwiOlwiICsgUEhZTExPX1NFQ1JFVF9JRCkpO1xuICBoZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke1BIWUxMT19DUkVBVEVfVE9LRU5fVVJMfWAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxLmJvZHkpLFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgfSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhyZXNwb25zZS5zdGF0dXMpLmpzb24ocmVzdWx0KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGVyci5zdGF0dXMpLmpzb24oZXJyKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQSFlMTE9fQ1JFQVRFX1RPS0VOX1VSTCIsIlBIWUxMT19DTElFTlRfSUQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfUEhZTExPX0NMSUVOVF9JRCIsIlBIWUxMT19TRUNSRVRfSUQiLCJORVhUX1BVQkxJQ19QSFlMTE9fU0VDUkVUX0lEIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImhlYWRlcnMiLCJIZWFkZXJzIiwic2V0IiwiYnRvYSIsIm1ldGhvZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3VsdCIsImpzb24iLCJzdGF0dXMiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/create-token.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/create-token.js"));
module.exports = __webpack_exports__;

})();