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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/images/background.png":
/*!*****************************************!*\
  !*** ./resources/images/background.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./resources/images/hills.png":
/*!************************************!*\
  !*** ./resources/images/hills.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./resources/images/platform.png":
/*!***************************************!*\
  !*** ./resources/images/platform.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./resources/images/platformSmallTall.png":
/*!************************************************!*\
  !*** ./resources/images/platformSmallTall.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_images_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../resources/images/platform.png */ "./resources/images/platform.png");
/* harmony import */ var _resources_images_hills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resources/images/hills.png */ "./resources/images/hills.png");
/* harmony import */ var _resources_images_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../resources/images/background.png */ "./resources/images/background.png");
/* harmony import */ var _resources_images_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../resources/images/platformSmallTall.png */ "./resources/images/platformSmallTall.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




 //------//
//Canvas//
//------//

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var walkSpeed = 7;
canvas.width = 1024;
canvas.height = 576; //----------//
//Canvas End//
//----------//
//-------// ------------- //
// Player// (and Gravity) //
//-------// ------------- //

var grav = 0.45; //classes

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.color = "red";
    this.width = 30;
    this.height = 30;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.fillStyle = this.color;
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      this.draw();

      if (this.position.y + this.height + this.velocity.y <= canvas.height - 50) {
        this.velocity.y += grav;
      }
    }
  }]);

  return Player;
}();

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = createImage(_resources_images_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
    this.width = createImage(_resources_images_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]).width;
    this.height = createImage(_resources_images_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]).height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var PlatformSmallTall = /*#__PURE__*/function () {
  function PlatformSmallTall(_ref2) {
    var x = _ref2.x,
        y = _ref2.y;

    _classCallCheck(this, PlatformSmallTall);

    this.position = {
      x: x,
      y: y
    };
    this.image = createImage(_resources_images_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
    this.width = createImage(_resources_images_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]).width;
    this.height = createImage(_resources_images_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]).height;
  }

  _createClass(PlatformSmallTall, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return PlatformSmallTall;
}();

var genericObject = /*#__PURE__*/function () {
  function genericObject(_ref3) {
    var x = _ref3.x,
        y = _ref3.y;

    _classCallCheck(this, genericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = createImage(_resources_images_background_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
    this.width = this.image.width;
    this.height = this.image.height;
  }

  _createClass(genericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return genericObject;
}();

var hill = /*#__PURE__*/function () {
  function hill(_ref4) {
    var x = _ref4.x,
        y = _ref4.y;

    _classCallCheck(this, hill);

    this.position = {
      x: x,
      y: y
    };
    this.image = createImage(_resources_images_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
    this.width = this.image.width;
    this.height = this.image.height;
  }

  _createClass(hill, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return hill;
}(); //
//genericObject means background object
//


var platforms = [];
var genericObjects = [];
var hillObjects = [];
var player = new Player();
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffset = 0;

function init() {
  platforms = [new PlatformSmallTall({
    x: createImage(_resources_images_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]).width + 1920,
    y: 420,
    image: createImage(_resources_images_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new PlatformSmallTall({
    x: createImage(_resources_images_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]).width + 1920,
    y: 420,
    image: createImage(_resources_images_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: -5,
    y: 520,
    image: createImage(_resources_images_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: createImage(_resources_images_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]).width + 220,
    y: 520,
    image: createImage(_resources_images_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: createImage(_resources_images_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]).width * 2 + 350,
    y: 520,
    image: createImage(_resources_images_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: createImage(_resources_images_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]).width * 3 + 740,
    y: 520,
    image: createImage(_resources_images_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  })];
  genericObjects = [new genericObject({
    x: -500,
    y: -1,
    image: createImage(_resources_images_background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  })];
  hillObjects = [new hill({
    x: -1,
    y: -1,
    image: createImage(hill)
  })];
  player = new Player();
  var scrollOffset = 0;
} // Repeated Drawing and walking


function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  hillObjects.forEach(function (hill) {
    hill.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = walkSpeed;
  } else if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -walkSpeed;
  } //if (keys.left.pressed + keys.right.pressed == false) {
  else {
      player.velocity.x = 0;

      if (keys.right.pressed) {
        scrollOffset += 5;
        platforms.forEach(function (platform) {
          platform.position.x -= walkSpeed;
        }); // parallax scroll

        genericObjects.forEach(function (genericObject) {
          genericObject.position.x -= 3;
        });
        hillObjects.forEach(function (hill) {
          hill.position.x -= 3;
        }); //
      } else if (keys.left.pressed) {
        scrollOffset -= 5;
        platforms.forEach(function (platform) {
          platform.position.x += walkSpeed;
        }); // parallax scroll

        genericObjects.forEach(function (genericObject) {
          genericObject.position.x += 3;
        });
        hillObjects.forEach(function (hill) {
          hill.position.x += 3;
        }); //
      }
    } // Win Game


  var won = false;
  var close = false;

  if (scrollOffset > 1500 && scrollOffset < 1800) {
    close = true;
  }

  if (scrollOffset > 1900) {
    close = false;
    won = true;
  }

  if (scrollOffset < 1900) {
    won = false;
    c.fillText("", canvas.width / 4 - 100, canvas.height / 2);
  }

  if (scrollOffset < 1500) {
    won = false;
    close = false;
  }

  if (player.position.y > canvas.height) {
    console.log('dead');
    init();
  }

  if (close == true) {
    c.font = "50px Georgia";
    c.fillText("Jump Off The Platform To Win", canvas.width / 4 - 100, canvas.height / 2);
  }

  if (won == true) {
    c.fillStyle = 'white';
    c.fillRect(-1, -1, canvas.width, canvas.height);
    c.font = "70px Georgia";
    c.fillStyle = 'black';
    c.fillText("You Win!, Ctrl + R to play again.", canvas.width / 9 - 100, canvas.height / 2);
  } else c.fillText("", canvas.width / 2 - 100, canvas.height / 2); //Platform Collision Detection//


  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
    /* if (player.position.y + player.height <= PlatformSmallTall.position.y && player.position.y + player.height + player.velocity.y >= PlatformSmallTall.position.y && player.position.x + player.width >= PlatformSmallTall.position.x && player.position.x <=PlatformSmallTall.position.x + PlatformSmallTall.width) {
         player.velocity.y = 0
     }*/

  });
}

init();
animate();
addEventListener('keydown', function (_ref5) {
  var key = _ref5.key;

  switch (key) {
    case 'a':
      console.log('left');
      keys.left.pressed = true;
      break;

    case 's':
      console.log('down');
      break;

    case 'd':
      console.log('right');
      keys.right.pressed = true;
      break;

    case 'w':
      console.log('up');
      player.velocity.y = -10;
      break;

    case ' ':
      console.log('space');
      player.velocity.y = -10;
      break;
  }

  console.log(keys.right.pressed);
});
addEventListener('keyup', function (_ref6) {
  var key = _ref6.key;

  switch (key) {
    case 'a':
      console.log('left');
      keys.left.pressed = false;
      break;

    case 'd':
      console.log('right');
      keys.right.pressed = false;
      break;

    case 'w':
      console.log('up');
      player.velocity.y -= 1;
      break;

    case 'space':
      console.log(' ');
      player.velocity.y -= 1;
      break;
  }

  console.log(keys.right.pressed);
}); //---------//
//Platforms//
//---------//
//------------------------------------------------------------------//
//------------------------------------------------------------------//    
// NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE // 
//               MAKE PLATFORMER LIBRARY, LIKE SLOLIB               // 
// NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE // 
//------------------------------------------------------------------//
//------------------------------------------------------------------//    
//

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map