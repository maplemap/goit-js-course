/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/common.css */ \"./src/styles/common.css\");\n/* harmony import */ var _modules_todo_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todo-list */ \"./src/modules/todo-list/index.js\");\n\n\n\n//# sourceURL=webpack://goit-js-course/./src/index.js?");

/***/ }),

/***/ "./src/modules/services/storage.js":
/*!*****************************************!*\
  !*** ./src/modules/services/storage.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar save = function save(key, value) {\n  try {\n    var serializedState = JSON.stringify(value);\n    localStorage.setItem(key, serializedState);\n  } catch (error) {\n    console.error('Set state error: ', error.message);\n  }\n};\nvar load = function load(key) {\n  try {\n    var serializedState = localStorage.getItem(key);\n    return serializedState === null ? undefined : JSON.parse(serializedState);\n  } catch (error) {\n    console.error('Get state error: ', error.message);\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  save: save,\n  load: load\n});\n\n//# sourceURL=webpack://goit-js-course/./src/modules/services/storage.js?");

/***/ }),

/***/ "./src/modules/todo-list/index.js":
/*!****************************************!*\
  !*** ./src/modules/todo-list/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_list_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-list.css */ \"./src/modules/todo-list/todo-list.css\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list */ \"./src/modules/todo-list/todo-list.js\");\n\n\n\n//# sourceURL=webpack://goit-js-course/./src/modules/todo-list/index.js?");

/***/ }),

