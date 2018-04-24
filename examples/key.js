webpackJsonp([11],{

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(33);


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"babel-runtime/helpers/classCallCheck\"");
throw new Error("Cannot find module \"babel-runtime/helpers/possibleConstructorReturn\"");
throw new Error("Cannot find module \"babel-runtime/helpers/inherits\"");
throw new Error("Cannot find module \"react\"");
throw new Error("Cannot find module \"react-dom\"");
throw new Error("Cannot find module \"prop-types\"");
throw new Error("Cannot find module \"rc-table\"");
throw new Error("Cannot find module \"rc-table/assets/index.less\"");



/* eslint-disable no-console,func-names,react/no-multi-comp */






var CheckBox = function CheckBox(_ref) {
  var id = _ref.id;
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    'label',
    null,
    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('input', { type: 'checkbox' }),
    id
  );
};

var Demo = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Demo, _React$Component);

  function Demo(props) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Demo);

    var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _this.handleClick = function (index) {
      return function () {
        _this.remove(index);
      };
    };

    _this.renderAction = function (o, row, index) {
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'a',
        { href: '#', onClick: _this.handleClick(index) },
        'Delete'
      );
    };

    _this.state = {
      data: props.data
    };
    return _this;
  }

  Demo.prototype.remove = function remove(index) {
    var rows = this.state.data;
    rows.splice(index, 1);
    this.setState({
      data: rows
    });
  };

  Demo.prototype.checkbox = function checkbox(a) {
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CheckBox, { id: a });
  };

  Demo.prototype.render = function render() {
    var state = this.state;
    var columns = [{ title: 'title1', dataIndex: 'a', key: 'a', width: 100, render: this.checkbox }, { title: 'title2', dataIndex: 'b', key: 'b', width: 100 }, { title: 'title3', dataIndex: 'c', key: 'c', width: 200 }, { title: 'Operations', dataIndex: '', key: 'x', render: this.renderAction }];
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_rc_table___default.a, { columns: columns, data: state.data, className: 'table', rowKey: function rowKey(record) {
        return record.a;
      } });
  };

  return Demo;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

Demo.propTypes = {
  data: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.array.isRequired
};


var data = [{ a: '123' }, { a: 'cdd', b: 'edd' }, { a: '1333', c: 'eee', d: 2 }];

__WEBPACK_IMPORTED_MODULE_4_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    'h2',
    null,
    'specify key'
  ),
  __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Demo, { data: data })
), document.getElementById('__react-content'));

/***/ })

},[32]);
//# sourceMappingURL=key.js.map