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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst PHYLLO_CREATE_USER_URL = \"https://api.sandbox.getphyllo.com/v1/users\";\n// Kindly create an env file and pass your crendentials from there.\nconst PHYLLO_CLIENT_ID = process.env.PHYLLO_CLIENT_ID;\nconst PHYLLO_SECRET_ID = process.env.PHYLLO_SECRET_ID;\nasync function handler(req, res) {\n    let headers = new Headers();\n    headers.set(\"Authorization\", \"Basic \" + btoa(PHYLLO_CLIENT_ID + \":\" + PHYLLO_SECRET_ID));\n    headers.set(\"Content-Type\", \"application/json\");\n    if (req.method === \"POST\") {\n        try {\n            const response = await fetch(`${PHYLLO_CREATE_USER_URL}`, {\n                method: \"POST\",\n                body: JSON.stringify(req.body),\n                headers: headers\n            });\n            const result = await response.json();\n            return res.status(response.status).json(result);\n        } catch (err) {\n            return res.status(err.status).json(err);\n        }\n    }\n    if (req.method === \"GET\") {\n        try {\n            const response1 = await fetch(`${PHYLLO_CREATE_USER_URL}`, {\n                method: \"GET\",\n                headers: headers\n            });\n            const result1 = await response1.json();\n            return res.status(response1.status).json(result1);\n        } catch (err1) {\n            return res.status(err1.status).json(err1);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NyZWF0ZS11c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSw2RUFBNkU7QUFDN0UsTUFBTUEseUJBQXlCO0FBRS9CLG1FQUFtRTtBQUNuRSxNQUFNQyxtQkFBbUJDLFFBQVFDLEdBQUcsQ0FBQ0YsZ0JBQWdCO0FBQ3JELE1BQU1HLG1CQUFtQkYsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0I7QUFFdEMsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUMsVUFBVSxJQUFJQztJQUNsQkQsUUFBUUUsR0FBRyxDQUFDLGlCQUFpQixXQUFXQyxLQUFLVixtQkFBbUIsTUFBTUc7SUFDdEVJLFFBQVFFLEdBQUcsQ0FBQyxnQkFBZ0I7SUFDNUIsSUFBSUosSUFBSU0sTUFBTSxLQUFLLFFBQVE7UUFDekIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxDQUFDLEVBQUVkLHVCQUF1QixDQUFDLEVBQUU7Z0JBQ3hEWSxRQUFRO2dCQUNSRyxNQUFNQyxLQUFLQyxTQUFTLENBQUNYLElBQUlTLElBQUk7Z0JBQzdCUCxTQUFTQTtZQUNYO1lBQ0EsTUFBTVUsU0FBUyxNQUFNTCxTQUFTTSxJQUFJO1lBQ2xDLE9BQU9aLElBQUlhLE1BQU0sQ0FBQ1AsU0FBU08sTUFBTSxFQUFFRCxJQUFJLENBQUNEO1FBQzFDLEVBQUUsT0FBT0csS0FBSztZQUNaLE9BQU9kLElBQUlhLE1BQU0sQ0FBQ0MsSUFBSUQsTUFBTSxFQUFFRCxJQUFJLENBQUNFO1FBQ3JDO0lBQ0YsQ0FBQztJQUNELElBQUlmLElBQUlNLE1BQU0sS0FBSyxPQUFPO1FBQ3hCLElBQUk7WUFDRixNQUFNQyxZQUFXLE1BQU1DLE1BQU0sQ0FBQyxFQUFFZCx1QkFBdUIsQ0FBQyxFQUFFO2dCQUN4RFksUUFBUTtnQkFDUkosU0FBU0E7WUFDWDtZQUNBLE1BQU1VLFVBQVMsTUFBTUwsVUFBU00sSUFBSTtZQUNsQyxPQUFPWixJQUFJYSxNQUFNLENBQUNQLFVBQVNPLE1BQU0sRUFBRUQsSUFBSSxDQUFDRDtRQUMxQyxFQUFFLE9BQU9HLE1BQUs7WUFDWixPQUFPZCxJQUFJYSxNQUFNLENBQUNDLEtBQUlELE1BQU0sRUFBRUQsSUFBSSxDQUFDRTtRQUNyQztJQUNGLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGh5bGxvLW5leHQtc2FtcGxlLy4vc3JjL3BhZ2VzL2FwaS9jcmVhdGUtdXNlci5qcz9jY2Q5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5jb25zdCBQSFlMTE9fQ1JFQVRFX1VTRVJfVVJMID0gXCJodHRwczovL2FwaS5zYW5kYm94LmdldHBoeWxsby5jb20vdjEvdXNlcnNcIjtcblxuLy8gS2luZGx5IGNyZWF0ZSBhbiBlbnYgZmlsZSBhbmQgcGFzcyB5b3VyIGNyZW5kZW50aWFscyBmcm9tIHRoZXJlLlxuY29uc3QgUEhZTExPX0NMSUVOVF9JRCA9IHByb2Nlc3MuZW52LlBIWUxMT19DTElFTlRfSUQ7XG5jb25zdCBQSFlMTE9fU0VDUkVUX0lEID0gcHJvY2Vzcy5lbnYuUEhZTExPX1NFQ1JFVF9JRDtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gIGhlYWRlcnMuc2V0KFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIFwiICsgYnRvYShQSFlMTE9fQ0xJRU5UX0lEICsgXCI6XCIgKyBQSFlMTE9fU0VDUkVUX0lEKSk7XG4gIGhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7UEhZTExPX0NSRUFURV9VU0VSX1VSTH1gLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcS5ib2R5KSxcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzKS5qc29uKHJlc3VsdCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlcnIuc3RhdHVzKS5qc29uKGVycik7XG4gICAgfVxuICB9XG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7UEhZTExPX0NSRUFURV9VU0VSX1VSTH1gLCB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzKS5qc29uKHJlc3VsdCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlcnIuc3RhdHVzKS5qc29uKGVycik7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiUEhZTExPX0NSRUFURV9VU0VSX1VSTCIsIlBIWUxMT19DTElFTlRfSUQiLCJwcm9jZXNzIiwiZW52IiwiUEhZTExPX1NFQ1JFVF9JRCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJoZWFkZXJzIiwiSGVhZGVycyIsInNldCIsImJ0b2EiLCJtZXRob2QiLCJyZXNwb25zZSIsImZldGNoIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJqc29uIiwic3RhdHVzIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/create-user.js\n");

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