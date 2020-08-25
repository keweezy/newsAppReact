"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _app["default"];
  }
});
exports.storage = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/storage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: 'AIzaSyAq6Ndp8ZdBK_p8lxxhPnKm2FwJ90rpDLY',
  authDomain: 'marketboy-a51e5.firebaseapp.com',
  storageBucket: 'marketboy-a51e5.appspot.com',
  projectId: 'marketboy-a51e5'
}; // Initialize Firebase

_app["default"].initializeApp(firebaseConfig);

var storage = _app["default"].storage(); //analytics is optional for this tutoral
// firebase.analytics();


exports.storage = storage;