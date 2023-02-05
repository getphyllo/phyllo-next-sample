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
exports.id = "pages/api/create-user";
exports.ids = ["pages/api/create-user"];
exports.modules = {

/***/ "(api)/./src/pages/api/create-user.js":
/*!**************************************!*\
  !*** ./src/pages/api/create-user.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst PHYLLO_CREATE_USER_URL = \"https://api.sandbox.getphyllo.com/v1/users\";\n// Kindly create an env file and pass your crendentials from there.\nconst PHYLLO_CLIENT_ID = \"3b2c7976-cfed-4b5c-9e41-a681245a9ec6\";\nconst PHYLLO_SECRET_ID = \"412e46c1-2e34-41ae-ae05-d6c3e6f0e04e\";\nasync function handler(req, res) {\n    let headers = new Headers();\n    headers.set(\"Authorization\", \"Basic \" + btoa(PHYLLO_CLIENT_ID + \":\" + PHYLLO_SECRET_ID));\n    headers.set(\"Content-Type\", \"application/json\");\n    if (req.method === \"POST\") {\n        try {\n            const response = await fetch(`${PHYLLO_CREATE_USER_URL}`, {\n                method: \"POST\",\n                body: JSON.stringify(req.body),\n                headers: headers\n            });\n            const result = await response.json();\n            return res.status(response.status).json(result);\n        } catch (err) {\n            return res.status(err.status).json(err);\n        }\n    }\n    if (req.method === \"GET\") {\n        try {\n            const response1 = await fetch(`${PHYLLO_CREATE_USER_URL}`, {\n                method: \"GET\",\n                headers: headers\n            });\n            const result1 = await response1.json();\n            return res.status(response1.status).json(result1);\n        } catch (err1) {\n            return res.status(err1.status).json(err1);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NyZWF0ZS11c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSw2RUFBNkU7QUFDN0UsTUFBTUEseUJBQXlCO0FBRS9CLG1FQUFtRTtBQUNuRSxNQUFNQyxtQkFBbUJDLHNDQUF3QztBQUNqRSxNQUFNRyxtQkFBbUJILHNDQUF3QztBQUVsRCxlQUFlSyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJQyxVQUFVLElBQUlDO0lBQ2xCRCxRQUFRRSxHQUFHLENBQUMsaUJBQWlCLFdBQVdDLEtBQUtaLG1CQUFtQixNQUFNSTtJQUN0RUssUUFBUUUsR0FBRyxDQUFDLGdCQUFnQjtJQUM1QixJQUFJSixJQUFJTSxNQUFNLEtBQUssUUFBUTtRQUN6QixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLENBQUMsRUFBRWhCLHVCQUF1QixDQUFDLEVBQUU7Z0JBQ3hEYyxRQUFRO2dCQUNSRyxNQUFNQyxLQUFLQyxTQUFTLENBQUNYLElBQUlTLElBQUk7Z0JBQzdCUCxTQUFTQTtZQUNYO1lBQ0EsTUFBTVUsU0FBUyxNQUFNTCxTQUFTTSxJQUFJO1lBQ2xDLE9BQU9aLElBQUlhLE1BQU0sQ0FBQ1AsU0FBU08sTUFBTSxFQUFFRCxJQUFJLENBQUNEO1FBQzFDLEVBQUUsT0FBT0csS0FBSztZQUNaLE9BQU9kLElBQUlhLE1BQU0sQ0FBQ0MsSUFBSUQsTUFBTSxFQUFFRCxJQUFJLENBQUNFO1FBQ3JDO0lBQ0YsQ0FBQztJQUNELElBQUlmLElBQUlNLE1BQU0sS0FBSyxPQUFPO1FBQ3hCLElBQUk7WUFDRixNQUFNQyxZQUFXLE1BQU1DLE1BQU0sQ0FBQyxFQUFFaEIsdUJBQXVCLENBQUMsRUFBRTtnQkFDeERjLFFBQVE7Z0JBQ1JKLFNBQVNBO1lBQ1g7WUFDQSxNQUFNVSxVQUFTLE1BQU1MLFVBQVNNLElBQUk7WUFDbEMsT0FBT1osSUFBSWEsTUFBTSxDQUFDUCxVQUFTTyxNQUFNLEVBQUVELElBQUksQ0FBQ0Q7UUFDMUMsRUFBRSxPQUFPRyxNQUFLO1lBQ1osT0FBT2QsSUFBSWEsTUFBTSxDQUFDQyxLQUFJRCxNQUFNLEVBQUVELElBQUksQ0FBQ0U7UUFDckM7SUFDRixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BoeWxsby1uZXh0LXNhbXBsZS8uL3NyYy9wYWdlcy9hcGkvY3JlYXRlLXVzZXIuanM/Y2NkOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuY29uc3QgUEhZTExPX0NSRUFURV9VU0VSX1VSTCA9IFwiaHR0cHM6Ly9hcGkuc2FuZGJveC5nZXRwaHlsbG8uY29tL3YxL3VzZXJzXCI7XG5cbi8vIEtpbmRseSBjcmVhdGUgYW4gZW52IGZpbGUgYW5kIHBhc3MgeW91ciBjcmVuZGVudGlhbHMgZnJvbSB0aGVyZS5cbmNvbnN0IFBIWUxMT19DTElFTlRfSUQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QSFlMTE9fQ0xJRU5UX0lEO1xuY29uc3QgUEhZTExPX1NFQ1JFVF9JRCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BIWUxMT19TRUNSRVRfSUQ7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICBoZWFkZXJzLnNldChcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBcIiArIGJ0b2EoUEhZTExPX0NMSUVOVF9JRCArIFwiOlwiICsgUEhZTExPX1NFQ1JFVF9JRCkpO1xuICBoZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke1BIWUxMT19DUkVBVEVfVVNFUl9VUkx9YCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXEuYm9keSksXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKHJlc3BvbnNlLnN0YXR1cykuanNvbihyZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZXJyLnN0YXR1cykuanNvbihlcnIpO1xuICAgIH1cbiAgfVxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke1BIWUxMT19DUkVBVEVfVVNFUl9VUkx9YCwge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKHJlc3BvbnNlLnN0YXR1cykuanNvbihyZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZXJyLnN0YXR1cykuanNvbihlcnIpO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIlBIWUxMT19DUkVBVEVfVVNFUl9VUkwiLCJQSFlMTE9fQ0xJRU5UX0lEIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1BIWUxMT19DTElFTlRfSUQiLCJQSFlMTE9fU0VDUkVUX0lEIiwiTkVYVF9QVUJMSUNfUEhZTExPX1NFQ1JFVF9JRCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJoZWFkZXJzIiwiSGVhZGVycyIsInNldCIsImJ0b2EiLCJtZXRob2QiLCJyZXNwb25zZSIsImZldGNoIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJqc29uIiwic3RhdHVzIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/create-user.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/create-user.js"));
module.exports = __webpack_exports__;

})();