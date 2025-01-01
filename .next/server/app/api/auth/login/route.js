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
exports.id = "app/api/auth/login/route";
exports.ids = ["app/api/auth/login/route"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.js&appDir=C%3A%5C%EC%BD%94%EB%94%A9%5Cp5%5Cforum%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5C%EC%BD%94%EB%94%A9%5Cp5%5Cforum&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.js&appDir=C%3A%5C%EC%BD%94%EB%94%A9%5Cp5%5Cforum%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5C%EC%BD%94%EB%94%A9%5Cp5%5Cforum&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_p5_forum_app_api_auth_login_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/login/route.js */ \"(rsc)/./app/api/auth/login/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/login/route\",\n        pathname: \"/api/auth/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/login/route\"\n    },\n    resolvedPagePath: \"C:\\\\코딩\\\\p5\\\\forum\\\\app\\\\api\\\\auth\\\\login\\\\route.js\",\n    nextConfigOutput,\n    userland: C_p5_forum_app_api_auth_login_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGbG9naW4lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDJUVDJUJEJTk0JUVCJTk0JUE5JTVDcDUlNUNmb3J1bSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1QyVFQyVCRCU5NCVFQiU5NCVBOSU1Q3A1JTVDZm9ydW0maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ0U7QUFDL0U7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXOy9lOuUqVxcXFxwNVxcXFxmb3J1bVxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcbG9naW5cXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvbG9naW4vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL2xvZ2luXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL2xvZ2luL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxc7L2U65SpXFxcXHA1XFxcXGZvcnVtXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxsb2dpblxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.js&appDir=C%3A%5C%EC%BD%94%EB%94%A9%5Cp5%5Cforum%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5C%EC%BD%94%EB%94%A9%5Cp5%5Cforum&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/auth/login/route.js":
/*!*************************************!*\
  !*** ./app/api/auth/login/route.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _util_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/database */ \"(rsc)/./app/util/database.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function POST(request) {\n    try {\n        const { username, password } = await request.json();\n        console.log('Login attempt:', {\n            username,\n            passwordLength: password?.length\n        });\n        if (!username || !password) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                message: '사용자 이름과 비밀번호를 모두 입력해주세요'\n            }, {\n                status: 400\n            });\n        }\n        const db = (await _util_database__WEBPACK_IMPORTED_MODULE_0__.connectDB).db('forum');\n        const user = await db.collection('users').findOne({\n            $or: [\n                {\n                    username: username\n                },\n                {\n                    nickname: username\n                }\n            ]\n        });\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                message: '사용자를 찾을 수 없습니다'\n            }, {\n                status: 401\n            });\n        }\n        // 저장된 해시된 비밀번호가 없는 경우\n        if (!user.password) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                message: '비밀번호가 설정되지 않았습니다'\n            }, {\n                status: 401\n            });\n        }\n        // 비밀번호 검증 전 데이터 확인\n        console.log('Login verification:', {\n            providedPassword: password,\n            storedHash: user.password?.slice(0, 10) + '...',\n            passwordType: typeof password\n        });\n        // 테스트를 위해 직접 비교 - 나중에 다시 활성화 필요!\n        const isValid = password === user.password;\n        // const isValid = await bcrypt.compare(String(password), user.password); // 원래 코드\n        console.log('Login test mode:', {\n            inputPassword: password,\n            storedPassword: user.password,\n            isValid: isValid\n        });\n        // 이 부분 제거 또는 수정 (passwordString이 정의되지 않음)\n        // console.log('Password verification details:', {\n        //     attemptedPassword: passwordString,\n        //     hashComparison: isValid,\n        //     passwordLength: passwordString.length\n        // });\n        if (!isValid) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                message: '비밀번호가 일치하지 않습니다'\n            }, {\n                status: 401\n            });\n        }\n        // 로그인 성공\n        const userData = {\n            _id: user._id.toString(),\n            username: user.username,\n            nickname: user.nickname || user.username,\n            role: user.role || 'user'\n        };\n        console.log('Login successful for:', userData.username);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json(userData);\n    } catch (error) {\n        console.error('Login error details:', {\n            error: error.message,\n            stack: error.stack\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: '로그인 처리 중 오류가 발생했습니다',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvbG9naW4vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDdkI7QUFDZTtBQUVwQyxlQUFlRyxLQUFLQyxPQUFPO0lBQzlCLElBQUk7UUFDQSxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFLEdBQUcsTUFBTUYsUUFBUUcsSUFBSTtRQUVqREMsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQjtZQUFFSjtZQUFVSyxnQkFBZ0JKLFVBQVVLO1FBQU87UUFFM0UsSUFBSSxDQUFDTixZQUFZLENBQUNDLFVBQVU7WUFDeEIsT0FBT0oscURBQVlBLENBQUNLLElBQUksQ0FBQztnQkFDckJLLFNBQVM7WUFDYixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDckI7UUFFQSxNQUFNQyxLQUFLLENBQUMsTUFBTWQscURBQVEsRUFBR2MsRUFBRSxDQUFDO1FBQ2hDLE1BQU1DLE9BQU8sTUFBTUQsR0FBR0UsVUFBVSxDQUFDLFNBQVNDLE9BQU8sQ0FBQztZQUM5Q0MsS0FBSztnQkFDRDtvQkFBRWIsVUFBVUE7Z0JBQVM7Z0JBQ3JCO29CQUFFYyxVQUFVZDtnQkFBUzthQUN4QjtRQUNMO1FBRUEsSUFBSSxDQUFDVSxNQUFNO1lBQ1AsT0FBT2IscURBQVlBLENBQUNLLElBQUksQ0FBQztnQkFDckJLLFNBQVM7WUFDYixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDckI7UUFFQSxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDRSxLQUFLVCxRQUFRLEVBQUU7WUFDaEIsT0FBT0oscURBQVlBLENBQUNLLElBQUksQ0FBQztnQkFDckJLLFNBQVM7WUFDYixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDckI7UUFFQSxtQkFBbUI7UUFDbkJMLFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUI7WUFDL0JXLGtCQUFrQmQ7WUFDbEJlLFlBQVlOLEtBQUtULFFBQVEsRUFBRWdCLE1BQU0sR0FBRyxNQUFNO1lBQzFDQyxjQUFjLE9BQU9qQjtRQUN6QjtRQUVBLGlDQUFpQztRQUNqQyxNQUFNa0IsVUFBV2xCLGFBQWFTLEtBQUtULFFBQVE7UUFDM0Msa0ZBQWtGO1FBRWxGRSxRQUFRQyxHQUFHLENBQUMsb0JBQW9CO1lBQzVCZ0IsZUFBZW5CO1lBQ2ZvQixnQkFBZ0JYLEtBQUtULFFBQVE7WUFDN0JrQixTQUFTQTtRQUNiO1FBRUEsMENBQTBDO1FBQzFDLGtEQUFrRDtRQUNsRCx5Q0FBeUM7UUFDekMsK0JBQStCO1FBQy9CLDRDQUE0QztRQUM1QyxNQUFNO1FBRU4sSUFBSSxDQUFDQSxTQUFTO1lBQ1YsT0FBT3RCLHFEQUFZQSxDQUFDSyxJQUFJLENBQUM7Z0JBQ3JCSyxTQUFTO1lBQ2IsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3JCO1FBRUEsU0FBUztRQUNULE1BQU1jLFdBQVc7WUFDYkMsS0FBS2IsS0FBS2EsR0FBRyxDQUFDQyxRQUFRO1lBQ3RCeEIsVUFBVVUsS0FBS1YsUUFBUTtZQUN2QmMsVUFBVUosS0FBS0ksUUFBUSxJQUFJSixLQUFLVixRQUFRO1lBQ3hDeUIsTUFBTWYsS0FBS2UsSUFBSSxJQUFJO1FBQ3ZCO1FBRUF0QixRQUFRQyxHQUFHLENBQUMseUJBQXlCa0IsU0FBU3RCLFFBQVE7UUFDdEQsT0FBT0gscURBQVlBLENBQUNLLElBQUksQ0FBQ29CO0lBRTdCLEVBQUUsT0FBT0ksT0FBTztRQUNadkIsUUFBUXVCLEtBQUssQ0FBQyx3QkFBd0I7WUFDbENBLE9BQU9BLE1BQU1uQixPQUFPO1lBQ3BCb0IsT0FBT0QsTUFBTUMsS0FBSztRQUN0QjtRQUNBLE9BQU85QixxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO1lBQ3JCSyxTQUFTO1lBQ1RtQixPQUFPQSxNQUFNbkIsT0FBTztRQUN4QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNyQjtBQUNKIiwic291cmNlcyI6WyJDOlxc7L2U65SpXFxwNVxcZm9ydW1cXGFwcFxcYXBpXFxhdXRoXFxsb2dpblxccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdERCIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9kYXRhYmFzZSc7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0JztcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0xvZ2luIGF0dGVtcHQ6JywgeyB1c2VybmFtZSwgcGFzc3dvcmRMZW5ndGg6IHBhc3N3b3JkPy5sZW5ndGggfSk7XHJcblxyXG4gICAgICAgIGlmICghdXNlcm5hbWUgfHwgIXBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+yCrOyaqeyekCDsnbTrpoTqs7wg67mE67CA67KI7Zi466W8IOuqqOuRkCDsnoXroKXtlbTso7zshLjsmpQnIFxyXG4gICAgICAgICAgICB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGIgPSAoYXdhaXQgY29ubmVjdERCKS5kYignZm9ydW0nKTtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5maW5kT25lKHtcclxuICAgICAgICAgICAgJG9yOiBbXHJcbiAgICAgICAgICAgICAgICB7IHVzZXJuYW1lOiB1c2VybmFtZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBuaWNrbmFtZTogdXNlcm5hbWUgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfsgqzsmqnsnpDrpbwg7LC+7J2EIOyImCDsl4bsirXri4jri6QnIFxyXG4gICAgICAgICAgICB9LCB7IHN0YXR1czogNDAxIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g7KCA7J6l65CcIO2VtOyLnOuQnCDruYTrsIDrsojtmLjqsIAg7JeG64qUIOqyveyasFxyXG4gICAgICAgIGlmICghdXNlci5wYXNzd29yZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfruYTrsIDrsojtmLjqsIAg7ISk7KCV65CY7KeAIOyViuyVmOyKteuLiOuLpCcgXHJcbiAgICAgICAgICAgIH0sIHsgc3RhdHVzOiA0MDEgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDruYTrsIDrsojtmLgg6rKA7KadIOyghCDrjbDsnbTthLAg7ZmV7J24XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0xvZ2luIHZlcmlmaWNhdGlvbjonLCB7XHJcbiAgICAgICAgICAgIHByb3ZpZGVkUGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICAgICAgICBzdG9yZWRIYXNoOiB1c2VyLnBhc3N3b3JkPy5zbGljZSgwLCAxMCkgKyAnLi4uJyxcclxuICAgICAgICAgICAgcGFzc3dvcmRUeXBlOiB0eXBlb2YgcGFzc3dvcmRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g7YWM7Iqk7Yq466W8IOychO2VtCDsp4HsoJEg67mE6rWQIC0g64KY7KSR7JeQIOuLpOyLnCDtmZzshLHtmZQg7ZWE7JqUIVxyXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSAocGFzc3dvcmQgPT09IHVzZXIucGFzc3dvcmQpO1xyXG4gICAgICAgIC8vIGNvbnN0IGlzVmFsaWQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShTdHJpbmcocGFzc3dvcmQpLCB1c2VyLnBhc3N3b3JkKTsgLy8g7JuQ656YIOy9lOuTnFxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnTG9naW4gdGVzdCBtb2RlOicsIHtcclxuICAgICAgICAgICAgaW5wdXRQYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgICAgICAgIHN0b3JlZFBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICBpc1ZhbGlkOiBpc1ZhbGlkXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIOydtCDrtoDrtoQg7KCc6rGwIOuYkOuKlCDsiJjsoJUgKHBhc3N3b3JkU3RyaW5n7J20IOygleydmOuQmOyngCDslYrsnYwpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1Bhc3N3b3JkIHZlcmlmaWNhdGlvbiBkZXRhaWxzOicsIHtcclxuICAgICAgICAvLyAgICAgYXR0ZW1wdGVkUGFzc3dvcmQ6IHBhc3N3b3JkU3RyaW5nLFxyXG4gICAgICAgIC8vICAgICBoYXNoQ29tcGFyaXNvbjogaXNWYWxpZCxcclxuICAgICAgICAvLyAgICAgcGFzc3dvcmRMZW5ndGg6IHBhc3N3b3JkU3RyaW5nLmxlbmd0aFxyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn67mE67CA67KI7Zi46rCAIOydvOy5mO2VmOyngCDslYrsirXri4jri6QnIFxyXG4gICAgICAgICAgICB9LCB7IHN0YXR1czogNDAxIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g66Gc6re47J24IOyEseqztVxyXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0ge1xyXG4gICAgICAgICAgICBfaWQ6IHVzZXIuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogdXNlci5uaWNrbmFtZSB8fCB1c2VyLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICByb2xlOiB1c2VyLnJvbGUgfHwgJ3VzZXInXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0xvZ2luIHN1Y2Nlc3NmdWwgZm9yOicsIHVzZXJEYXRhLnVzZXJuYW1lKTtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24odXNlckRhdGEpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignTG9naW4gZXJyb3IgZGV0YWlsczonLCB7XHJcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgICBzdGFjazogZXJyb3Iuc3RhY2tcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBcclxuICAgICAgICAgICAgbWVzc2FnZTogJ+uhnOq3uOyduCDsspjrpqwg7KSRIOyYpOulmOqwgCDrsJzsg53tlojsirXri4jri6QnLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSBcclxuICAgICAgICB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImNvbm5lY3REQiIsImJjcnlwdCIsIk5leHRSZXNwb25zZSIsIlBPU1QiLCJyZXF1ZXN0IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwicGFzc3dvcmRMZW5ndGgiLCJsZW5ndGgiLCJtZXNzYWdlIiwic3RhdHVzIiwiZGIiLCJ1c2VyIiwiY29sbGVjdGlvbiIsImZpbmRPbmUiLCIkb3IiLCJuaWNrbmFtZSIsInByb3ZpZGVkUGFzc3dvcmQiLCJzdG9yZWRIYXNoIiwic2xpY2UiLCJwYXNzd29yZFR5cGUiLCJpc1ZhbGlkIiwiaW5wdXRQYXNzd29yZCIsInN0b3JlZFBhc3N3b3JkIiwidXNlckRhdGEiLCJfaWQiLCJ0b1N0cmluZyIsInJvbGUiLCJlcnJvciIsInN0YWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/login/route.js\n");

