webpackJsonp([2],{

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(51);


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"babel-runtime/helpers/taggedTemplateLiteralLoose\"");
throw new Error("Cannot find module \"react\"");
throw new Error("Cannot find module \"react-dom\"");
throw new Error("Cannot find module \"styled-components\"");
throw new Error("Cannot find module \"rc-table\"");
throw new Error("Cannot find module \"rc-table/assets/index.less\"");


var _templateObject = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteralLoose___default()(['\n\t&:hover {\n\t\tbackground: palevioletred !important;\n\t}\n'], ['\n\t&:hover {\n\t\tbackground: palevioletred !important;\n\t}\n']);







var columns = [{ title: 'title1', dataIndex: 'a', key: 'a', width: 100 }, { id: '123', title: 'title2', dataIndex: 'b', key: 'b', width: 100 }, { title: 'title3', dataIndex: 'c', key: 'c', width: 200 }, {
  title: 'Operations',
  dataIndex: '',
  key: 'd',
  render: function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'a',
      { href: '#' },
      'Operations'
    );
  }
}];

var data = [{ a: '123', key: '1' }, { a: 'cdd', b: 'edd', key: '2' }, { a: '1333', c: 'eee', d: 2, key: '3' }];

var BodyRow = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.tr(_templateObject);

var components = {
  body: {
    row: BodyRow
  }
};

__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'h2',
    null,
    'Integrate with styled-components'
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_rc_table___default.a, { columns: columns, data: data, components: components })
), document.getElementById('__react-content'));

/***/ })

},[50]);
//# sourceMappingURL=styled-components.js.map