webpackJsonp([23],{

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"babel-runtime/helpers/extends\"");
throw new Error("Cannot find module \"babel-runtime/helpers/classCallCheck\"");
throw new Error("Cannot find module \"babel-runtime/helpers/possibleConstructorReturn\"");
throw new Error("Cannot find module \"babel-runtime/helpers/inherits\"");
throw new Error("Cannot find module \"babel-runtime/helpers/objectWithoutProperties\"");
throw new Error("Cannot find module \"react\"");
throw new Error("Cannot find module \"react-dom\"");
throw new Error("Cannot find module \"prop-types\"");
throw new Error("Cannot find module \"rc-table\"");
throw new Error("Cannot find module \"rc-table/assets/index.less\"");
throw new Error("Cannot find module \"react-resizable\"");
throw new Error("Cannot find module \"react-resizable/css/styles.css\"");





/* eslint-disable no-console,func-names,react/no-multi-comp */








var ResizeableTitle = function ResizeableTitle(props) {
  var onResize = props.onResize,
      width = props.width,
      restProps = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_objectWithoutProperties___default()(props, ['onResize', 'width']);

  if (!width) {
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('th', restProps);
  }

  return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_10_react_resizable__["Resizable"],
    { width: width, height: 0, onResize: onResize },
    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('th', restProps)
  );
};

ResizeableTitle.propTypes = {
  onResize: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func.isRequired,
  width: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.number
};

var Demo = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Demo, _React$Component);

  function Demo() {
    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Demo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      columns: [{ title: 'title1', dataIndex: 'a', key: 'a', width: 100 }, { id: '123', title: 'title2', dataIndex: 'b', key: 'b', width: 100 }, { title: 'title3', dataIndex: 'c', key: 'c', width: 200 }, {
        title: 'Operations', dataIndex: '', key: 'd', render: function render() {
          return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'a',
            { href: '#' },
            'Operations'
          );
        }
      }]
    }, _this.components = {
      header: {
        cell: ResizeableTitle
      }
    }, _this.data = [{ a: '123', key: '1' }, { a: 'cdd', b: 'edd', key: '2' }, { a: '1333', c: 'eee', d: 2, key: '3' }], _this.handleResize = function (index) {
      return function (e, _ref) {
        var size = _ref.size;

        _this.setState(function (_ref2) {
          var columns = _ref2.columns;

          var nextColumns = [].concat(columns);
          nextColumns[index] = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, nextColumns[index], {
            width: size.width
          });
          return { columns: nextColumns };
        });
      };
    }, _temp), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  Demo.prototype.render = function render() {
    var _this2 = this;

    var columns = this.state.columns.map(function (col, index) {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, col, {
        onHeaderCell: function onHeaderCell(column) {
          return {
            width: column.width,
            onResize: _this2.handleResize(index)
          };
        }
      });
    });

    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'h2',
        null,
        'Integrate with react-resizable'
      ),
      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_rc_table___default.a, { components: this.components, columns: columns, data: this.data })
    );
  };

  return Demo;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Demo, null), document.getElementById('__react-content'));

/***/ })

},[8]);
//# sourceMappingURL=column-resize.js.map