webpackJsonp([8],{

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(39);


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"babel-runtime/helpers/classCallCheck\"");
throw new Error("Cannot find module \"babel-runtime/helpers/possibleConstructorReturn\"");
throw new Error("Cannot find module \"babel-runtime/helpers/inherits\"");
throw new Error("Cannot find module \"babel-runtime/helpers/extends\"");
throw new Error("Cannot find module \"babel-runtime/helpers/objectWithoutProperties\"");
throw new Error("Cannot find module \"babel-runtime/helpers/taggedTemplateLiteralLoose\"");
throw new Error("Cannot find module \"react\"");
throw new Error("Cannot find module \"react-dom\"");
throw new Error("Cannot find module \"styled-components\"");
throw new Error("Cannot find module \"immutability-helper\"");
throw new Error("Cannot find module \"react-dnd\"");
throw new Error("Cannot find module \"react-dnd-html5-backend\"");
throw new Error("Cannot find module \"rc-table\"");
throw new Error("Cannot find module \"rc-table/assets/index.less\"");







var _templateObject = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_taggedTemplateLiteralLoose___default()(['\n  tr.drop-over-downward td {\n    border-bottom: 2px dashed red;\n  }\n\n  tr.drop-over-upward td {\n    border-top: 2px dashed red;\n  }\n'], ['\n  tr.drop-over-downward td {\n    border-bottom: 2px dashed red;\n  }\n\n  tr.drop-over-upward td {\n    border-top: 2px dashed red;\n  }\n']);

/* eslint-disable no-unused-expressions,new-cap */









Object(__WEBPACK_IMPORTED_MODULE_8_styled_components__["injectGlobal"])(_templateObject);

function dragDirection(dragIndex, hoverIndex, initialClientOffset, clientOffset, sourceClientOffset) {
  var hoverMiddleY = (initialClientOffset.y - sourceClientOffset.y) / 2;
  var hoverClientY = clientOffset.y - sourceClientOffset.y;
  if (dragIndex < hoverIndex && hoverClientY > hoverMiddleY) {
    return 'downward';
  }
  if (dragIndex > hoverIndex && hoverClientY < hoverMiddleY) {
    return 'upward';
  }
}

var BodyRow = function BodyRow(props) {
  var isOver = props.isOver,
      connectDragSource = props.connectDragSource,
      connectDropTarget = props.connectDropTarget,
      moveRow = props.moveRow,
      dragRow = props.dragRow,
      clientOffset = props.clientOffset,
      sourceClientOffset = props.sourceClientOffset,
      initialClientOffset = props.initialClientOffset,
      restProps = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_objectWithoutProperties___default()(props, ['isOver', 'connectDragSource', 'connectDropTarget', 'moveRow', 'dragRow', 'clientOffset', 'sourceClientOffset', 'initialClientOffset']);

  var style = { cursor: 'move' };

  var className = restProps.className;
  if (isOver && initialClientOffset) {
    var direction = dragDirection(dragRow.index, restProps.index, initialClientOffset, clientOffset, sourceClientOffset);
    if (direction === 'downward') {
      className += ' drop-over-downward';
    }
    if (direction === 'upward') {
      className += ' drop-over-upward';
    }
  }

  return connectDragSource(connectDropTarget(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('tr', __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, restProps, {
    className: className,
    style: style
  }))));
};

var rowSource = {
  beginDrag: function beginDrag(props) {
    return {
      index: props.index
    };
  }
};

var rowTarget = {
  drop: function drop(props, monitor) {
    var dragIndex = monitor.getItem().index;
    var hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Time to actually perform the action
    props.moveRow(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};

BodyRow = Object(__WEBPACK_IMPORTED_MODULE_10_react_dnd__["DropTarget"])('row', rowTarget, function (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    sourceClientOffset: monitor.getSourceClientOffset()
  };
})(Object(__WEBPACK_IMPORTED_MODULE_10_react_dnd__["DragSource"])('row', rowSource, function (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    dragRow: monitor.getItem(),
    clientOffset: monitor.getClientOffset(),
    initialClientOffset: monitor.getInitialClientOffset()
  };
})(BodyRow));

var columns = [{ title: 'title1', dataIndex: 'a', key: 'a', width: 100 }, { id: '123', title: 'title2', dataIndex: 'b', key: 'b', width: 100 }, { title: 'title3', dataIndex: 'c', key: 'c', width: 200 }, {
  title: 'Operations',
  dataIndex: '',
  key: 'd',
  render: function render() {
    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
      'a',
      { href: '#' },
      'Operations'
    );
  }
}];

var Demo = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Demo, _React$Component);

  function Demo() {
    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Demo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      data: [{ a: '123', key: '1' }, { a: 'cdd', b: 'edd', key: '2' }, { a: '1333', c: 'eee', d: 2, key: '3' }]
    }, _this.components = {
      body: {
        row: BodyRow
      }
    }, _this.moveRow = function (dragIndex, hoverIndex) {
      var data = _this.state.data;

      var dragRow = data[dragIndex];

      _this.setState(__WEBPACK_IMPORTED_MODULE_9_immutability_helper___default()(_this.state, {
        data: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragRow]]
        }
      }));
    }, _temp), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  Demo.prototype.render = function render() {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_rc_table___default.a, {
      columns: columns,
      data: this.state.data,
      components: this.components,
      onRow: function onRow(record, index) {
        return {
          index: index,
          moveRow: _this2.moveRow
        };
      }
    });
  };

  return Demo;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

Demo = Object(__WEBPACK_IMPORTED_MODULE_10_react_dnd__["DragDropContext"])(__WEBPACK_IMPORTED_MODULE_11_react_dnd_html5_backend___default.a)(Demo);

__WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
    'h2',
    null,
    'Integrate with react-dnd'
  ),
  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(Demo, null)
), document.getElementById('__react-content'));

/***/ })

},[38]);
//# sourceMappingURL=react-dnd.js.map