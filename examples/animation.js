webpackJsonp([27],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"babel-runtime/helpers/classCallCheck\"");
throw new Error("Cannot find module \"babel-runtime/helpers/possibleConstructorReturn\"");
throw new Error("Cannot find module \"babel-runtime/helpers/inherits\"");
throw new Error("Cannot find module \"babel-runtime/helpers/extends\"");
throw new Error("Cannot find module \"react\"");
throw new Error("Cannot find module \"react-dom\"");
throw new Error("Cannot find module \"rc-table\"");
throw new Error("Cannot find module \"rc-animate\"");
throw new Error("Cannot find module \"rc-table/assets/index.less\"");
throw new Error("Cannot find module \"rc-table/assets/animation.less\"");




/* eslint-disable no-console,func-names,react/no-multi-comp */







var AnimateBody = function AnimateBody(props) {
  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_rc_animate___default.a, __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({ transitionName: 'move', component: 'tbody' }, props));
};

var Demo = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Demo, _React$Component);

  function Demo(props) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Demo);

    var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _this.columns = [{ title: 'title1', dataIndex: 'a', key: 'a', width: 100 }, { id: '123', title: 'title2', dataIndex: 'b', key: 'b', width: 100 }, { title: 'title3', dataIndex: 'c', key: 'c', width: 200 }, {
      title: 'Operations', dataIndex: '', key: 'd', render: function render(text, record) {
        return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'a',
          { onClick: function onClick(e) {
              return _this.onDelete(record.key, e);
            }, href: '#' },
          'Delete'
        );
      }
    }];
    _this.state = {
      data: [{ a: '123', key: '1' }, { a: 'cdd', b: 'edd', key: '2' }, { a: '1333', c: 'eee', key: '3' }]
    };
    return _this;
  }

  Demo.prototype.onDelete = function onDelete(key, e) {
    console.log('Delete', key);
    e.preventDefault();
    var data = this.state.data.filter(function (item) {
      return item.key !== key;
    });
    this.setState({ data: data });
  };

  Demo.prototype.onAdd = function onAdd() {
    var data = [].concat(this.state.data);
    data.push({
      a: 'new data',
      b: 'new data',
      c: 'new data',
      key: Date.now()
    });
    this.setState({ data: data });
  };

  Demo.prototype.render = function render() {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'div',
      { style: { margin: 20 } },
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'h2',
        null,
        'Table row with animation'
      ),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'button',
        { onClick: function onClick() {
            return _this2.onAdd();
          } },
        '\u6DFB\u52A0'
      ),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_rc_table___default.a, {
        columns: this.columns,
        data: this.state.data,
        components: {
          body: { wrapper: AnimateBody }
        }
      })
    );
  };

  return Demo;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Demo, null), document.getElementById('__react-content'));

/***/ })
],[0]);
//# sourceMappingURL=animation.js.map