!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.catta=t():e.catta=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e){return"function"==typeof e}function u(e,t){return Object.keys(e).map(function(n){var r=e[n];return t(r,n)})}function i(e,t){if(e){var n=u(e,function(e,n){if("object"===("undefined"==typeof e?"undefined":f(e))){var o=t?[].concat(r(t)):[];return o.push(n),i(e,o)}if(e=encodeURIComponent(e),t){var u=void 0;return u=t.length>1?t[0]+"["+t.slice(1).join("][")+"]["+n+"]":t[0]+"["+n+"]",escape(u)+"="+e}return n+"="+e});return n.join("&")}}function a(e,t){var n=/\?/.test(e);return t.forEach(function(t){void 0!==t&&("object"===("undefined"==typeof t?"undefined":f(t))?u(t,function(t,r){n?e+="&"+r+"="+t:(e+="?"+r+"="+t,n=!0)}):n?e+="&"+t:(e+="?"+t,n=!0))}),e}function c(e,t){return t instanceof HTMLFormElement?{data:new FormData(t)}:"object"===("undefined"==typeof t?"undefined":f(t))?{contentType:s.form,data:i(t)}:{contentType:s.text,data:t}}Object.defineProperty(t,"__esModule",{value:!0});var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.serialize=i,t.combineUrlQuery=a,t.getRequestData=c;var s=(t.ERROR={REQUEST:"[Request Error]: the request was failed, please confirm remote origin is correct",TIMEOUT:"[Timeout Error]: the request has been take over given time",UPLOAD_FILE:"[Upload File Error]: Can't upload file without FormData support",NOT_SUPPORT:function(e){return"["+e+" Not Support]: your browser do not support "+e}},{form:"application/x-www-form-urlencoded",json:"application/json",multipart:"multipart/form-data",text:"text/plain"}),l={method:"get",type:"",timeout:3,resultType:"json",cross:!0,withCookie:!0},d=(t.noop=function(){},t.has=function(e,t){return t.split(".").every(function(t){if("object"===("undefined"==typeof e?"undefined":f(e))&&e.hasOwnProperty(t))return e=e[t],!0})}),p=t.assign=function(e){for(var t=Object(e),n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return r.forEach(function(e){if(null!=e)for(var n in e)d(e,n)&&(t[n]=e[n])}),t};t.initOpts=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e&&(t.url=e),n?p(l,t):p({},l,t)},t.isSupport={globalFetch:o(window.fetch),formData:o(window.FormData)}},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return new Promise(function(t,n){var r=new XMLHttpRequest;r.onreadystatechange=function(){if(r.readyState===XMLHttpRequest.DONE)if(200===r.status){var o=void 0;o="json"===e.resultType?JSON.parse(r.responseText):"response"===e.resultType?r.response:r.responseText,t(o)}else n(0===r.status?u.ERROR.TIMEOUT:u.ERROR.REQUEST)};var o=u.getRequestData(e.method,e.data);"get"===e.method&&o&&(e.url=u.combineUrlQuery(e.url,[o.data])),r.open(e.method.toUpperCase(),e.url),r.timeout=1e3*e.timeout+50,r.withCredentials=e.withCookie,o&&o.contentType&&r.setRequestHeader("Content-Type",o.contentType),e.headers&&Object.keys(e.headers).each(function(t){r.setRequestHeader(t,e.headers[t])}),"post"===e.method&&o?r.send(o.data):r.send()})};var o=n(0),u=r(o)},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return new Promise(function(t,n){u.isSupport.globalFetch?!function(){var r={};if(r.method=e.method.toUpperCase(),r.mode=e.cross?"cors":"same-origin",r.credentials=e.withCookie?"include":"omit",e.data){var o=u.getRequestData(e.method,e.data);o&&o.contentType&&(r.headers={"Content-Type":o.contentType}),e.headers&&u.assign(r.headers,e.headers),"post"===e.method?r.body=o.data:e.url=u.combineUrlQuery(e.url,[o.data])}var i=window.setTimeout(function(){n(u.ERROR.TIMEOUT)},1e3*e.timeout+50);fetch(e.url,r).then(function(n){window.clearTimeout(i);var r=void 0;r="response"===e.resultType?n:"json"===e.resultType?n.json():n.text(),t(r)}).catch(function(e){window.clearTimeout(i),n(u.ERROR.REQUEST,e)})}():n(u.ERROR.NOT_SUPPORT("GlobalFetch"))})};var o=n(0),u=r(o)},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return new Promise(function(t,n){var r=e.jsonp||{},o=String(Math.random()).replace(".",""),i=r.callbackName||"jsonp"+o,a=e.url,c=u.getRequestData("get",e.data),f=document.body||document.head,s=document.createElement("script");s.src=u.combineUrlQuery(a,[{callback:i},c&&c.data]),s.onerror=function(){n(u.ERROR.REQUEST),window.clearTimeout(d)},f.appendChild(s);var l=function(){window[i]=u.noop,f.removeChild(s)},d=window.setTimeout(function(){n(u.ERROR.TIMEOUT),l()},1e3*e.timeout+50);window[i]=function(){window.clearTimeout(d),t.apply(void 0,arguments),l()}})};var o=n(0),u=r(o)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}var u=n(0),i=o(u),a=n(1),c=r(a),f=n(2),s=r(f),l=n(3),d=r(l),p={},y=function(e,t){if(t=i.initOpts(e,t),"ajax"===t.type)return(0,c.default)(t);if("jsonp"===t.type)return(0,d.default)(t);if("fetch"===t.type)return(0,s.default)(t);for(var n in p){var r=p[n];if(r.detector(t))return r.processor(t)}return i.isSupport.globalFetch?(0,s.default)(t):(0,c.default)(t)};y.customAdapter=function(e,t){p[e]=t},y.globalConfig=function(e){i.initOpts(null,e,!0)},y.ajax=function(e,t){return t=i.initOpts(e,t),(0,c.default)(t)},y.jsonp=function(e,t){return t=i.initOpts(e,t),(0,d.default)(t)},y.fetch=function(e,t){return t=i.initOpts(e,t),(0,s.default)(t)},e.exports=y}])});