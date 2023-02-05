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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst PHYLLO_GET_ACCOUNTS_URL = \"https://api.sandbox.getphyllo.com/v1/accounts\";\n// Kindly create an env file and pass your crendentials from there.\nconst PHYLLO_CLIENT_ID = \"3b2c7976-cfed-4b5c-9e41-a681245a9ec6\";\nconst PHYLLO_SECRET_ID = \"412e46c1-2e34-41ae-ae05-d6c3e6f0e04e\";\nasync function handler(req, res) {\n    let headers = new Headers();\n    headers.set(\"Authorization\", \"Basic \" + btoa(PHYLLO_CLIENT_ID + \":\" + PHYLLO_SECRET_ID));\n    headers.set(\"Content-Type\", \"application/json\");\n    const { user_id  } = req.query;\n    if (req.method === \"GET\") {\n        try {\n            const response = await fetch(`${PHYLLO_GET_ACCOUNTS_URL}?user_id=${user_id}`, {\n                method: \"GET\",\n                headers: headers\n            });\n            const result = await response.json();\n            return res.status(response.status).json(result);\n        // return res.json({ userId: req.query });\n        } catch (err) {\n            return res.status(err.status).json(err);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2dldC1hY2NvdW50cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkVBQTZFO0FBQzdFLE1BQU1BLDBCQUEwQjtBQUVoQyxtRUFBbUU7QUFDbkUsTUFBTUMsbUJBQW1CQyxzQ0FBd0M7QUFDakUsTUFBTUcsbUJBQW1CSCxzQ0FBd0M7QUFFbEQsZUFBZUssUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUMsVUFBVSxJQUFJQztJQUNsQkQsUUFBUUUsR0FBRyxDQUFDLGlCQUFpQixXQUFXQyxLQUFLWixtQkFBbUIsTUFBTUk7SUFDdEVLLFFBQVFFLEdBQUcsQ0FBQyxnQkFBZ0I7SUFFNUIsTUFBTSxFQUFFRSxRQUFPLEVBQUUsR0FBR04sSUFBSU8sS0FBSztJQUM3QixJQUFJUCxJQUFJUSxNQUFNLEtBQUssT0FBTztRQUN4QixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLENBQUMsRUFBRWxCLHdCQUF3QixTQUFTLEVBQUVjLFFBQVEsQ0FBQyxFQUFFO2dCQUM1RUUsUUFBUTtnQkFDUk4sU0FBU0E7WUFDWDtZQUNBLE1BQU1TLFNBQVMsTUFBTUYsU0FBU0csSUFBSTtZQUNsQyxPQUFPWCxJQUFJWSxNQUFNLENBQUNKLFNBQVNJLE1BQU0sRUFBRUQsSUFBSSxDQUFDRDtRQUN4QywwQ0FBMEM7UUFDNUMsRUFBRSxPQUFPRyxLQUFLO1lBQ1osT0FBT2IsSUFBSVksTUFBTSxDQUFDQyxJQUFJRCxNQUFNLEVBQUVELElBQUksQ0FBQ0U7UUFDckM7SUFDRixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BoeWxsby1uZXh0LXNhbXBsZS8uL3NyYy9wYWdlcy9hcGkvZ2V0LWFjY291bnRzLmpzP2M3ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmNvbnN0IFBIWUxMT19HRVRfQUNDT1VOVFNfVVJMID0gXCJodHRwczovL2FwaS5zYW5kYm94LmdldHBoeWxsby5jb20vdjEvYWNjb3VudHNcIjtcblxuLy8gS2luZGx5IGNyZWF0ZSBhbiBlbnYgZmlsZSBhbmQgcGFzcyB5b3VyIGNyZW5kZW50aWFscyBmcm9tIHRoZXJlLlxuY29uc3QgUEhZTExPX0NMSUVOVF9JRCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BIWUxMT19DTElFTlRfSUQ7XG5jb25zdCBQSFlMTE9fU0VDUkVUX0lEID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUEhZTExPX1NFQ1JFVF9JRDtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gIGhlYWRlcnMuc2V0KFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIFwiICsgYnRvYShQSFlMTE9fQ0xJRU5UX0lEICsgXCI6XCIgKyBQSFlMTE9fU0VDUkVUX0lEKSk7XG4gIGhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblxuICBjb25zdCB7IHVzZXJfaWQgfSA9IHJlcS5xdWVyeTtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtQSFlMTE9fR0VUX0FDQ09VTlRTX1VSTH0/dXNlcl9pZD0ke3VzZXJfaWR9YCwge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKHJlc3BvbnNlLnN0YXR1cykuanNvbihyZXN1bHQpO1xuICAgICAgLy8gcmV0dXJuIHJlcy5qc29uKHsgdXNlcklkOiByZXEucXVlcnkgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlcnIuc3RhdHVzKS5qc29uKGVycik7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiUEhZTExPX0dFVF9BQ0NPVU5UU19VUkwiLCJQSFlMTE9fQ0xJRU5UX0lEIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1BIWUxMT19DTElFTlRfSUQiLCJQSFlMTE9fU0VDUkVUX0lEIiwiTkVYVF9QVUJMSUNfUEhZTExPX1NFQ1JFVF9JRCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJoZWFkZXJzIiwiSGVhZGVycyIsInNldCIsImJ0b2EiLCJ1c2VyX2lkIiwicXVlcnkiLCJtZXRob2QiLCJyZXNwb25zZSIsImZldGNoIiwicmVzdWx0IiwianNvbiIsInN0YXR1cyIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/get-accounts.js\n");

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