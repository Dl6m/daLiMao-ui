function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React, { useContext } from 'react';
import "./index.less";
import classnames from 'classnames';
import { contextProviders } from "../contextProviders";
export default function Button(props) {
  var _classnames;
  var type = props.type,
    disabled = props.disabled,
    icon = props.icon,
    text = props.text,
    children = props.children,
    className = props.className,
    style = props.style,
    _onClick = props.onClick;
  var _useContext = useContext(contextProviders),
    prefix = _useContext.prefix;
  var btnPrefix = prefix + '-btn';
  var cls = classnames(btnPrefix, (_classnames = {}, _defineProperty(_classnames, "".concat(btnPrefix, "-highlight"), type === 'highlight'), _defineProperty(_classnames, "".concat(btnPrefix, "-disabled"), disabled), _classnames), className);
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    onClick: function onClick(e) {
      if (disabled) return;
      _onClick && _onClick(e);
    },
    style: style
  }, icon, text, children);
}