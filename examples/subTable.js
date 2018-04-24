webpackJsonp([1],{

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(53);


/***/ }),

/***/ 53:
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





var data = [{
  a: 'a1'
}, {
  a: 'a2',
  b: 'b2',
  children: [{
    a: 'a2-1',
    b: 'b2-1'
  }, {
    a: 'a2-2',
    b: 'b2-2'
  }]
}, {
  a: 'a3',
  c: 'c3',
  d: 'd3'
}];

var Demo = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Demo, _React$Component);

  function Demo() {
    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Demo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (record, e) {
      e.preventDefault();
      console.log(record.a);
    }, _temp), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  Demo.prototype.render = function render() {
    var _this2 = this;

    var columns = [{ title: 'title1', dataIndex: 'a', key: 'a', width: 100 }, { title: 'title2', dataIndex: 'b', key: 'b', width: 100 }, { title: 'title3', dataIndex: 'c', key: 'c', width: 200 }, {
      title: 'Operations', dataIndex: '', key: 'x', render: function render(text, record) {
        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'a',
          { href: '#', onClick: function onClick(e) {
              return _this2.handleClick(record, e);
            } },
          'click ',
          record.a
        );
      }
    }];
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'h2',
        null,
        'sub table'
      ),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_rc_table___default.a, {
        columns: columns,
        expandIconAsCell: true,
        data: data,
        rowKey: function rowKey(record) {
          return record.a;
        }
      })
    );
  };

  return Demo;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_4_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Demo, null), document.getElementById('__react-content'));

/***/ })

},[52]);
//# sourceMappingURL=subTable.js.map