webpackJsonp([22],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"react\"");
throw new Error("Cannot find module \"react-dom\"");
throw new Error("Cannot find module \"rc-table\"");
throw new Error("Cannot find module \"rc-table/assets/index.less\"");
/* eslint-disable no-console,func-names,react/no-multi-comp */





var columns = [{
  title: 'Name',
  dataIndex: 'name',
  width: 100,
  fixed: 'left',
  footer: 'Summary'
}, {
  title: 'Money',
  dataIndex: 'money',
  width: 100,
  render: function render(text) {
    return '$' + text.toFixed(2);
  },
  footer: function footer(data) {
    return 'Total: $' + data.reduce(function (acc, row) {
      return acc + row.money;
    }, 0).toFixed(2);
  }
}, { title: 'Address', dataIndex: 'address', width: 300 }];

var data = [{
  name: 'John Brown',
  money: 300,
  address: 'New York No. 1 Lake Park'
}, {
  name: 'Jim Green',
  money: 128,
  address: 'London No. 1 Lake Park'
}, {
  name: 'Joe Black',
  money: 240,
  address: 'Sidney No. 1 Lake Park'
}, {
  name: 'Mick Sydney',
  money: 300,
  address: 'Sidney No. 1 Lake Park'
}, {
  name: 'Miguel Manning',
  money: 120,
  address: 'Sidney No. 1 Lake Park'
}, {
  name: 'John Appleseed',
  money: 256,
  address: '1 Infinite Loop; Cupertino, CA 95014'
}];

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h2',
    null,
    'Demonstrate column footer'
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rc_table___default.a, { columns: columns, scroll: { x: '150%', y: 200 }, data: data })
), document.getElementById('__react-content'));

/***/ })

},[10]);
//# sourceMappingURL=columnFooter.js.map