webpackJsonp([10],{

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(35);


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"react\"");
throw new Error("Cannot find module \"react-dom\"");
throw new Error("Cannot find module \"rc-table\"");
throw new Error("Cannot find module \"rc-table/assets/index.less\"");





var columns = [{ title: 'First Name', dataIndex: 'names.first', key: 'a', width: 100 }, { title: 'Last Name', dataIndex: 'names.last', key: 'b', width: 100 }, { title: 'Age', dataIndex: 'age', key: 'c', width: 100 }];

var data = [{
  age: '23',
  names: {
    first: 'John',
    last: 'Doe'
  },
  key: '1'
}, {
  age: '36',
  names: {
    first: 'Terry',
    last: 'Garner'
  },
  key: '2'
}, {
  age: '52',
  names: {
    first: 'Thomas',
    last: 'Goodwin'
  },
  key: '3'
}];

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h2',
    null,
    'Nested data table'
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rc_table___default.a, {
    columns: columns,
    data: data,
    className: 'table'
  })
), document.getElementById('__react-content'));

/***/ })

},[34]);
//# sourceMappingURL=nested.js.map