/***/ }),

/***/ "(rsc)/./app/util/database.js":
/*!******************************!*\
  !*** ./app/util/database.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error('Please add your Mongo URI to .env.local');\n}\nif (true) {\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\nconst connectDB = clientPromise;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvdXRpbC9kYXRhYmFzZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztBQUNuQyxNQUFNQyxVQUFVLENBQUM7QUFFakIsSUFBSUM7QUFDSixJQUFJQztBQUVKLElBQUksQ0FBQ0wsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUU7SUFDMUIsTUFBTSxJQUFJSSxNQUFNO0FBQ3BCO0FBRUEsSUFBSU4sSUFBc0MsRUFBRTtJQUN4QyxJQUFJLENBQUNPLE9BQU9DLG1CQUFtQixFQUFFO1FBQzdCSixTQUFTLElBQUlOLGdEQUFXQSxDQUFDQyxLQUFLSTtRQUM5QkksT0FBT0MsbUJBQW1CLEdBQUdKLE9BQU9LLE9BQU87SUFDL0M7SUFDQUosZ0JBQWdCRSxPQUFPQyxtQkFBbUI7QUFDOUMsT0FBTyxFQUdOO0FBRU0sTUFBTUUsWUFBWUwsY0FBYztBQUN2QyxpRUFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXOy9lOuUqVxccDVcXGZvcnVtXFxhcHBcXHV0aWxcXGRhdGFiYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XHJcblxyXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcclxuY29uc3Qgb3B0aW9ucyA9IHt9O1xyXG5cclxubGV0IGNsaWVudDtcclxubGV0IGNsaWVudFByb21pc2U7XHJcblxyXG5pZiAoIXByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBhZGQgeW91ciBNb25nbyBVUkkgdG8gLmVudi5sb2NhbCcpO1xyXG59XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcclxuICAgICAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICAgICAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XHJcbiAgICB9XHJcbiAgICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2U7XHJcbn0gZWxzZSB7XHJcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICAgIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29ubmVjdERCID0gY2xpZW50UHJvbWlzZTtcclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZTsiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJvcHRpb25zIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsIkVycm9yIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiLCJjb25uZWN0REIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/util/database.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.js&appDir=C%3A%5C%EC%BD%94%EB%94%A9%5Cp5%5Cforum%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5C%EC%BD%94%EB%94%A9%5Cp5%5Cforum&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();