"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vuex = require("vuex");

var _vuexPersistedstate = _interopRequireDefault(require("vuex-persistedstate"));

var _common = _interopRequireDefault(require("./modules/common"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _vuex.createStore)({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    common: _common["default"]
  },
  plugins: [(0, _vuexPersistedstate["default"])()]
});

exports["default"] = _default;