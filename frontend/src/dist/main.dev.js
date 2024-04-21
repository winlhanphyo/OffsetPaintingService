"use strict";

var _vue = require("vue");

var _vueAwesomePaginate = _interopRequireDefault(require("vue-awesome-paginate"));

var _vueI18n = require("vue-i18n");

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _message = _interopRequireDefault(require("./message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var i18n = (0, _vueI18n.createI18n)({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages: _message["default"] // allowComposition: true,
  // legacy: true,

});
(0, _vue.createApp)(_App["default"]).use(_vueAwesomePaginate["default"]).use(_store["default"]).use(_router["default"]).use(i18n).mount('#app');