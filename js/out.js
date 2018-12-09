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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/regions.js":
/*!*************************!*\
  !*** ./data/regions.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var regionsDataObj = {
    ds: {
        name: "dolnośląskie",
        enName: "Lower Silesia"
    },
    kp: {
        name: "kujawsko-pomorskie",
        enName: "Kuyavia-Pomerania"
    },
    ld: {
        name: "łódzkie",
        enName: "Łódź"
    },
    lu: {
        name: "lubelskie",
        enName: "Lublin"
    },
    lb: {
        name: "lubuskie",
        enName: "Lubusz"
    },
    ma: {
        name: "małopolskie",
        enName: "Lesser Poland"
    },
    mz: {
        name: "mazowieckie",
        enName: "Masovia"
    },
    op: {
        name: "opolskie",
        enName: "Opole"
    },
    pk: {
        name: "podkarpackie",
        enName: "Subcarpathia"
    },
    pd: {
        name: "podlaskie",
        enName: "Podlaskie"
    },
    pm: {
        name: "pomorskie",
        enName: "Pomerania"
    },
    sl: {
        name: "śląskie",
        enName: "Silesia"
    },
    sk: {
        name: "świętokrzyskie",
        enName: "Holy Cross Province"
    },
    wm: {
        name: "warmińsko-mazurskie",
        enName: "Warmia-Masuria"
    },
    wp: {
        name: "wielkopolskie",
        enName: "Greater Poland"
    },
    zp: {
        name: "zachodniopomorskie",
        enName: "West Pomerania"
    }
};

exports.regionsDataObj = regionsDataObj;

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _regions = __webpack_require__(/*! ../data/regions */ "./data/regions.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var regionsIDs = ["pl-ds", "pl-kp", "pl-ld", "pl-lu", "pl-lb", "pl-ma", "pl-mz", "pl-op", "pl-pk", "pl-pd", "pl-pm", "pl-sl", "pl-sk", "pl-wm", "pl-wp", "pl-zp"];

var defaultActiveRegion = "pl-mz";

var Region = function () {
    function Region(id) {
        _classCallCheck(this, Region);

        this.id = id;
        this.inDOM = document.getElementById(this.id);
    }

    _createClass(Region, [{
        key: "printData",
        value: function printData() {
            var regionName = document.querySelector('.region-name');
            var regionEnName = document.querySelector('.region-en-name');

            regionName.innerHTML = _regions.regionsDataObj[this.id.slice(3)].name;
            regionEnName.innerHTML = _regions.regionsDataObj[this.id.slice(3)].enName;
        }
    }, {
        key: "changeBackground",
        value: function changeBackground() {
            var regions = document.querySelectorAll('path');
            regions.forEach(function (el) {
                return el.classList.remove('path--active');
            });

            this.inDOM.classList.add('path--active');
        }
    }, {
        key: "updateData",
        value: function updateData() {
            var _this = this;

            this.inDOM.addEventListener('click', function () {
                return _this.printData();
            });
            this.inDOM.addEventListener('click', function () {
                return _this.changeBackground();
            });
        }
    }]);

    return Region;
}();

//Initialize regions


var regionsObjects = regionsIDs.map(function (id) {
    return new Region(id);
});

//Default region
regionsObjects.forEach(function (el, i) {
    el.id === defaultActiveRegion ? regionsObjects[i].printData() : null;

    el.id === defaultActiveRegion ? regionsObjects[i].changeBackground() : null;
});

