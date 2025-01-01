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
exports.id = "app/api/post/edit/route";
exports.ids = ["app/api/post/edit/route"];
exports.modules = {

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpost%2Fedit%2Froute&page=%2Fapi%2Fpost%2Fedit%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpost%2Fedit%2Froute.js&appDir=C%3A%5C%EC%BD%94%EB%94%A9%5Cp5%5Cforum%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5C%EC%BD%94%EB%94%A9%5Cp5%5Cforum&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpost%2Fedit%2Froute&page=%2Fapi%2Fpost%2Fedit%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpost%2Fedit%2Froute.js&appDir=C%3A%5C%EC%BD%94%EB%94%A9%5Cp5%5Cforum%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5C%EC%BD%94%EB%94%A9%5Cp5%5Cforum&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_p5_forum_app_api_post_edit_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/post/edit/route.js */ \"(rsc)/./app/api/post/edit/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/post/edit/route\",\n        pathname: \"/api/post/edit\",\n        filename: \"route\",\n        bundlePath: \"app/api/post/edit/route\"\n    },\n    resolvedPagePath: \"C:\\\\코딩\\\\p5\\\\forum\\\\app\\\\api\\\\post\\\\edit\\\\route.js\",\n    nextConfigOutput,\n    userland: C_p5_forum_app_api_post_edit_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwb3N0JTJGZWRpdCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcG9zdCUyRmVkaXQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwb3N0JTJGZWRpdCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDJUVDJUJEJTk0JUVCJTk0JUE5JTVDcDUlNUNmb3J1bSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1QyVFQyVCRCU5NCVFQiU5NCVBOSU1Q3A1JTVDZm9ydW0maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ0M7QUFDOUU7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXOy9lOuUqVxcXFxwNVxcXFxmb3J1bVxcXFxhcHBcXFxcYXBpXFxcXHBvc3RcXFxcZWRpdFxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcG9zdC9lZGl0L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcG9zdC9lZGl0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9wb3N0L2VkaXQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFzsvZTrlKlcXFxccDVcXFxcZm9ydW1cXFxcYXBwXFxcXGFwaVxcXFxwb3N0XFxcXGVkaXRcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpost%2Fedit%2Froute&page=%2Fapi%2Fpost%2Fedit%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpost%2Fedit%2Froute.js&appDir=C%3A%5C%EC%BD%94%EB%94%A9%5Cp5%5Cforum%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5C%EC%BD%94%EB%94%A9%5Cp5%5Cforum&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./app/api/post/edit/route.js":
/*!************************************!*\
  !*** ./app/api/post/edit/route.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _util_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/database */ \"(rsc)/./app/util/database.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function POST(request) {\n    try {\n        const db = (await _util_database__WEBPACK_IMPORTED_MODULE_0__.connectDB).db('forum');\n        const data = await request.json();\n        if (!data.id || !data.title || !data.content) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                success: false,\n                message: '필수 필드가 누락되었습니다'\n            }, {\n                status: 400\n            });\n        }\n        const objectId = new mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId(data.id);\n        const updateData = {\n            title: data.title,\n            content: data.content,\n            updatedAt: new Date().toISOString()\n        };\n        // files 데이터가 있는 경우에만 업데이트\n        if (data.files) {\n            updateData.files = Array.isArray(data.files) ? data.files : [];\n        }\n        // MongoDB 데이터 업데이트\n        const result = await db.collection('posts').updateOne({\n            _id: objectId\n        }, {\n            $set: updateData\n        });\n        if (result.matchedCount === 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                success: false,\n                message: '게시글을 찾을 수 없습니다'\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            success: true,\n            message: '게시글이 수정되었습니다'\n        });\n    } catch (error) {\n        console.error('Edit error:', error);\n        if (error.message.includes('ObjectId')) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                success: false,\n                message: '잘못된 게시글 ID입니다'\n            }, {\n                status: 400\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            success: false,\n            message: '서버 에러가 발생했습니다'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Bvc3QvZWRpdC9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUNoQjtBQUNRO0FBRXBDLGVBQWVHLEtBQUtDLE9BQU87SUFDOUIsSUFBSTtRQUNBLE1BQU1DLEtBQUssQ0FBQyxNQUFNTCxxREFBUSxFQUFHSyxFQUFFLENBQUM7UUFDaEMsTUFBTUMsT0FBTyxNQUFNRixRQUFRRyxJQUFJO1FBRS9CLElBQUksQ0FBQ0QsS0FBS0UsRUFBRSxJQUFJLENBQUNGLEtBQUtHLEtBQUssSUFBSSxDQUFDSCxLQUFLSSxPQUFPLEVBQUU7WUFDMUMsT0FBT1IscURBQVlBLENBQUNLLElBQUksQ0FBQztnQkFDckJJLFNBQVM7Z0JBQ1RDLFNBQVM7WUFDYixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDckI7UUFFQSxNQUFNQyxXQUFXLElBQUliLDZDQUFRQSxDQUFDSyxLQUFLRSxFQUFFO1FBRXJDLE1BQU1PLGFBQWE7WUFDZk4sT0FBT0gsS0FBS0csS0FBSztZQUNqQkMsU0FBU0osS0FBS0ksT0FBTztZQUNyQk0sV0FBVyxJQUFJQyxPQUFPQyxXQUFXO1FBQ3JDO1FBRUEsMEJBQTBCO1FBQzFCLElBQUlaLEtBQUthLEtBQUssRUFBRTtZQUNaSixXQUFXSSxLQUFLLEdBQUdDLE1BQU1DLE9BQU8sQ0FBQ2YsS0FBS2EsS0FBSyxJQUFJYixLQUFLYSxLQUFLLEdBQUcsRUFBRTtRQUNsRTtRQUVBLG1CQUFtQjtRQUNuQixNQUFNRyxTQUFTLE1BQU1qQixHQUFHa0IsVUFBVSxDQUFDLFNBQVNDLFNBQVMsQ0FDakQ7WUFBRUMsS0FBS1g7UUFBUyxHQUNoQjtZQUFFWSxNQUFNWDtRQUFXO1FBR3ZCLElBQUlPLE9BQU9LLFlBQVksS0FBSyxHQUFHO1lBQzNCLE9BQU96QixxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO2dCQUNyQkksU0FBUztnQkFDVEMsU0FBUztZQUNiLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNyQjtRQUVBLE9BQU9YLHFEQUFZQSxDQUFDSyxJQUFJLENBQUM7WUFDckJJLFNBQVM7WUFDVEMsU0FBUztRQUNiO0lBRUosRUFBRSxPQUFPZ0IsT0FBTztRQUNaQyxRQUFRRCxLQUFLLENBQUMsZUFBZUE7UUFDN0IsSUFBSUEsTUFBTWhCLE9BQU8sQ0FBQ2tCLFFBQVEsQ0FBQyxhQUFhO1lBQ3BDLE9BQU81QixxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO2dCQUNyQkksU0FBUztnQkFDVEMsU0FBUztZQUNiLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNyQjtRQUNBLE9BQU9YLHFEQUFZQSxDQUFDSyxJQUFJLENBQUM7WUFDckJJLFNBQVM7WUFDVEMsU0FBUztRQUNiLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3JCO0FBQ0oiLCJzb3VyY2VzIjpbIkM6XFzsvZTrlKlcXHA1XFxmb3J1bVxcYXBwXFxhcGlcXHBvc3RcXGVkaXRcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3REQiB9IGZyb20gXCIuLi8uLi8uLi91dGlsL2RhdGFiYXNlXCI7XHJcbmltcG9ydCB7IE9iamVjdElkIH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRiID0gKGF3YWl0IGNvbm5lY3REQikuZGIoJ2ZvcnVtJyk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG5cclxuICAgICAgICBpZiAoIWRhdGEuaWQgfHwgIWRhdGEudGl0bGUgfHwgIWRhdGEuY29udGVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn7ZWE7IiYIO2VhOuTnOqwgCDriITrnb3rkJjsl4jsirXri4jri6QnXHJcbiAgICAgICAgICAgIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBvYmplY3RJZCA9IG5ldyBPYmplY3RJZChkYXRhLmlkKTtcclxuXHJcbiAgICAgICAgY29uc3QgdXBkYXRlRGF0YSA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuICAgICAgICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gZmlsZXMg642w7J207YSw6rCAIOyeiOuKlCDqsr3smrDsl5Drp4wg7JeF642w7J207Yq4XHJcbiAgICAgICAgaWYgKGRhdGEuZmlsZXMpIHtcclxuICAgICAgICAgICAgdXBkYXRlRGF0YS5maWxlcyA9IEFycmF5LmlzQXJyYXkoZGF0YS5maWxlcykgPyBkYXRhLmZpbGVzIDogW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBNb25nb0RCIOuNsOydtO2EsCDsl4XrjbDsnbTtirhcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwb3N0cycpLnVwZGF0ZU9uZShcclxuICAgICAgICAgICAgeyBfaWQ6IG9iamVjdElkIH0sXHJcbiAgICAgICAgICAgIHsgJHNldDogdXBkYXRlRGF0YSB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdC5tYXRjaGVkQ291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+qyjOyLnOq4gOydhCDssL7snYQg7IiYIOyXhuyKteuLiOuLpCdcclxuICAgICAgICAgICAgfSwgeyBzdGF0dXM6IDQwNCB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICfqsozsi5zquIDsnbQg7IiY7KCV65CY7JeI7Iq164uI64ukJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRWRpdCBlcnJvcjonLCBlcnJvcik7XHJcbiAgICAgICAgaWYgKGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ09iamVjdElkJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+yemOuqu+uQnCDqsozsi5zquIAgSUTsnoXri4jri6QnXHJcbiAgICAgICAgICAgIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAn7ISc67KEIOyXkOufrOqwgCDrsJzsg53tlojsirXri4jri6QnXHJcbiAgICAgICAgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiY29ubmVjdERCIiwiT2JqZWN0SWQiLCJOZXh0UmVzcG9uc2UiLCJQT1NUIiwicmVxdWVzdCIsImRiIiwiZGF0YSIsImpzb24iLCJpZCIsInRpdGxlIiwiY29udGVudCIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwic3RhdHVzIiwib2JqZWN0SWQiLCJ1cGRhdGVEYXRhIiwidXBkYXRlZEF0IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiZmlsZXMiLCJBcnJheSIsImlzQXJyYXkiLCJyZXN1bHQiLCJjb2xsZWN0aW9uIiwidXBkYXRlT25lIiwiX2lkIiwiJHNldCIsIm1hdGNoZWRDb3VudCIsImVycm9yIiwiY29uc29sZSIsImluY2x1ZGVzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/post/edit/route.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpost%2Fedit%2Froute&page=%2Fapi%2Fpost%2Fedit%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpost%2Fedit%2Froute.js&appDir=C%3A%5C%EC%BD%94%EB%94%A9%5Cp5%5Cforum%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5C%EC%BD%94%EB%94%A9%5Cp5%5Cforum&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();