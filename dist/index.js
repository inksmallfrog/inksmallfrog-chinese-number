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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["ChineseToNumber"] = ChineseToNumber;
/* harmony export (immutable) */ __webpack_exports__["NumberToChinese"] = NumberToChinese;
const chDigit = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
const chPosition = ['', '十', '百', '千'];
const chBasePosition = ['', '万', '亿'];
const digitMap = {
    '一': 1,
    '二': 2,
    '三': 3,
    '四': 4,
    '五': 5,
    '六': 6,
    '七': 7,
    '八': 8,
    '九': 9
};
const positionMap = {
    '十': 10,
    '百': 100,
    '千': 1000,
};
const basePositionMap = {
    '万': 10000,
    '亿': 100000000
};
function ChineseToNumber(chinese) {
    let strArr = Array.from(chinese);
    let number = 0;
    let digit = 0;
    let stack = [];
    strArr.forEach((ch) => {
        if (digitMap.hasOwnProperty(ch)) {
            digit = digitMap[ch];
        }
        else if (positionMap.hasOwnProperty(ch)) {
            //case like 十
            if (digit == 0 && number == 0) {
                digit = 1;
            }
            number += digit * positionMap[ch];
            digit = 0;
        }
        else if (basePositionMap.hasOwnProperty(ch)) {
            //case like 一万
            if (digit != 0) {
                number += digit;
                digit = 0;
            }
            number *= basePositionMap[ch];
            stack.push(number);
            number = 0;
        }
    });
    //case like 一
    if (digit != 0) {
        number += digit;
        digit = 0;
    }
    stack.push(number);
    number = stack.reduce((res, n) => {
        return res + n;
    });
    return number || 0;
}
function NumberToChinese(num, base) {
    base = base || 0;
    if (num == 0)
        return base == 0 ? '零' : '';
    let _n = num;
    let position = 0;
    let res = '';
    while (_n > 0 && position < 4) {
        let digit = _n % 10;
        if (digit == 0) {
            if (res.length && res.charAt[0] != '零') {
                res = '零' + res;
            }
        }
        else {
            res = (chDigit[digit - 1] + chPosition[position]) + res;
        }
        ++position;
        _n = Math.floor(_n / 10);
    }
    if (res.substr(0, 2) == '一十') {
        res = res.substr(1, res.length - 1);
    }
    return NumberToChinese(_n, base + 1) + res + chBasePosition[base];
}


/***/ })
/******/ ]);