//Switching regions
regionsObjects.forEach(function (el) {
    return el.updateData();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9yZWdpb25zLmpzIiwid2VicGFjazovLy8uL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJyZWdpb25zRGF0YU9iaiIsImRzIiwibmFtZSIsImVuTmFtZSIsImtwIiwibGQiLCJsdSIsImxiIiwibWEiLCJteiIsIm9wIiwicGsiLCJwZCIsInBtIiwic2wiLCJzayIsIndtIiwid3AiLCJ6cCIsInJlZ2lvbnNJRHMiLCJkZWZhdWx0QWN0aXZlUmVnaW9uIiwiUmVnaW9uIiwiaWQiLCJpbkRPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZWdpb25OYW1lIiwicXVlcnlTZWxlY3RvciIsInJlZ2lvbkVuTmFtZSIsImlubmVySFRNTCIsInNsaWNlIiwicmVnaW9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwicHJpbnREYXRhIiwiY2hhbmdlQmFja2dyb3VuZCIsInJlZ2lvbnNPYmplY3RzIiwibWFwIiwiaSIsInVwZGF0ZURhdGEiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFNQSxpQkFBaUI7QUFDbkJDLFFBQUk7QUFDQUMsY0FBTSxjQUROO0FBRUFDLGdCQUFRO0FBRlIsS0FEZTtBQUtuQkMsUUFBSTtBQUNBRixjQUFNLG9CQUROO0FBRUFDLGdCQUFRO0FBRlIsS0FMZTtBQVNuQkUsUUFBSTtBQUNBSCxjQUFNLFNBRE47QUFFQUMsZ0JBQVE7QUFGUixLQVRlO0FBYW5CRyxRQUFJO0FBQ0FKLGNBQU0sV0FETjtBQUVBQyxnQkFBUTtBQUZSLEtBYmU7QUFpQm5CSSxRQUFJO0FBQ0FMLGNBQU0sVUFETjtBQUVBQyxnQkFBUTtBQUZSLEtBakJlO0FBcUJuQkssUUFBSTtBQUNBTixjQUFNLGFBRE47QUFFQUMsZ0JBQVE7QUFGUixLQXJCZTtBQXlCbkJNLFFBQUk7QUFDQVAsY0FBTSxhQUROO0FBRUFDLGdCQUFRO0FBRlIsS0F6QmU7QUE2Qm5CTyxRQUFJO0FBQ0FSLGNBQU0sVUFETjtBQUVBQyxnQkFBUTtBQUZSLEtBN0JlO0FBaUNuQlEsUUFBSTtBQUNBVCxjQUFNLGNBRE47QUFFQUMsZ0JBQVE7QUFGUixLQWpDZTtBQXFDbkJTLFFBQUk7QUFDQVYsY0FBTSxXQUROO0FBRUFDLGdCQUFRO0FBRlIsS0FyQ2U7QUF5Q25CVSxRQUFJO0FBQ0FYLGNBQU0sV0FETjtBQUVBQyxnQkFBUTtBQUZSLEtBekNlO0FBNkNuQlcsUUFBSTtBQUNBWixjQUFNLFNBRE47QUFFQUMsZ0JBQVE7QUFGUixLQTdDZTtBQWlEbkJZLFFBQUk7QUFDQWIsY0FBTSxnQkFETjtBQUVBQyxnQkFBUTtBQUZSLEtBakRlO0FBcURuQmEsUUFBSTtBQUNBZCxjQUFNLHFCQUROO0FBRUFDLGdCQUFRO0FBRlIsS0FyRGU7QUF5RG5CYyxRQUFJO0FBQ0FmLGNBQU0sZUFETjtBQUVBQyxnQkFBUTtBQUZSLEtBekRlO0FBNkRuQmUsUUFBSTtBQUNBaEIsY0FBTSxvQkFETjtBQUVBQyxnQkFBUTtBQUZSO0FBN0RlLENBQXZCOztRQW1FUUgsYyxHQUFBQSxjOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkVSOzs7O0FBR0EsSUFBTW1CLGFBQWEsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0QixPQUE1QixFQUFxQyxPQUFyQyxFQUE4QyxPQUE5QyxFQUF1RCxPQUF2RCxFQUFnRSxPQUFoRSxFQUF5RSxPQUF6RSxFQUFrRixPQUFsRixFQUEyRixPQUEzRixFQUFvRyxPQUFwRyxFQUE2RyxPQUE3RyxFQUFzSCxPQUF0SCxFQUErSCxPQUEvSCxFQUF3SSxPQUF4SSxDQUFuQjs7QUFFQSxJQUFNQyxzQkFBc0IsT0FBNUI7O0lBR01DLE07QUFDRixvQkFBWUMsRUFBWixFQUFnQjtBQUFBOztBQUNaLGFBQUtBLEVBQUwsR0FBVUEsRUFBVjtBQUNBLGFBQUtDLEtBQUwsR0FBYUMsU0FBU0MsY0FBVCxDQUF3QixLQUFLSCxFQUE3QixDQUFiO0FBQ0g7Ozs7b0NBRVc7QUFDUixnQkFBTUksYUFBYUYsU0FBU0csYUFBVCxDQUF1QixjQUF2QixDQUFuQjtBQUNBLGdCQUFNQyxlQUFlSixTQUFTRyxhQUFULENBQXVCLGlCQUF2QixDQUFyQjs7QUFFQUQsdUJBQVdHLFNBQVgsR0FBdUI3Qix3QkFBZSxLQUFLc0IsRUFBTCxDQUFRUSxLQUFSLENBQWMsQ0FBZCxDQUFmLEVBQWlDNUIsSUFBeEQ7QUFDQTBCLHlCQUFhQyxTQUFiLEdBQXlCN0Isd0JBQWUsS0FBS3NCLEVBQUwsQ0FBUVEsS0FBUixDQUFjLENBQWQsQ0FBZixFQUFpQzNCLE1BQTFEO0FBQ0g7OzsyQ0FFa0I7QUFDZixnQkFBTTRCLFVBQVVQLFNBQVNRLGdCQUFULENBQTBCLE1BQTFCLENBQWhCO0FBQ0FELG9CQUFRRSxPQUFSLENBQWdCO0FBQUEsdUJBQU1DLEdBQUdDLFNBQUgsQ0FBYUMsTUFBYixDQUFvQixjQUFwQixDQUFOO0FBQUEsYUFBaEI7O0FBRUEsaUJBQUtiLEtBQUwsQ0FBV1ksU0FBWCxDQUFxQkUsR0FBckIsQ0FBeUIsY0FBekI7QUFDSDs7O3FDQUVZO0FBQUE7O0FBQ1QsaUJBQUtkLEtBQUwsQ0FBV2UsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUM7QUFBQSx1QkFBTSxNQUFLQyxTQUFMLEVBQU47QUFBQSxhQUFyQztBQUNBLGlCQUFLaEIsS0FBTCxDQUFXZSxnQkFBWCxDQUE0QixPQUE1QixFQUFxQztBQUFBLHVCQUFNLE1BQUtFLGdCQUFMLEVBQU47QUFBQSxhQUFyQztBQUNIOzs7Ozs7QUFLTDs7O0FBQ0EsSUFBTUMsaUJBQWlCdEIsV0FBV3VCLEdBQVgsQ0FBZTtBQUFBLFdBQU0sSUFBSXJCLE1BQUosQ0FBV0MsRUFBWCxDQUFOO0FBQUEsQ0FBZixDQUF2Qjs7QUFFQTtBQUNBbUIsZUFBZVIsT0FBZixDQUF1QixVQUFDQyxFQUFELEVBQUlTLENBQUosRUFBVTtBQUM3QlQsT0FBR1osRUFBSCxLQUFVRixtQkFBVixHQUNLcUIsZUFBZUUsQ0FBZixFQUFrQkosU0FBbEIsRUFETCxHQUVJLElBRko7O0FBSUFMLE9BQUdaLEVBQUgsS0FBVUYsbUJBQVYsR0FDS3FCLGVBQWVFLENBQWYsRUFBa0JILGdCQUFsQixFQURMLEdBRUksSUFGSjtBQUdILENBUkQ7O0FBVUE7QUFDQUMsZUFBZVIsT0FBZixDQUF1QjtBQUFBLFdBQU1DLEdBQUdVLFVBQUgsRUFBTjtBQUFBLENBQXZCLEUiLCJmaWxlIjoib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9hcHAuanNcIik7XG4iLCJjb25zdCByZWdpb25zRGF0YU9iaiA9IHtcbiAgICBkczoge1xuICAgICAgICBuYW1lOiBcImRvbG5vxZtsxIVza2llXCIsXG4gICAgICAgIGVuTmFtZTogXCJMb3dlciBTaWxlc2lhXCJcbiAgICB9LFxuICAgIGtwOiB7XG4gICAgICAgIG5hbWU6IFwia3VqYXdza28tcG9tb3Jza2llXCIsXG4gICAgICAgIGVuTmFtZTogXCJLdXlhdmlhLVBvbWVyYW5pYVwiXG4gICAgfSxcbiAgICBsZDoge1xuICAgICAgICBuYW1lOiBcIsWCw7NkemtpZVwiLFxuICAgICAgICBlbk5hbWU6IFwixYHDs2TFulwiXG4gICAgfSxcbiAgICBsdToge1xuICAgICAgICBuYW1lOiBcImx1YmVsc2tpZVwiLFxuICAgICAgICBlbk5hbWU6IFwiTHVibGluXCJcbiAgICB9LFxuICAgIGxiOiB7XG4gICAgICAgIG5hbWU6IFwibHVidXNraWVcIixcbiAgICAgICAgZW5OYW1lOiBcIkx1YnVzelwiXG4gICAgfSxcbiAgICBtYToge1xuICAgICAgICBuYW1lOiBcIm1hxYJvcG9sc2tpZVwiLFxuICAgICAgICBlbk5hbWU6IFwiTGVzc2VyIFBvbGFuZFwiXG4gICAgfSxcbiAgICBtejoge1xuICAgICAgICBuYW1lOiBcIm1hem93aWVja2llXCIsXG4gICAgICAgIGVuTmFtZTogXCJNYXNvdmlhXCJcbiAgICB9LFxuICAgIG9wOiB7XG4gICAgICAgIG5hbWU6IFwib3BvbHNraWVcIixcbiAgICAgICAgZW5OYW1lOiBcIk9wb2xlXCJcbiAgICB9LFxuICAgIHBrOiB7XG4gICAgICAgIG5hbWU6IFwicG9ka2FycGFja2llXCIsXG4gICAgICAgIGVuTmFtZTogXCJTdWJjYXJwYXRoaWFcIlxuICAgIH0sXG4gICAgcGQ6IHtcbiAgICAgICAgbmFtZTogXCJwb2RsYXNraWVcIixcbiAgICAgICAgZW5OYW1lOiBcIlBvZGxhc2tpZVwiXG4gICAgfSxcbiAgICBwbToge1xuICAgICAgICBuYW1lOiBcInBvbW9yc2tpZVwiLFxuICAgICAgICBlbk5hbWU6IFwiUG9tZXJhbmlhXCJcbiAgICB9LFxuICAgIHNsOiB7XG4gICAgICAgIG5hbWU6IFwixZtsxIVza2llXCIsXG4gICAgICAgIGVuTmFtZTogXCJTaWxlc2lhXCJcbiAgICB9LFxuICAgIHNrOiB7XG4gICAgICAgIG5hbWU6IFwixZt3acSZdG9rcnp5c2tpZVwiLFxuICAgICAgICBlbk5hbWU6IFwiSG9seSBDcm9zcyBQcm92aW5jZVwiXG4gICAgfSxcbiAgICB3bToge1xuICAgICAgICBuYW1lOiBcIndhcm1pxYRza28tbWF6dXJza2llXCIsXG4gICAgICAgIGVuTmFtZTogXCJXYXJtaWEtTWFzdXJpYVwiXG4gICAgfSxcbiAgICB3cDoge1xuICAgICAgICBuYW1lOiBcIndpZWxrb3BvbHNraWVcIixcbiAgICAgICAgZW5OYW1lOiBcIkdyZWF0ZXIgUG9sYW5kXCJcbiAgICB9LFxuICAgIHpwOiB7XG4gICAgICAgIG5hbWU6IFwiemFjaG9kbmlvcG9tb3Jza2llXCIsXG4gICAgICAgIGVuTmFtZTogXCJXZXN0IFBvbWVyYW5pYVwiXG4gICAgfVxufTtcblxuZXhwb3J0IHtyZWdpb25zRGF0YU9ian07IiwiaW1wb3J0IHtyZWdpb25zRGF0YU9ian0gZnJvbSAnLi4vZGF0YS9yZWdpb25zJztcblxuXG5jb25zdCByZWdpb25zSURzID0gW1wicGwtZHNcIiwgXCJwbC1rcFwiLCBcInBsLWxkXCIsIFwicGwtbHVcIiwgXCJwbC1sYlwiLCBcInBsLW1hXCIsIFwicGwtbXpcIiwgXCJwbC1vcFwiLCBcInBsLXBrXCIsIFwicGwtcGRcIiwgXCJwbC1wbVwiLCBcInBsLXNsXCIsIFwicGwtc2tcIiwgXCJwbC13bVwiLCBcInBsLXdwXCIsIFwicGwtenBcIl07XG5cbmNvbnN0IGRlZmF1bHRBY3RpdmVSZWdpb24gPSBcInBsLW16XCI7XG5cblxuY2xhc3MgUmVnaW9uIHtcbiAgICBjb25zdHJ1Y3RvcihpZCkge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuaW5ET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICB9XG5cbiAgICBwcmludERhdGEoKSB7XG4gICAgICAgIGNvbnN0IHJlZ2lvbk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVnaW9uLW5hbWUnKTtcbiAgICAgICAgY29uc3QgcmVnaW9uRW5OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lvbi1lbi1uYW1lJyk7XG5cbiAgICAgICAgcmVnaW9uTmFtZS5pbm5lckhUTUwgPSByZWdpb25zRGF0YU9ialt0aGlzLmlkLnNsaWNlKDMpXS5uYW1lO1xuICAgICAgICByZWdpb25Fbk5hbWUuaW5uZXJIVE1MID0gcmVnaW9uc0RhdGFPYmpbdGhpcy5pZC5zbGljZSgzKV0uZW5OYW1lO1xuICAgIH1cblxuICAgIGNoYW5nZUJhY2tncm91bmQoKSB7XG4gICAgICAgIGNvbnN0IHJlZ2lvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwYXRoJyk7XG4gICAgICAgIHJlZ2lvbnMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdwYXRoLS1hY3RpdmUnKSk7XG5cbiAgICAgICAgdGhpcy5pbkRPTS5jbGFzc0xpc3QuYWRkKCdwYXRoLS1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRhKCkge1xuICAgICAgICB0aGlzLmluRE9NLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5wcmludERhdGEoKSk7XG4gICAgICAgIHRoaXMuaW5ET00uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmNoYW5nZUJhY2tncm91bmQoKSk7XG4gICAgfVxuXG59XG5cblxuLy9Jbml0aWFsaXplIHJlZ2lvbnNcbmNvbnN0IHJlZ2lvbnNPYmplY3RzID0gcmVnaW9uc0lEcy5tYXAoaWQgPT4gbmV3IFJlZ2lvbihpZCkpO1xuXG4vL0RlZmF1bHQgcmVnaW9uXG5yZWdpb25zT2JqZWN0cy5mb3JFYWNoKChlbCxpKSA9PiB7XG4gICAgZWwuaWQgPT09IGRlZmF1bHRBY3RpdmVSZWdpb24gP1xuICAgICAgICAocmVnaW9uc09iamVjdHNbaV0ucHJpbnREYXRhKCkpIDpcbiAgICAgICAgbnVsbDtcblxuICAgIGVsLmlkID09PSBkZWZhdWx0QWN0aXZlUmVnaW9uID9cbiAgICAgICAgKHJlZ2lvbnNPYmplY3RzW2ldLmNoYW5nZUJhY2tncm91bmQoKSkgOlxuICAgICAgICBudWxsO1xufSk7XG5cbi8vU3dpdGNoaW5nIHJlZ2lvbnNcbnJlZ2lvbnNPYmplY3RzLmZvckVhY2goZWwgPT4gZWwudXBkYXRlRGF0YSgpKTtcblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==