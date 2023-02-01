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
exports.id = "pages/api/get-accounts";
exports.ids = ["pages/api/get-accounts"];
exports.modules = {

/***/ "(api)/./src/pages/api/get-accounts.js":
/*!***************************************!*\
  !*** ./src/pages/api/get-accounts.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst PHYLLO_GET_ACCOUNTS_URL = \"https://api.sandbox.getphyllo.com/v1/accounts\";\n// Kindly create an env file and pass your crendentials from there.\nconst PHYLLO_CLIENT_ID = process.env.PHYLLO_CLIENT_ID;\nconst PHYLLO_SECRET_ID = process.env.PHYLLO_SECRET_ID;\nasync function handler(req, res) {\n    let headers = new Headers();\n    headers.set(\"Authorization\", \"Basic \" + btoa(PHYLLO_CLIENT_ID + \":\" + PHYLLO_SECRET_ID));\n    headers.set(\"Content-Type\", \"application/json\");\n    const { user_id  } = req.query;\n    if (req.method === \"GET\") {\n        try {\n            const response = await fetch(`${PHYLLO_GET_ACCOUNTS_URL}?user_id=${user_id}`, {\n                method: \"GET\",\n                headers: headers\n            });\n            const result = await response.json();\n            return res.status(response.status).json(result);\n        // return res.json({ userId: req.query });\n        } catch (err) {\n            return res.status(err.status).json(err);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2dldC1hY2NvdW50cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkVBQTZFO0FBQzdFLE1BQU1BLDBCQUEwQjtBQUVoQyxtRUFBbUU7QUFDbkUsTUFBTUMsbUJBQW1CQyxRQUFRQyxHQUFHLENBQUNGLGdCQUFnQjtBQUNyRCxNQUFNRyxtQkFBbUJGLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCO0FBRXRDLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlDLFVBQVUsSUFBSUM7SUFDbEJELFFBQVFFLEdBQUcsQ0FBQyxpQkFBaUIsV0FBV0MsS0FBS1YsbUJBQW1CLE1BQU1HO0lBQ3RFSSxRQUFRRSxHQUFHLENBQUMsZ0JBQWdCO0lBRTVCLE1BQU0sRUFBRUUsUUFBTyxFQUFFLEdBQUdOLElBQUlPLEtBQUs7SUFDN0IsSUFBSVAsSUFBSVEsTUFBTSxLQUFLLE9BQU87UUFDeEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxDQUFDLEVBQUVoQix3QkFBd0IsU0FBUyxFQUFFWSxRQUFRLENBQUMsRUFBRTtnQkFDNUVFLFFBQVE7Z0JBQ1JOLFNBQVNBO1lBQ1g7WUFDQSxNQUFNUyxTQUFTLE1BQU1GLFNBQVNHLElBQUk7WUFDbEMsT0FBT1gsSUFBSVksTUFBTSxDQUFDSixTQUFTSSxNQUFNLEVBQUVELElBQUksQ0FBQ0Q7UUFDeEMsMENBQTBDO1FBQzVDLEVBQUUsT0FBT0csS0FBSztZQUNaLE9BQU9iLElBQUlZLE1BQU0sQ0FBQ0MsSUFBSUQsTUFBTSxFQUFFRCxJQUFJLENBQUNFO1FBQ3JDO0lBQ0YsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waHlsbG8tbmV4dC1zYW1wbGUvLi9zcmMvcGFnZXMvYXBpL2dldC1hY2NvdW50cy5qcz9jN2Q4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5jb25zdCBQSFlMTE9fR0VUX0FDQ09VTlRTX1VSTCA9IFwiaHR0cHM6Ly9hcGkuc2FuZGJveC5nZXRwaHlsbG8uY29tL3YxL2FjY291bnRzXCI7XG5cbi8vIEtpbmRseSBjcmVhdGUgYW4gZW52IGZpbGUgYW5kIHBhc3MgeW91ciBjcmVuZGVudGlhbHMgZnJvbSB0aGVyZS5cbmNvbnN0IFBIWUxMT19DTElFTlRfSUQgPSBwcm9jZXNzLmVudi5QSFlMTE9fQ0xJRU5UX0lEO1xuY29uc3QgUEhZTExPX1NFQ1JFVF9JRCA9IHByb2Nlc3MuZW52LlBIWUxMT19TRUNSRVRfSUQ7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICBoZWFkZXJzLnNldChcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBcIiArIGJ0b2EoUEhZTExPX0NMSUVOVF9JRCArIFwiOlwiICsgUEhZTExPX1NFQ1JFVF9JRCkpO1xuICBoZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG5cbiAgY29uc3QgeyB1c2VyX2lkIH0gPSByZXEucXVlcnk7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7UEhZTExPX0dFVF9BQ0NPVU5UU19VUkx9P3VzZXJfaWQ9JHt1c2VyX2lkfWAsIHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgfSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhyZXNwb25zZS5zdGF0dXMpLmpzb24ocmVzdWx0KTtcbiAgICAgIC8vIHJldHVybiByZXMuanNvbih7IHVzZXJJZDogcmVxLnF1ZXJ5IH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZXJyLnN0YXR1cykuanNvbihlcnIpO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIlBIWUxMT19HRVRfQUNDT1VOVFNfVVJMIiwiUEhZTExPX0NMSUVOVF9JRCIsInByb2Nlc3MiLCJlbnYiLCJQSFlMTE9fU0VDUkVUX0lEIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImhlYWRlcnMiLCJIZWFkZXJzIiwic2V0IiwiYnRvYSIsInVzZXJfaWQiLCJxdWVyeSIsIm1ldGhvZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXN1bHQiLCJqc29uIiwic3RhdHVzIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/get-accounts.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/get-accounts.js"));
module.exports = __webpack_exports__;

})();