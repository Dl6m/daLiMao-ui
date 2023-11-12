import React, { useContext } from 'react';
import "./index.less";
import classnames from 'classnames';
import { contextProviders } from "../contextProviders";
export default function Button(props) {
  var type = props.type,
    disabled = props.disabled,
    icon = props.icon,
    text = props.text,
    children = props.children,
    className = props.className,
    style = props.style,
    onClick = props.onClick;
  var _useContext = useContext(contextProviders),
    prefix = _useContext.prefix;
  var confingProviderPrefix = "".concat(prefix, "-configProvider");
  var cls = classnames(confingProviderPrefix);
  var onChange = function onChange(event) {
    var newColor = event.target.value;
    console.log(newColor, '颜色');
    var root = document.querySelector(':root');
    if (root) {
      var _root$style, _root$style2;
      root === null || root === void 0 || (_root$style = root.style) === null || _root$style === void 0 || _root$style.setProperty('--light-bg', newColor);
      root === null || root === void 0 || (_root$style2 = root.style) === null || _root$style2 === void 0 || _root$style2.setProperty('--border', newColor);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    className: "".concat(confingProviderPrefix, "-title")
  }, "\u4E00\u952E\u6362\u8272", /*#__PURE__*/React.createElement("input", {
    type: "color",
    onChange: onChange
  })), /*#__PURE__*/React.createElement("div", {
    className: "".concat(confingProviderPrefix, "-example")
  }, "\u5B9E\u4F8B\u533A\u57DF"), icon, text, children);
}