/***/ "./src/modules/todo-list/todo-list.js":
/*!********************************************!*\
  !*** ./src/modules/todo-list/todo-list.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoid */ \"./node_modules/nanoid/index.browser.js\");\n/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/storage */ \"./src/modules/services/storage.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"set\"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } }\nfunction _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError(\"attempted to get private field on non-instance\"); } return fn; }\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\n\n\n/*\n  Написати Todo-list де можна створювати, видаляти елементи та реалізувати\n  збереження списку в локальний сервер\n */\nvar _STORAGE_KEY = /*#__PURE__*/new WeakMap();\nvar _ENTER_KEY_CODE = /*#__PURE__*/new WeakMap();\nvar _appMarkup = /*#__PURE__*/new WeakMap();\nvar _refs = /*#__PURE__*/new WeakMap();\nvar _items = /*#__PURE__*/new WeakMap();\nvar _defineRefs = /*#__PURE__*/new WeakSet();\nvar _initListeners = /*#__PURE__*/new WeakSet();\nvar _updateItems = /*#__PURE__*/new WeakSet();\nvar _addTask = /*#__PURE__*/new WeakSet();\nvar _addTaskByEnterKey = /*#__PURE__*/new WeakSet();\nvar _taskContainerOnClick = /*#__PURE__*/new WeakSet();\nvar _removeTask = /*#__PURE__*/new WeakSet();\nvar _toggleTask = /*#__PURE__*/new WeakSet();\nvar _render = /*#__PURE__*/new WeakSet();\nvar TodoList = /*#__PURE__*/function () {\n  function TodoList() {\n    _classCallCheck(this, TodoList);\n    _classPrivateMethodInitSpec(this, _render);\n    _classPrivateMethodInitSpec(this, _toggleTask);\n    _classPrivateMethodInitSpec(this, _removeTask);\n    _classPrivateMethodInitSpec(this, _taskContainerOnClick);\n    _classPrivateMethodInitSpec(this, _addTaskByEnterKey);\n    _classPrivateMethodInitSpec(this, _addTask);\n    _classPrivateMethodInitSpec(this, _updateItems);\n    _classPrivateMethodInitSpec(this, _initListeners);\n    _classPrivateMethodInitSpec(this, _defineRefs);\n    _classPrivateFieldInitSpec(this, _STORAGE_KEY, {\n      writable: true,\n      value: 'TODO_LIST_ITEMS'\n    });\n    _classPrivateFieldInitSpec(this, _ENTER_KEY_CODE, {\n      writable: true,\n      value: 'Enter'\n    });\n    _classPrivateFieldInitSpec(this, _appMarkup, {\n      writable: true,\n      value: \"\\n    <div class=\\\"todo-list\\\">\\n      <header class=\\\"header\\\">\\n        <input class=\\\"header__input\\\" type=\\\"text\\\" placeholder=\\\"Enter an activity..\\\">\\n        <button type=\\\"button\\\" class=\\\"header__button\\\"><i class=\\\"fa fa-plus\\\"></i></button>\\n      </header>\\n      <main class=\\\"list-container\\\">\\n        <ul class=\\\"list current-list\\\"></ul>\\n        <hr>\\n        <ul class=\\\"list done-list\\\"></ul>\\n      </main>\\n      </script>\\n    </div>\\n  \"\n    });\n    _classPrivateFieldInitSpec(this, _refs, {\n      writable: true,\n      value: {}\n    });\n    _classPrivateFieldInitSpec(this, _items, {\n      writable: true,\n      value: _services_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].load(_classPrivateFieldGet(this, _STORAGE_KEY)) || []\n    });\n  }\n  _createClass(TodoList, [{\n    key: \"init\",\n    value: function init(targetNode) {\n      var targetElement = targetNode || document.body;\n      targetElement.innerHTML = _classPrivateFieldGet(this, _appMarkup);\n      _classPrivateMethodGet(this, _defineRefs, _defineRefs2).call(this);\n      _classPrivateMethodGet(this, _initListeners, _initListeners2).call(this);\n      _classPrivateMethodGet(this, _render, _render2).call(this);\n    }\n  }]);\n  return TodoList;\n}();\nfunction _defineRefs2() {\n  _classPrivateFieldGet(this, _refs).app = document.querySelector('.todo-list');\n  if (_classPrivateFieldGet(this, _refs).app) {\n    _classPrivateFieldGet(this, _refs).addItemBtn = _classPrivateFieldGet(this, _refs).app.querySelector('.header__button');\n    _classPrivateFieldGet(this, _refs).itemInput = _classPrivateFieldGet(this, _refs).app.querySelector('.header__input');\n    _classPrivateFieldGet(this, _refs).currentList = _classPrivateFieldGet(this, _refs).app.querySelector('.current-list');\n    _classPrivateFieldGet(this, _refs).doneList = _classPrivateFieldGet(this, _refs).app.querySelector('.done-list');\n    _classPrivateFieldGet(this, _refs).listContainer = document.querySelector('.list-container');\n  }\n}\nfunction _initListeners2() {\n  _classPrivateFieldGet(this, _refs).addItemBtn.addEventListener('click', _classPrivateMethodGet(this, _addTask, _addTask2).bind(this));\n  _classPrivateFieldGet(this, _refs).listContainer.addEventListener('click', _classPrivateMethodGet(this, _taskContainerOnClick, _taskContainerOnClick2).bind(this));\n  _classPrivateFieldGet(this, _refs).itemInput.addEventListener('keypress', _classPrivateMethodGet(this, _addTaskByEnterKey, _addTaskByEnterKey2).bind(this));\n}\nfunction _updateItems2(items) {\n  _classPrivateFieldSet(this, _items, items);\n  _classPrivateMethodGet(this, _render, _render2).call(this);\n  _services_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].save(_classPrivateFieldGet(this, _STORAGE_KEY), items);\n}\nfunction _addTask2() {\n  var value = _classPrivateFieldGet(this, _refs).itemInput.value;\n  if (value) {\n    var items = _toConsumableArray(_classPrivateFieldGet(this, _items));\n    items.push({\n      id: (0,nanoid__WEBPACK_IMPORTED_MODULE_1__.nanoid)(),\n      value: value,\n      done: false\n    });\n    _classPrivateMethodGet(this, _updateItems, _updateItems2).call(this, items);\n  }\n  _classPrivateFieldGet(this, _refs).itemInput.value = null;\n}\nfunction _addTaskByEnterKey2(e) {\n  if (e.code === _classPrivateFieldGet(this, _ENTER_KEY_CODE)) {\n    _classPrivateMethodGet(this, _addTask, _addTask2).call(this);\n  }\n}\nfunction _taskContainerOnClick2(e) {\n  var taskRef = e.target.closest('.list__item[data-id]');\n  if (taskRef) {\n    if (e.target.dataset.action === 'remove') {\n      _classPrivateMethodGet(this, _removeTask, _removeTask2).call(this, taskRef.dataset.id);\n    }\n    if (e.target.dataset.action === 'toggle') {\n      _classPrivateMethodGet(this, _toggleTask, _toggleTask2).call(this, taskRef.dataset.id);\n    }\n  }\n}\nfunction _removeTask2(id) {\n  var items = _classPrivateFieldGet(this, _items).filter(function (item) {\n    return item.id !== id;\n  });\n  _classPrivateMethodGet(this, _updateItems, _updateItems2).call(this, items);\n}\nfunction _toggleTask2(id) {\n  var items = _classPrivateFieldGet(this, _items).map(function (item) {\n    if (id === item.id) {\n      return _objectSpread(_objectSpread({}, item), {}, {\n        done: !item.done\n      });\n    }\n    return item;\n  });\n  _classPrivateMethodGet(this, _updateItems, _updateItems2).call(this, items);\n}\nfunction _render2() {\n  var getItem = function getItem(_ref) {\n    var id = _ref.id,\n      value = _ref.value,\n      done = _ref.done;\n    return \"\\n     <li class=\\\"list__item\\\" data-id=\\\"\".concat(id, \"\\\" data-done=\\\"\").concat(done, \"\\\">\\n        <span class=\\\"list__item-name\\\">\").concat(value, \"</span>\\n        <div class=\\\"list__buttons\\\">\\n          <i class=\\\"list__button remove fa fa-trash-o\\\" data-action=\\\"remove\\\"></i>\\n          <span class=\\\"list__bar\\\">|</span>\\n          <i \\n            class=\\\"\", \"list__button fa \".concat(done ? 'uncomplete fa-check-circle' : 'complete fa-check-circle-o'), \"\\\"\\n            data-action=\\\"toggle\\\"\\n          ></i>\\n        </div>\\n     </li>\\n    \");\n  };\n  var todoTasks = _classPrivateFieldGet(this, _items).filter(function (_ref2) {\n    var done = _ref2.done;\n    return !done;\n  });\n  var doneTasks = _classPrivateFieldGet(this, _items).filter(function (_ref3) {\n    var done = _ref3.done;\n    return done;\n  });\n  _classPrivateFieldGet(this, _refs).currentList.innerHTML = todoTasks.map(getItem).join('');\n  _classPrivateFieldGet(this, _refs).doneList.innerHTML = doneTasks.map(getItem).join('');\n}\nvar todoList = new TodoList();\ntodoList.init();\n\n//# sourceURL=webpack://goit-js-course/./src/modules/todo-list/todo-list.js?");

