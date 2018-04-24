webpackJsonp([21],{

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"babel-runtime/helpers/classCallCheck\"");
throw new Error("Cannot find module \"babel-runtime/helpers/possibleConstructorReturn\"");
throw new Error("Cannot find module \"babel-runtime/helpers/inherits\"");
throw new Error("Cannot find module \"react\"");
throw new Error("Cannot find module \"react-dom\"");
throw new Error("Cannot find module \"rc-table\"");
throw new Error("Cannot find module \"rc-menu\"");
throw new Error("Cannot find module \"rc-dropdown\"");
throw new Error("Cannot find module \"rc-table/assets/index.less\"");
throw new Error("Cannot find module \"rc-dropdown/assets/index.css\"");
throw new Error("Cannot find module \"rc-menu/assets/index.css\"");



/* eslint-disable no-console,func-names,react/no-multi-comp */









var data = [];
for (var i = 0; i < 10; i++) {
  data.push({
    key: i,
    a: 'a' + i,
    b: 'b' + i,
    c: 'c' + i
  });
}

var Demo = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Demo, _React$Component);

  function Demo() {
    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Demo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      visible: false
    }, _this.filters = [], _this.handleVisibleChange = function (visible) {
      _this.setState({ visible: visible });
    }, _this.handleSelect = function (selected) {
      _this.filters.push(selected);
    }, _this.handleDeselect = function (key) {
      var index = _this.filters.indexOf(key);
      if (index !== -1) {
        _this.filters.splice(index, 1);
      }
    }, _this.confirmFilter = function () {
      console.log(_this.filters.join(','));
      _this.setState({
        visible: false
      });
    }, _temp), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  Demo.prototype.render = function render() {
    var menu = __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_6_rc_menu___default.a,
      {
        style: { width: 200 },
        multiple: true,
        onSelect: this.handleSelect,
        onDeselect: this.handleDeselect
      },
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_6_rc_menu__["Item"],
        { key: '1' },
        'one'
      ),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_6_rc_menu__["Item"],
        { key: '2' },
        'two'
      ),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_6_rc_menu__["Item"],
        { key: '3' },
        'three'
      ),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_rc_menu__["Divider"], null),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_6_rc_menu__["Item"],
        { disabled: true },
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'button',
          {
            style: {
              cursor: 'pointer',
              color: '#000',
              pointerEvents: 'visible'
            },
            onClick: this.confirmFilter
          },
          '\u786E\u5B9A'
        )
      )
    );

    var columns = [{
      title: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'div',
        null,
        'title1',
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_rc_dropdown___default.a,
          {
            trigger: ['click'],
            onVisibleChange: this.handleVisibleChange,
            visible: this.state.visible,
            overlay: menu
          },
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
            'a',
            { href: '#' },
            'filter'
          )
        )
      ), key: 'a', dataIndex: 'a', width: 100
    }, { title: 'title2', key: 'b', dataIndex: 'b', width: 100 }, { title: 'title3', key: 'c', dataIndex: 'c', width: 200 }];

    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_rc_table___default.a, {
      columns: columns,
      data: data,
      rowKey: function rowKey(record) {
        return record.key;
      }
    });
  };

  return Demo;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_4_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    'h2',
    null,
    'use dropdown'
  ),
  __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Demo, null)
), document.getElementById('__react-content'));

/***/ })

},[12]);
//# sourceMappingURL=dropdown.js.map