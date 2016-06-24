'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles.css');

var _styles2 = _interopRequireDefault(_styles);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Column = function Column(props) {
  var _classNames;

  var children = props.children;
  var unit = props.unit;
  var unitSm = props.unitSm;
  var unitMd = props.unitMd;
  var unitLg = props.unitLg;
  var unitXl = props.unitXl;
  var className = props.className;

  var restProps = _objectWithoutProperties(props, ['children', 'unit', 'unitSm', 'unitMd', 'unitLg', 'unitXl', 'className']);

  var columnClassNames = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, _styles2.default.column, true), _defineProperty(_classNames, _styles2.default['column-' + unit], unit), _defineProperty(_classNames, _styles2.default['columnSm-' + unitSm], unitSm), _defineProperty(_classNames, _styles2.default['columnMd-' + unitMd], unitMd), _defineProperty(_classNames, _styles2.default['columnLg-' + unitLg], unitLg), _defineProperty(_classNames, _styles2.default['columnXL-' + unitXl], unitXl), _defineProperty(_classNames, className, className), _classNames));

  return _react2.default.createElement(
    'div',
    _extends({ className: columnClassNames }, restProps),
    children
  );
};

Column.propTypes = {
  children: _react.PropTypes.node.isRequired,
  className: _react.PropTypes.string,
  unit: _react.PropTypes.string.isRequired,
  unitSm: _react.PropTypes.string,
  unitMd: _react.PropTypes.string,
  unitLg: _react.PropTypes.string,
  unitXl: _react.PropTypes.string
};

exports.default = Column;