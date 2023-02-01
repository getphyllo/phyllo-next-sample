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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst PHYLLO_CREATE_TOKEN_URL = \"https://api.sandbox.getphyllo.com/v1/sdk-tokens\";\n// Kindly create an env file and pass your crendentials from there.\nconst PHYLLO_CLIENT_ID = process.env.PHYLLO_CLIENT_ID;\nconst PHYLLO_SECRET_ID = process.env.PHYLLO_SECRET_ID;\nasync function handler(req, res) {\n    let headers = new Headers();\n    headers.set(\"Authorization\", \"Basic \" + btoa(PHYLLO_CLIENT_ID + \":\" + PHYLLO_SECRET_ID));\n    headers.set(\"Content-Type\", \"application/json\");\n    if (req.method === \"POST\") {\n        try {\n            const response = await fetch(`${PHYLLO_CREATE_TOKEN_URL}`, {\n                method: \"POST\",\n                body: JSON.stringify(req.body),\n                headers: headers\n            });\n            const result = await response.json();\n            return res.status(response.status).json(result);\n        } catch (err) {\n            return res.status(err.status).json(err);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NyZWF0ZS10b2tlbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkVBQTZFO0FBQzdFLE1BQU1BLDBCQUEwQjtBQUVoQyxtRUFBbUU7QUFDbkUsTUFBTUMsbUJBQW1CQyxRQUFRQyxHQUFHLENBQUNGLGdCQUFnQjtBQUNyRCxNQUFNRyxtQkFBbUJGLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCO0FBRXRDLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlDLFVBQVUsSUFBSUM7SUFDbEJELFFBQVFFLEdBQUcsQ0FBQyxpQkFBaUIsV0FBV0MsS0FBS1YsbUJBQW1CLE1BQU1HO0lBQ3RFSSxRQUFRRSxHQUFHLENBQUMsZ0JBQWdCO0lBQzVCLElBQUlKLElBQUlNLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sQ0FBQyxFQUFFZCx3QkFBd0IsQ0FBQyxFQUFFO2dCQUN6RFksUUFBUTtnQkFDUkcsTUFBTUMsS0FBS0MsU0FBUyxDQUFDWCxJQUFJUyxJQUFJO2dCQUM3QlAsU0FBU0E7WUFDWDtZQUNBLE1BQU1VLFNBQVMsTUFBTUwsU0FBU00sSUFBSTtZQUNsQyxPQUFPWixJQUFJYSxNQUFNLENBQUNQLFNBQVNPLE1BQU0sRUFBRUQsSUFBSSxDQUFDRDtRQUMxQyxFQUFFLE9BQU9HLEtBQUs7WUFDWixPQUFPZCxJQUFJYSxNQUFNLENBQUNDLElBQUlELE1BQU0sRUFBRUQsSUFBSSxDQUFDRTtRQUNyQztJQUNGLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGh5bGxvLW5leHQtc2FtcGxlLy4vc3JjL3BhZ2VzL2FwaS9jcmVhdGUtdG9rZW4uanM/ZTNkZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuY29uc3QgUEhZTExPX0NSRUFURV9UT0tFTl9VUkwgPSBcImh0dHBzOi8vYXBpLnNhbmRib3guZ2V0cGh5bGxvLmNvbS92MS9zZGstdG9rZW5zXCI7XG5cbi8vIEtpbmRseSBjcmVhdGUgYW4gZW52IGZpbGUgYW5kIHBhc3MgeW91ciBjcmVuZGVudGlhbHMgZnJvbSB0aGVyZS5cbmNvbnN0IFBIWUxMT19DTElFTlRfSUQgPSBwcm9jZXNzLmVudi5QSFlMTE9fQ0xJRU5UX0lEO1xuY29uc3QgUEhZTExPX1NFQ1JFVF9JRCA9IHByb2Nlc3MuZW52LlBIWUxMT19TRUNSRVRfSUQ7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICBoZWFkZXJzLnNldChcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBcIiArIGJ0b2EoUEhZTExPX0NMSUVOVF9JRCArIFwiOlwiICsgUEhZTExPX1NFQ1JFVF9JRCkpO1xuICBoZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke1BIWUxMT19DUkVBVEVfVE9LRU5fVVJMfWAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxLmJvZHkpLFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgfSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhyZXNwb25zZS5zdGF0dXMpLmpzb24ocmVzdWx0KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGVyci5zdGF0dXMpLmpzb24oZXJyKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQSFlMTE9fQ1JFQVRFX1RPS0VOX1VSTCIsIlBIWUxMT19DTElFTlRfSUQiLCJwcm9jZXNzIiwiZW52IiwiUEhZTExPX1NFQ1JFVF9JRCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJoZWFkZXJzIiwiSGVhZGVycyIsInNldCIsImJ0b2EiLCJtZXRob2QiLCJyZXNwb25zZSIsImZldGNoIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJqc29uIiwic3RhdHVzIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/create-token.js\n");

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