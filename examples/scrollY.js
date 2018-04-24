webpackJsonp([4],{

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(47);


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"babel-runtime/helpers/classCallCheck\"");
throw new Error("Cannot find module \"babel-runtime/helpers/possibleConstructorReturn\"");
throw new Error("Cannot find module \"babel-runtime/helpers/inherits\"");
throw new Error("Cannot find module \"react\"");
throw new Error("Cannot find module \"react-dom\"");
throw new Error("Cannot find module \"rc-table\"");
throw new Error("Cannot find module \"rc-table/assets/index.less\"");



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
      showBody: true
    }, _this.toggleBody = function () {
      _this.setState({
        showBody: !_this.state.showBody
      });
    }, _temp), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  Demo.prototype.render = function render() {
    var columns = [{ title: 'title1', key: 'a', dataIndex: 'a', width: 100 }, { id: '123', title: 'title2', dataIndex: 'b', key: 'b', width: 100 }, { title: 'title3', key: 'c', dataIndex: 'c', width: 200 }, {
      title: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'a',
        { onClick: this.toggleBody, href: '#' },
        this.state.showBody ? '隐藏' : '显示',
        '\u4F53'
      ),
      key: 'x',
      width: 200,
      render: function render() {
        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'a',
          { href: '#' },
          'Operations'
        );
      }
    }];
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_rc_table___default.a, {
      columns: columns,
      data: data,
      scroll: { y: 300 },
      rowKey: function rowKey(record) {
        return record.key;
      },
      bodyStyle: {
        display: this.state.showBody ? '' : 'none'
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
    'scroll body table'
  ),
  __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Demo, null)
), document.getElementById('__react-content'));

/***/ })

},[46]);
//# sourceMappingURL=scrollY.js.map