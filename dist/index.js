(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["chineseNumber"] = factory();
	else
		root["chineseNumber"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.chineseToNumber = chineseToNumber;
exports.numberToChinese = numberToChinese;
var chDigit = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
var chPosition = ['', '十', '百', '千'];
var chBasePosition = ['', '万', '亿'];
var digitMap = {
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
var positionMap = {
    '十': 10,
    '百': 100,
    '千': 1000
};
var basePositionMap = {
    '万': 10000,
    '亿': 100000000
};
/**
 * 中文转数字
 * @param chinese 中文字符串
 * @return <number> 中文对应的数字，未进行错误处理
 */
function chineseToNumber(chinese) {
    var strArr = Array.from(chinese);
    var number = 0;
    var digit = 0;
    //基础进位栈
    var stack = [];
    strArr.forEach(function (ch) {
        if (digitMap.hasOwnProperty(ch)) {
            digit = digitMap[ch];
        } else if (positionMap.hasOwnProperty(ch)) {
            //处理以进位符打头的字符串：十一，十万等
            if (digit == 0 && number == 0) {
                digit = 1;
            }
            number += digit * positionMap[ch];
            digit = 0;
        } else if (basePositionMap.hasOwnProperty(ch)) {
            //处理以数字结尾的基础进位：一万，十一万等
            if (digit != 0) {
                number += digit;
                digit = 0;
            }
            number *= basePositionMap[ch];
            stack.push(number);
            number = 0;
        }
    });
    //处理以数字结尾的字符串：十一，一等
    if (digit != 0) {
        number += digit;
        digit = 0;
    }
    stack.push(number);
    //将各基础进位项合并
    number = stack.reduce(function (res, n) {
        return res + n;
    });
    return number || 0;
}
/**
 * 数字转中文
 * @param num 数字
 * @param base 基础进位项
 * @return <string> 数字对应的中文，未进行错误处理
 */
function numberToChinese(num, base) {
    base = base || 0;
    if (num == 0) return base == 0 ? '零' : '';
    var _n = num;
    var position = 0;
    var res = '';
    //处理一个基础进位
    while (_n > 0 && position < 4) {
        var digit = _n % 10;
        if (digit == 0) {
            if (res.length && res.charAt[0] != '零') {
                res = '零' + res;
            }
        } else {
            res = chDigit[digit - 1] + chPosition[position] + res;
        }
        ++position;
        _n = Math.floor(_n / 10);
    }
    //处理一十打头的情况
    if (res.substr(0, 2) == '一十') {
        res = res.substr(1, res.length - 1);
    }
    //递归处理下一基础进位
    return numberToChinese(_n, base + 1) + res + chBasePosition[base];
}

/***/ })
/******/ ]);
});