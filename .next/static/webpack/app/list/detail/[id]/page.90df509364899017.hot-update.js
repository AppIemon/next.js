"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/list/detail/[id]/page",{

/***/ "(app-pages-browser)/./app/list/detail/[id]/FileSection.js":
/*!*********************************************!*\
  !*** ./app/list/detail/[id]/FileSection.js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FileSection)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction FileSection(param) {\n    let { postId, isEditMode = false, currentUser, postAuthor, onFilesChange } = param;\n    _s();\n    const [files, setFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isUploading, setIsUploading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const maxFileSize = 5 * 1024 * 1024; // 5MB per file\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"FileSection.useEffect\": ()=>{\n            fetchFiles();\n        }\n    }[\"FileSection.useEffect\"], [\n        postId\n    ]);\n    const fetchFiles = async ()=>{\n        try {\n            const res = await fetch(\"/api/files/\".concat(postId));\n            if (res.ok) {\n                const data = await res.json();\n                setFiles(data);\n                if (isEditMode && onFilesChange) {\n                    onFilesChange(data);\n                }\n            }\n        } catch (error) {\n            console.error('파일 목록 로딩 실패:', error);\n        }\n    };\n    const handleFilesUpload = async (e)=>{\n        const selectedFiles = Array.from(e.target.files);\n        // 파일 크기 검증\n        for (let file of selectedFiles){\n            if (file.size > maxFileSize) {\n                alert(\"\".concat(file.name, \"의 크기가 5MB를 초과합니다.\"));\n                return;\n            }\n        }\n        setIsUploading(true);\n        try {\n            for (let file of selectedFiles){\n                const formData = new FormData();\n                formData.append('file', file);\n                const res = await fetch(\"/api/files/\".concat(postId), {\n                    method: 'POST',\n                    body: formData\n                });\n                if (!res.ok) {\n                    throw new Error(\"파일 업로드 실패: \".concat(file.name));\n                }\n            }\n            fetchFiles();\n        } catch (error) {\n            console.error('파일 업로드 실패:', error);\n            alert('파일 업로드 중 오류가 발생했습니다.');\n        } finally{\n            setIsUploading(false);\n        }\n    };\n    const handleFileDownload = (filepath, filename)=>{\n        try {\n            const fullUrl = \"\".concat(window.location.origin).concat(filepath);\n            console.log('Download URL:', fullUrl); // 디버깅용\n            const link = document.createElement('a');\n            link.href = fullUrl;\n            link.download = filename || 'download';\n            document.body.appendChild(link);\n            link.click();\n            document.body.removeChild(link);\n        } catch (error) {\n            console.error('Download error:', error);\n            alert('파일 다운로드 중 오류가 발생했습니다.');\n        }\n    };\n    const handleFileDelete = async (fileId)=>{\n        if (!window.confirm('파일을 삭제하시겠습니까?')) return;\n        try {\n            const res = await fetch(\"/api/files/\".concat(fileId), {\n                method: 'DELETE'\n            });\n            if (res.ok) {\n                fetchFiles(); // 파일 목록 새로고침\n            } else {\n                throw new Error('파일 삭제 실패');\n            }\n        } catch (error) {\n            console.error('파일 삭제 오류:', error);\n            alert('파일 삭제 중 오류가 발생했습니다.');\n        }\n    };\n    const canModifyFiles = isEditMode || (currentUser === null || currentUser === void 0 ? void 0 : currentUser.nickname) === postAuthor;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"files-section\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"files-header\",\n                onClick: ()=>setIsExpanded(!isExpanded),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: [\n                        \"첨부 파일 (\",\n                        files.length,\n                        \")\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"toggle-icon\",\n                            children: isExpanded ? '▼' : '▶'\n                        }, void 0, false, {\n                            fileName: \"C:\\\\코딩\\\\p5\\\\forum\\\\app\\\\list\\\\detail\\\\[id]\\\\FileSection.js\",\n                            lineNumber: 110,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\코딩\\\\p5\\\\forum\\\\app\\\\list\\\\detail\\\\[id]\\\\FileSection.js\",\n                    lineNumber: 108,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\코딩\\\\p5\\\\forum\\\\app\\\\list\\\\detail\\\\[id]\\\\FileSection.js\",\n                lineNumber: 107,\n                columnNumber: 13\n            }, this),\n            isExpanded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    canModifyFiles && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"file-upload-section\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"file-upload-label\",\n                                children: [\n                                    \"파일 첨부하기\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"file\",\n                                        onChange: handleFilesUpload,\n                                        className: \"hidden\",\n                                        multiple: true,\n                                        accept: \"*/*\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\코딩\\\\p5\\\\forum\\\\app\\\\list\\\\detail\\\\[id]\\\\FileSection.js\",\n                                        lineNumber: 120,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\코딩\\\\p5\\\\forum\\\\app\\\\list\\\\detail\\\\[id]\\\\FileSection.js\",\n                                lineNumber: 118,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"file-info\",\n                                children: \"* 파일당 최대 5MB\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\코딩\\\\p5\\\\forum\\\\app\\\\list\\\\detail\\\\[id]\\\\FileSection.js\",\n                                lineNumber: 128,\n                                columnNumber: 29\n                            }, this),\n                            isUploading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"업로드 중...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\코딩\\\\p5\\\\forum\\\\app\\\\list\\\\detail\\\\[id]\\\\FileSection.js\",\n                                lineNumber: 129,\n                                columnNumber: 45\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\코딩\\\\p5\\\\forum\\\\app\\\\list\\\\detail\\\\[id]\\\\FileSection.js\",\n                        lineNumber: 117,\n                        columnNumber: 25\n                    }, this),\n                    files.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"file-grid\",\n                        children: files.map((file, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"file-download-item\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"file-name\",\n                                        title: file.filename,\n                                        children: file.filename\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\코딩\\\\p5\\\\forum\\\\app\\\\list\\\\detail\\\\[id]\\\\FileSection.js\",\n                                        lineNumber: 137,\n                                        columnNumber: 37\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"file-size\",\n                                        children: [\n                                            (file.size / 1024).toFixed(1),\n                                            \"KB\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\코딩\\\\p5\\\\forum\\\\app\\\\list\\\\detail\\\\[id]\\\\FileSection.js\",\n                                        lineNumber: 140,\n                                        columnNumber: 37\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"file-download\",\n                                        onClick: ()=>handleFileDownload(file.filepath, file.filename),\n                                        children: \"다운로드\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\코딩\\\\p5\\\\forum\\\\app\\\\list\\\\detail\\\\[id]\\\\FileSection.js\",\n                                        lineNumber: 143,\n                                        columnNumber: 37\n                                    }, this),\n                                    canModifyFiles && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"file-delete\",\n                                        onClick: ()=>handleFileDelete(file._id),\n                                        children: \"삭제\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\코딩\\\\p5\\\\forum\\\\app\\\\list\\\\detail\\\\[id]\\\\FileSection.js\",\n                                        lineNumber: 150,\n                                        columnNumber: 41\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\코딩\\\\p5\\\\forum\\\\app\\\\list\\\\detail\\\\[id]\\\\FileSection.js\",\n                                lineNumber: 136,\n                                columnNumber: 33\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\코딩\\\\p5\\\\forum\\\\app\\\\list\\\\detail\\\\[id]\\\\FileSection.js\",\n                        lineNumber: 134,\n                        columnNumber: 25\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"no-files\",\n                        children: \"첨부된 파일이 없습니다\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\코딩\\\\p5\\\\forum\\\\app\\\\list\\\\detail\\\\[id]\\\\FileSection.js\",\n                        lineNumber: 161,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\코딩\\\\p5\\\\forum\\\\app\\\\list\\\\detail\\\\[id]\\\\FileSection.js\",\n        lineNumber: 106,\n        columnNumber: 9\n    }, this);\n}\n_s(FileSection, \"ao0WxAYardvaJpHP3hw1JnSYINE=\");\n_c = FileSection;\nvar _c;\n$RefreshReg$(_c, \"FileSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9saXN0L2RldGFpbC9baWRdL0ZpbGVTZWN0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUU0QztBQUU3QixTQUFTRSxZQUFZLEtBQXNFO1FBQXRFLEVBQUVDLE1BQU0sRUFBRUMsYUFBYSxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsVUFBVSxFQUFFQyxhQUFhLEVBQUUsR0FBdEU7O0lBQ2hDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ1UsYUFBYUMsZUFBZSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNZLFlBQVlDLGNBQWMsR0FBR2IsK0NBQVFBLENBQUM7SUFDN0MsTUFBTWMsY0FBYyxJQUFJLE9BQU8sTUFBTSxlQUFlO0lBRXBEYixnREFBU0E7aUNBQUM7WUFDTmM7UUFDSjtnQ0FBRztRQUFDWjtLQUFPO0lBRVgsTUFBTVksYUFBYTtRQUNmLElBQUk7WUFDQSxNQUFNQyxNQUFNLE1BQU1DLE1BQU0sY0FBcUIsT0FBUGQ7WUFDdEMsSUFBSWEsSUFBSUUsRUFBRSxFQUFFO2dCQUNSLE1BQU1DLE9BQU8sTUFBTUgsSUFBSUksSUFBSTtnQkFDM0JYLFNBQVNVO2dCQUNULElBQUlmLGNBQWNHLGVBQWU7b0JBQzdCQSxjQUFjWTtnQkFDbEI7WUFDSjtRQUNKLEVBQUUsT0FBT0UsT0FBTztZQUNaQyxRQUFRRCxLQUFLLENBQUMsZ0JBQWdCQTtRQUNsQztJQUNKO0lBRUEsTUFBTUUsb0JBQW9CLE9BQU9DO1FBQzdCLE1BQU1DLGdCQUFnQkMsTUFBTUMsSUFBSSxDQUFDSCxFQUFFSSxNQUFNLENBQUNwQixLQUFLO1FBRS9DLFdBQVc7UUFDWCxLQUFLLElBQUlxQixRQUFRSixjQUFlO1lBQzVCLElBQUlJLEtBQUtDLElBQUksR0FBR2hCLGFBQWE7Z0JBQ3pCaUIsTUFBTSxHQUFhLE9BQVZGLEtBQUtHLElBQUksRUFBQztnQkFDbkI7WUFDSjtR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OzRDQUNWaEMsQ0FBQUEsS0FBS0MsSUFBSSxHQUFHLElBQUcsRUFBRzhDLE9BQU8sQ0FBQzs0Q0FBRzs7Ozs7OztrREFFbkMsOERBQUNDO3dDQUNHaEIsV0FBVTt3Q0FDVkMsU0FBUyxJQUFNdkIsbUJBQW1CVixLQUFLVyxRQUFRLEVBQUVYLEtBQUtZLFFBQVE7a0RBQ2pFOzs7Ozs7b0NBR0FpQixnQ0FDRyw4REFBQ21CO3dDQUNHaEIsV0FBVTt3Q0FDVkMsU0FBUyxJQUFNUCxpQkFBaUIxQixLQUFLaUQsR0FBRztrREFDM0M7Ozs7Ozs7K0JBakJDSjs7Ozs7Ozs7OzZDQXlCbEIsOERBQUNGO3dCQUFFWCxXQUFVO2tDQUFXOzs7Ozs7Ozs7Ozs7OztBQU1oRDtHQWxLd0IzRDtLQUFBQSIsInNvdXJjZXMiOlsiQzpcXOy9lOuUqVxccDVcXGZvcnVtXFxhcHBcXGxpc3RcXGRldGFpbFxcW2lkXVxcRmlsZVNlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlsZVNlY3Rpb24oeyBwb3N0SWQsIGlzRWRpdE1vZGUgPSBmYWxzZSwgY3VycmVudFVzZXIsIHBvc3RBdXRob3IsIG9uRmlsZXNDaGFuZ2UgfSkge1xyXG4gICAgY29uc3QgW2ZpbGVzLCBzZXRGaWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbaXNVcGxvYWRpbmcsIHNldElzVXBsb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc0V4cGFuZGVkLCBzZXRJc0V4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IG1heEZpbGVTaXplID0gNSAqIDEwMjQgKiAxMDI0OyAvLyA1TUIgcGVyIGZpbGVcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoRmlsZXMoKTtcclxuICAgIH0sIFtwb3N0SWRdKTtcclxuXHJcbiAgICBjb25zdCBmZXRjaEZpbGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvYXBpL2ZpbGVzLyR7cG9zdElkfWApO1xyXG4gICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIHNldEZpbGVzKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzRWRpdE1vZGUgJiYgb25GaWxlc0NoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uRmlsZXNDaGFuZ2UoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCftjIzsnbwg66qp66GdIOuhnOuUqSDsi6TtjKg6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRmlsZXNVcGxvYWQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRmlsZXMgPSBBcnJheS5mcm9tKGUudGFyZ2V0LmZpbGVzKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDtjIzsnbwg7YGs6riwIOqygOymnVxyXG4gICAgICAgIGZvciAobGV0IGZpbGUgb2Ygc2VsZWN0ZWRGaWxlcykge1xyXG4gICAgICAgICAgICBpZiAoZmlsZS5zaXplID4gbWF4RmlsZVNpemUpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGAke2ZpbGUubmFtZX3snZgg7YGs6riw6rCAIDVNQuulvCDstIjqs7ztlanri4jri6QuYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldElzVXBsb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGZpbGUgb2Ygc2VsZWN0ZWRGaWxlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvYXBpL2ZpbGVzLyR7cG9zdElkfWAsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICBib2R5OiBmb3JtRGF0YVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYO2MjOydvCDsl4XroZzrk5wg7Iuk7YyoOiAke2ZpbGUubmFtZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZmV0Y2hGaWxlcygpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+2MjOydvCDsl4XroZzrk5wg7Iuk7YyoOicsIGVycm9yKTtcclxuICAgICAgICAgICAgYWxlcnQoJ+2MjOydvCDsl4XroZzrk5wg7KSRIOyYpOulmOqwgCDrsJzsg53tlojsirXri4jri6QuJyk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0SXNVcGxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRmlsZURvd25sb2FkID0gKGZpbGVwYXRoLCBmaWxlbmFtZSkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZ1bGxVcmwgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufSR7ZmlsZXBhdGh9YDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Rvd25sb2FkIFVSTDonLCBmdWxsVXJsKTsgLy8g65SU67KE6rmF7JqpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICBsaW5rLmhyZWYgPSBmdWxsVXJsO1xyXG4gICAgICAgICAgICBsaW5rLmRvd25sb2FkID0gZmlsZW5hbWUgfHwgJ2Rvd25sb2FkJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Rvd25sb2FkIGVycm9yOicsIGVycm9yKTtcclxuICAgICAgICAgICAgYWxlcnQoJ+2MjOydvCDri6TsmrTroZzrk5wg7KSRIOyYpOulmOqwgCDrsJzsg53tlojsirXri4jri6QuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVGaWxlRGVsZXRlID0gYXN5bmMgKGZpbGVJZCkgPT4ge1xyXG4gICAgICAgIGlmICghd2luZG93LmNvbmZpcm0oJ+2MjOydvOydhCDsgq3soJztlZjsi5zqsqDsirXri4jquYw/JykpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9maWxlcy8ke2ZpbGVJZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgICAgIGZldGNoRmlsZXMoKTsgLy8g7YyM7J28IOuqqeuhnSDsg4jroZzqs6DsuahcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcign7YyM7J28IOyCreygnCDsi6TtjKgnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+2MjOydvCDsgq3soJwg7Jik66WYOicsIGVycm9yKTtcclxuICAgICAgICAgICAgYWxlcnQoJ+2MjOydvCDsgq3soJwg7KSRIOyYpOulmOqwgCDrsJzsg53tlojsirXri4jri6QuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjYW5Nb2RpZnlGaWxlcyA9IGlzRWRpdE1vZGUgfHwgY3VycmVudFVzZXI/Lm5pY2tuYW1lID09PSBwb3N0QXV0aG9yO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlcy1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZXMtaGVhZGVyXCIgb25DbGljaz17KCkgPT4gc2V0SXNFeHBhbmRlZCghaXNFeHBhbmRlZCl9PlxyXG4gICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgIOyyqOu2gCDtjIzsnbwgKHtmaWxlcy5sZW5ndGh9KVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvZ2dsZS1pY29uXCI+e2lzRXhwYW5kZWQgPyAn4pa8JyA6ICfilrYnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge2lzRXhwYW5kZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICB7Y2FuTW9kaWZ5RmlsZXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtdXBsb2FkLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmaWxlLXVwbG9hZC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIO2MjOydvCDssqjrtoDtlZjquLBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsZXNVcGxvYWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIiovKlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmaWxlLWluZm9cIj4qIO2MjOydvOuLuSDstZzrjIAgNU1CPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzVXBsb2FkaW5nICYmIDxwPuyXheuhnOuTnCDspJEuLi48L3A+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtmaWxlcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpbGVzLm1hcCgoZmlsZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZpbGUtZG93bmxvYWQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWxlLW5hbWVcIiB0aXRsZT17ZmlsZS5maWxlbmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmlsZS5maWxlbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWxlLXNpemVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoZmlsZS5zaXplIC8gMTAyNCkudG9GaXhlZCgxKX1LQlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxlLWRvd25sb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbGVEb3dubG9hZChmaWxlLmZpbGVwYXRoLCBmaWxlLmZpbGVuYW1lKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg64uk7Jq066Gc65OcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FuTW9kaWZ5RmlsZXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxlLWRlbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRmlsZURlbGV0ZShmaWxlLl9pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7IKt7KCcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuby1maWxlc1wiPuyyqOu2gOuQnCDtjIzsnbzsnbQg7JeG7Iq164uI64ukPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRmlsZVNlY3Rpb24iLCJwb3N0SWQiLCJpc0VkaXRNb2RlIiwiY3VycmVudFVzZXIiLCJwb3N0QXV0aG9yIiwib25GaWxlc0NoYW5nZSIsImZpbGVzIiwic2V0RmlsZXMiLCJpc1VwbG9hZGluZyIsInNldElzVXBsb2FkaW5nIiwiaXNFeHBhbmRlZCIsInNldElzRXhwYW5kZWQiLCJtYXhGaWxlU2l6ZSIsImZldGNoRmlsZXMiLCJyZXMiLCJmZXRjaCIsIm9rIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVGaWxlc1VwbG9hZCIsImUiLCJzZWxlY3RlZEZpbGVzIiwiQXJyYXkiLCJmcm9tIiwidGFyZ2V0IiwiZmlsZSIsInNpemUiLCJhbGVydCIsIm5hbWUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwibWV0aG9kIiwiYm9keSIsIkVycm9yIiwiaGFuZGxlRmlsZURvd25sb2FkIiwiZmlsZXBhdGgiLCJmaWxlbmFtZSIsImZ1bGxVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsImxvZyIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiZG93bmxvYWQiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlQ2hpbGQiLCJoYW5kbGVGaWxlRGVsZXRlIiwiZmlsZUlkIiwiY29uZmlybSIsImNhbk1vZGlmeUZpbGVzIiwibmlja25hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaDMiLCJsZW5ndGgiLCJzcGFuIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsIm11bHRpcGxlIiwiYWNjZXB0IiwicCIsIm1hcCIsImluZGV4IiwidGl0bGUiLCJ0b0ZpeGVkIiwiYnV0dG9uIiwiX2lkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/list/detail/[id]/FileSection.js\n"));

/***/ })

});