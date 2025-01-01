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
exports.id = "app/api/comment/get/route";
exports.ids = ["app/api/comment/get/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcomment%2Fget%2Froute&page=%2Fapi%2Fcomment%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcomment%2Fget%2Froute.js&appDir=C%3A%5C%EC%BD%94%EB%94%A9%5Cp5%5Cforum%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5C%EC%BD%94%EB%94%A9%5Cp5%5Cforum&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcomment%2Fget%2Froute&page=%2Fapi%2Fcomment%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcomment%2Fget%2Froute.js&appDir=C%3A%5C%EC%BD%94%EB%94%A9%5Cp5%5Cforum%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5C%EC%BD%94%EB%94%A9%5Cp5%5Cforum&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_p5_forum_app_api_comment_get_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/comment/get/route.js */ \"(rsc)/./app/api/comment/get/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/comment/get/route\",\n        pathname: \"/api/comment/get\",\n        filename: \"route\",\n        bundlePath: \"app/api/comment/get/route\"\n    },\n    resolvedPagePath: \"C:\\\\코딩\\\\p5\\\\forum\\\\app\\\\api\\\\comment\\\\get\\\\route.js\",\n    nextConfigOutput,\n    userland: C_p5_forum_app_api_comment_get_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjb21tZW50JTJGZ2V0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjb21tZW50JTJGZ2V0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY29tbWVudCUyRmdldCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDJUVDJUJEJTk0JUVCJTk0JUE5JTVDcDUlNUNmb3J1bSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1QyVFQyVCRCU5NCVFQiU5NCVBOSU1Q3A1JTVDZm9ydW0maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ0c7QUFDaEY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXOy9lOuUqVxcXFxwNVxcXFxmb3J1bVxcXFxhcHBcXFxcYXBpXFxcXGNvbW1lbnRcXFxcZ2V0XFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jb21tZW50L2dldC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NvbW1lbnQvZ2V0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jb21tZW50L2dldC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXOy9lOuUqVxcXFxwNVxcXFxmb3J1bVxcXFxhcHBcXFxcYXBpXFxcXGNvbW1lbnRcXFxcZ2V0XFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcomment%2Fget%2Froute&page=%2Fapi%2Fcomment%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcomment%2Fget%2Froute.js&appDir=C%3A%5C%EC%BD%94%EB%94%A9%5Cp5%5Cforum%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5C%EC%BD%94%EB%94%A9%5Cp5%5Cforum&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./app/api/comment/get/route.js":
/*!**************************************!*\
  !*** ./app/api/comment/get/route.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _util_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/database */ \"(rsc)/./app/util/database.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function GET(request) {\n    try {\n        const db = (await _util_database__WEBPACK_IMPORTED_MODULE_0__.connectDB).db('forum');\n        const postId = request.nextUrl.searchParams.get('postId');\n        console.log('API: Fetching comments for postId:', postId); // 디버깅 1\n        if (!postId) {\n            console.error('API: Missing postId parameter');\n            return new Response(JSON.stringify({\n                error: 'Missing postId'\n            }), {\n                status: 400\n            });\n        }\n        const comments = await db.collection('comment').find({\n            postId: new mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId(postId)\n        }).toArray();\n        console.log('API: Found comments:', comments.length); // 디버깅 2\n        // 댓글 데이터 유효성 검사 및 변환\n        const processedComments = comments.map((comment)=>({\n                ...comment,\n                _id: comment._id.toString(),\n                postId: comment.postId.toString(),\n                author: comment.author || null,\n                content: comment.content || '',\n                createdAt: comment.createdAt || new Date(),\n                replies: (comment.replies || []).map((reply)=>({\n                        ...reply,\n                        _id: reply._id.toString(),\n                        author: reply.author || null\n                    }))\n            }));\n        console.log('API: Processed comments:', processedComments.length); // 디버깅 3\n        return new Response(JSON.stringify(processedComments), {\n            status: 200,\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        });\n    } catch (error) {\n        console.error('API Error:', error); // 디버깅 4\n        return new Response(JSON.stringify({\n            error: error.message\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NvbW1lbnQvZ2V0L3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW1EO0FBQ2hCO0FBQ1E7QUFFcEMsZUFBZUcsSUFBSUMsT0FBTztJQUM3QixJQUFJO1FBQ0EsTUFBTUMsS0FBSyxDQUFDLE1BQU1MLHFEQUFRLEVBQUdLLEVBQUUsQ0FBQztRQUNoQyxNQUFNQyxTQUFTRixRQUFRRyxPQUFPLENBQUNDLFlBQVksQ0FBQ0MsR0FBRyxDQUFDO1FBRWhEQyxRQUFRQyxHQUFHLENBQUMsc0NBQXNDTCxTQUFTLFFBQVE7UUFFbkUsSUFBSSxDQUFDQSxRQUFRO1lBQ1RJLFFBQVFFLEtBQUssQ0FBQztZQUNkLE9BQU8sSUFBSUMsU0FBU0MsS0FBS0MsU0FBUyxDQUFDO2dCQUFFSCxPQUFPO1lBQWlCLElBQUk7Z0JBQzdESSxRQUFRO1lBQ1o7UUFDSjtRQUVBLE1BQU1DLFdBQVcsTUFBTVosR0FBR2EsVUFBVSxDQUFDLFdBQ2hDQyxJQUFJLENBQUM7WUFBRWIsUUFBUSxJQUFJTCw2Q0FBUUEsQ0FBQ0s7UUFBUSxHQUNwQ2MsT0FBTztRQUVaVixRQUFRQyxHQUFHLENBQUMsd0JBQXdCTSxTQUFTSSxNQUFNLEdBQUcsUUFBUTtRQUU5RCxxQkFBcUI7UUFDckIsTUFBTUMsb0JBQW9CTCxTQUFTTSxHQUFHLENBQUNDLENBQUFBLFVBQVk7Z0JBQy9DLEdBQUdBLE9BQU87Z0JBQ1ZDLEtBQUtELFFBQVFDLEdBQUcsQ0FBQ0MsUUFBUTtnQkFDekJwQixRQUFRa0IsUUFBUWxCLE1BQU0sQ0FBQ29CLFFBQVE7Z0JBQy9CQyxRQUFRSCxRQUFRRyxNQUFNLElBQUk7Z0JBQzFCQyxTQUFTSixRQUFRSSxPQUFPLElBQUk7Z0JBQzVCQyxXQUFXTCxRQUFRSyxTQUFTLElBQUksSUFBSUM7Z0JBQ3BDQyxTQUFTLENBQUNQLFFBQVFPLE9BQU8sSUFBSSxFQUFFLEVBQUVSLEdBQUcsQ0FBQ1MsQ0FBQUEsUUFBVTt3QkFDM0MsR0FBR0EsS0FBSzt3QkFDUlAsS0FBS08sTUFBTVAsR0FBRyxDQUFDQyxRQUFRO3dCQUN2QkMsUUFBUUssTUFBTUwsTUFBTSxJQUFJO29CQUM1QjtZQUNKO1FBRUFqQixRQUFRQyxHQUFHLENBQUMsNEJBQTRCVyxrQkFBa0JELE1BQU0sR0FBRyxRQUFRO1FBRTNFLE9BQU8sSUFBSVIsU0FBU0MsS0FBS0MsU0FBUyxDQUFDTyxvQkFBb0I7WUFDbkROLFFBQVE7WUFDUmlCLFNBQVM7Z0JBQ0wsZ0JBQWdCO1lBQ3BCO1FBQ0o7SUFDSixFQUFFLE9BQU9yQixPQUFPO1FBQ1pGLFFBQVFFLEtBQUssQ0FBQyxjQUFjQSxRQUFRLFFBQVE7UUFDNUMsT0FBTyxJQUFJQyxTQUFTQyxLQUFLQyxTQUFTLENBQUM7WUFBRUgsT0FBT0EsTUFBTXNCLE9BQU87UUFBQyxJQUFJO1lBQzFEbEIsUUFBUTtRQUNaO0lBQ0o7QUFDSiIsInNvdXJjZXMiOlsiQzpcXOy9lOuUqVxccDVcXGZvcnVtXFxhcHBcXGFwaVxcY29tbWVudFxcZ2V0XFxyb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0REIgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbC9kYXRhYmFzZVwiO1xyXG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRiID0gKGF3YWl0IGNvbm5lY3REQikuZGIoJ2ZvcnVtJyk7XHJcbiAgICAgICAgY29uc3QgcG9zdElkID0gcmVxdWVzdC5uZXh0VXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3Bvc3RJZCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBUEk6IEZldGNoaW5nIGNvbW1lbnRzIGZvciBwb3N0SWQ6JywgcG9zdElkKTsgLy8g65SU67KE6rmFIDFcclxuXHJcbiAgICAgICAgaWYgKCFwb3N0SWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJOiBNaXNzaW5nIHBvc3RJZCBwYXJhbWV0ZXInKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IGVycm9yOiAnTWlzc2luZyBwb3N0SWQnIH0pLCB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IDQwMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgZGIuY29sbGVjdGlvbignY29tbWVudCcpXHJcbiAgICAgICAgICAgIC5maW5kKHsgcG9zdElkOiBuZXcgT2JqZWN0SWQocG9zdElkKSB9KVxyXG4gICAgICAgICAgICAudG9BcnJheSgpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnQVBJOiBGb3VuZCBjb21tZW50czonLCBjb21tZW50cy5sZW5ndGgpOyAvLyDrlJTrsoTquYUgMlxyXG5cclxuICAgICAgICAvLyDrjJPquIAg642w7J207YSwIOycoO2aqOyEsSDqsoDsgqwg67CPIOuzgO2ZmFxyXG4gICAgICAgIGNvbnN0IHByb2Nlc3NlZENvbW1lbnRzID0gY29tbWVudHMubWFwKGNvbW1lbnQgPT4gKHtcclxuICAgICAgICAgICAgLi4uY29tbWVudCxcclxuICAgICAgICAgICAgX2lkOiBjb21tZW50Ll9pZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICBwb3N0SWQ6IGNvbW1lbnQucG9zdElkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgIGF1dGhvcjogY29tbWVudC5hdXRob3IgfHwgbnVsbCxcclxuICAgICAgICAgICAgY29udGVudDogY29tbWVudC5jb250ZW50IHx8ICcnLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IGNvbW1lbnQuY3JlYXRlZEF0IHx8IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIHJlcGxpZXM6IChjb21tZW50LnJlcGxpZXMgfHwgW10pLm1hcChyZXBseSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4ucmVwbHksXHJcbiAgICAgICAgICAgICAgICBfaWQ6IHJlcGx5Ll9pZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yOiByZXBseS5hdXRob3IgfHwgbnVsbFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBUEk6IFByb2Nlc3NlZCBjb21tZW50czonLCBwcm9jZXNzZWRDb21tZW50cy5sZW5ndGgpOyAvLyDrlJTrsoTquYUgM1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHByb2Nlc3NlZENvbW1lbnRzKSwge1xyXG4gICAgICAgICAgICBzdGF0dXM6IDIwMCxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgRXJyb3I6JywgZXJyb3IpOyAvLyDrlJTrsoTquYUgNFxyXG4gICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KSwge1xyXG4gICAgICAgICAgICBzdGF0dXM6IDUwMFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjb25uZWN0REIiLCJPYmplY3RJZCIsIk5leHRSZXNwb25zZSIsIkdFVCIsInJlcXVlc3QiLCJkYiIsInBvc3RJZCIsIm5leHRVcmwiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJSZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJjb21tZW50cyIsImNvbGxlY3Rpb24iLCJmaW5kIiwidG9BcnJheSIsImxlbmd0aCIsInByb2Nlc3NlZENvbW1lbnRzIiwibWFwIiwiY29tbWVudCIsIl9pZCIsInRvU3RyaW5nIiwiYXV0aG9yIiwiY29udGVudCIsImNyZWF0ZWRBdCIsIkRhdGUiLCJyZXBsaWVzIiwicmVwbHkiLCJoZWFkZXJzIiwibWVzc2FnZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/comment/get/route.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcomment%2Fget%2Froute&page=%2Fapi%2Fcomment%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcomment%2Fget%2Froute.js&appDir=C%3A%5C%EC%BD%94%EB%94%A9%5Cp5%5Cforum%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5C%EC%BD%94%EB%94%A9%5Cp5%5Cforum&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();