/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _jQueryTodolist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jQueryTodolist */ \"./src/jQueryTodolist.js\");\n\n\n$(function(){\n    const todolist = new _jQueryTodolist__WEBPACK_IMPORTED_MODULE_0__[\"Todolist\"]();\n    todolist.renderTodos();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/jQueryTodolist.js":
/*!*******************************!*\
  !*** ./src/jQueryTodolist.js ***!
  \*******************************/
/*! exports provided: Todolist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Todolist\", function() { return Todolist; });\n\n//class\nclass Todolist {\n    constructor() {\n        this.$todoList = $('.todoList');\n        this.$todoSubmit = $('.todoSubmit');\n        this.$todoInput = $('input[name=\"todoInput\"]');\n        this.$appStorage = JSON.parse(localStorage.getItem('todos')) || []; //array storage for data objects\n        this.$submit = $('.submit').on('click', this.addTodo.bind(this));\n        this.$inputVal = this.$todoInput.on('click', () => { this.$todoInput.val(\"\") } );\n    }\n\n    //prototypeFunctions\n    //appStorage에 집어넣고\n    // 반영 시킨 appStorage를 전체 그려주고\n    // localStorage 압데\n    addTodo(event) {\n        event.preventDefault();\n        if (this.$todoInput.val() !== \"\") {\n            const newObject = { text: this.$todoInput.val(), completed: false };\n            this.$appStorage.push(newObject);\n            this.renderTodos();\n            this.localStorageUpdate();\n            this.$todoInput.val(\"\");\n        }     \n    }\n\n    //localStorage에다가 반영해주기\n    localStorageUpdate() {\n        localStorage.setItem('todos', JSON.stringify(this.$appStorage));//\n    }\n\n    //모든 변화는 여기서 반영 해준다. 다른데서 하지 말것!\n    renderTodos() {\n        //일단 다 지워주고\n        document.querySelector('.todoList').innerHTML = \"\";\n        // $('li').remove();\n        this.$appStorage.forEach((todo, idx) => {\n            // make new list \n            const $newList = $('<li>');\n            $newList.text(todo.text);\n            $newList.attr('data-index', idx);\n     \n            //add delete button to newList\n            //addEventListener  \n            const button = $('<button class=\"delete\">delete</button>');\n            button.on('click', this.deleteItem.bind(this));\n            \n            //add checkbox to newList\n            //add eventListener\n            const $checkbox = $('<input type=\"checkbox\">');\n            $checkbox.on('click', this.checkEvent.bind(this));\n            \n            if (todo.completed) {\n                $newList.css(\"textDecoration\", \"line-through\");\n                $checkbox.prop(\"checked\", true);\n            }\n            button.appendTo($newList);\n            $checkbox.appendTo($newList);\n            $newList.appendTo(this.$todoList);\n        })\n    }\n    //target된 list 지우기\n    //render 해주고\n    // 로컬 스토리지 압데해주고\n    deleteItem(event) {\n        const $target = event.target;\n        const index = $target.parentNode.dataset.index;\n        this.$appStorage.splice(index, index + 1);\n\n        this.renderTodos();\n        this.localStorageUpdate();\n    }\n\n    checkEvent(event) {\n        event.preventDefault();\n        const $target = event.target;\n      \n        const index = $target.parentNode.dataset.index;\n        this.$appStorage[index].completed = !this.$appStorage[index].completed;\n        (event) => {return $target.prop(\"checked\");}\n        $target.style.visibility = 'hidden';\n       \n        this.renderTodos();\n        this.localStorageUpdate();\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/jQueryTodolist.js?");

/***/ })

/******/ });