/***/ }),

/***/ "./src/modules/todo-list/todo-list.css":
/*!*********************************************!*\
  !*** ./src/modules/todo-list/todo-list.css ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://goit-js-course/./src/modules/todo-list/todo-list.css?");

/***/ }),

/***/ "./src/styles/common.css":
/*!*******************************!*\
  !*** ./src/styles/common.css ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://goit-js-course/./src/styles/common.css?");

/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"customAlphabet\": function() { return /* binding */ customAlphabet; },\n/* harmony export */   \"customRandom\": function() { return /* binding */ customRandom; },\n/* harmony export */   \"nanoid\": function() { return /* binding */ nanoid; },\n/* harmony export */   \"random\": function() { return /* binding */ random; },\n/* harmony export */   \"urlAlphabet\": function() { return /* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet; }\n/* harmony export */ });\n/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ \"./node_modules/nanoid/url-alphabet/index.js\");\n\nlet random = bytes => crypto.getRandomValues(new Uint8Array(bytes))\nlet customRandom = (alphabet, defaultSize, getRandom) => {\n  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1\n  let step = -~((1.6 * mask * defaultSize) / alphabet.length)\n  return (size = defaultSize) => {\n    let id = ''\n    while (true) {\n      let bytes = getRandom(step)\n      let j = step\n      while (j--) {\n        id += alphabet[bytes[j] & mask] || ''\n        if (id.length === size) return id\n      }\n    }\n  }\n}\nlet customAlphabet = (alphabet, size = 21) =>\n  customRandom(alphabet, size, random)\nlet nanoid = (size = 21) =>\n  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {\n    byte &= 63\n    if (byte < 36) {\n      id += byte.toString(36)\n    } else if (byte < 62) {\n      id += (byte - 26).toString(36).toUpperCase()\n    } else if (byte > 62) {\n      id += '-'\n    } else {\n      id += '_'\n    }\n    return id\n  }, '')\n\n\n//# sourceURL=webpack://goit-js-course/./node_modules/nanoid/index.browser.js?");

/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"urlAlphabet\": function() { return /* binding */ urlAlphabet; }\n/* harmony export */ });\nconst urlAlphabet =\n  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'\n\n\n//# sourceURL=webpack://goit-js-course/./node_modules/nanoid/url-alphabet/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;