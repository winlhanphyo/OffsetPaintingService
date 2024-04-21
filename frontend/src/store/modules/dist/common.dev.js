"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var state = {
  data: {
    lang: "en"
  }
};
var getters = {
  StateCommon: function StateCommon(state) {
    return state.data;
  }
};
var actions = {
  commonData: function commonData(_ref, detail) {
    var commit;
    return regeneratorRuntime.async(function commonData$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit;
            _context.next = 3;
            return regeneratorRuntime.awrap(commit("setCommonData", detail));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  resetDetailData: function resetDetailData(_ref2) {
    var commit;
    return regeneratorRuntime.async(function resetDetailData$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            commit = _ref2.commit;
            _context2.next = 3;
            return regeneratorRuntime.awrap(commit("resetCommonData", null));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};
var mutations = {
  setCommonData: function setCommonData(state, common) {
    Object.keys(common).map(function (key) {
      state.data[key] = common[key];
    });
  },
  resetCommonData: function resetCommonData(state, common) {
    console.log("---common", common);
    state.data = {
      lang: 'en'
    };
  }
};
var _default = {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};
exports["default"] = _default;