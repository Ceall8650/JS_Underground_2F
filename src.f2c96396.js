parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"91zb":[function(require,module,exports) {

},{}],"CLUq":[function(require,module,exports) {
"use strict";function e(e){return document.querySelector(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.selectElem=e;
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./style.scss");var e=require("./utilities"),t=(0,e.selectElem)("#hour_hand"),n=(0,e.selectElem)("#minute_hand"),r=(0,e.selectElem)("#second_hand");function a(e){return e-12}function s(e,n){var r=30*e+n/60*30;t.style.transform="rotate(".concat(r+90,"deg) translateX(-36px)")}function o(e){var t=6*e;n.style.transform="rotate(".concat(t,"deg) translateY(-48px)")}function c(e){var t=6*e;console.log("rotateAngle :",t),r.style.transform="rotate(".concat(t+180,"deg) translateY(64px)")}function l(){var e=new Date,t=e.getHours(),n=e.getMinutes(),r=e.getSeconds();t>=12&&(t=a(t)),s(t,n),o(n),c(r),console.log(t,n,r)}setInterval(l,1e3);
},{"./style.scss":"91zb","./utilities":"CLUq"}]},{},["Focm"], null)
//# sourceMappingURL=src.f2c96396.map