'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var reactFormStepper = require('react-form-stepper');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var _excluded = ["variant", "size", "buttonName", "iconLeft", "iconRight"];
/**
 * Primary UI component for user interaction
 */

var Button = function Button(_ref) {
  var variant = _ref.variant,
      size = _ref.size,
      buttonName = _ref.buttonName;
      _ref.iconLeft;
      _ref.iconRight;
      var props = _objectWithoutProperties(_ref, _excluded);

  var mode = variant ? "storybook-button--".concat(variant) : 'storybook-button--info';
  return /*#__PURE__*/React__default['default'].createElement("button", _extends({
    type: "button",
    className: ['storybook-button', "storybook-button--".concat(size), mode].join(' ')
  }, props), buttonName);
};
Button.propTypes = {
  size: PropTypes__default['default'].oneOf(['sm', 'md', 'lg', 'xswide', 'swide']),
  variant: PropTypes__default['default'].oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'exdark']),
  buttonName: PropTypes__default['default'].string.isRequired,
  onClick: PropTypes__default['default'].func,
  iconLeft: PropTypes__default['default'].bool,
  iconRight: PropTypes__default['default'].bool
};
Button.defaultProps = {
  buttonName: 'Button Name',
  onClick: function onClick() {
    alert('button clicked');
  },
  size: 'md',
  variant: 'light',
  iconLeft: false,
  iconRight: false
};

var Card = function Card(_ref) {
  var cardTitle = _ref.cardTitle,
      children = _ref.children,
      cardFooter = _ref.cardFooter,
      size = _ref.size,
      variant = _ref.variant;
  var sizeOfCard = size && size !== 'xlg' && "card-main--".concat(size);
  var variantOfCard;

  if (variant && variant !== 'default') {
    variantOfCard = "card-main--".concat(variant);
  }

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "card-main ".concat(sizeOfCard, " ").concat(variantOfCard)
  }, cardTitle && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "card-title"
  }, /*#__PURE__*/React__default['default'].createElement("h2", null, cardTitle)), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "card-content"
  }, children), cardFooter && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "card-footer"
  }, cardFooter));
};

Card.defaultProps = {
  size: 'md',
  variant: 'default'
};
Card.propTypes = {
  size: PropTypes.PropTypes.oneOf(['xsm', 'sm', 'md', 'lg', 'xlg']),
  variant: PropTypes.PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'])
};

var DownloadLink = function DownloadLink(_ref) {
  var hrefVal = _ref.hrefVal,
      linkName = _ref.linkName,
      target = _ref.target,
      _onClick = _ref.onClick;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    class: "container"
  }, /*#__PURE__*/React__default['default'].createElement("a", {
    className: "button-link",
    href: hrefVal ? hrefVal : '#',
    onClick: function onClick(e) {
      return _onClick(e);
    },
    target: target
  }, /*#__PURE__*/React__default['default'].createElement("b", null, linkName)));
};

DownloadLink.propTypes = {
  linkName: PropTypes.PropTypes.string.isRequired,
  href: PropTypes.PropTypes.string,
  target: PropTypes.PropTypes.string,
  onClick: PropTypes.PropTypes.func
};
DownloadLink.defaultProps = {
  href: "https://www.google.co.in",
  linkName: "Download your voucher here" //onClick: alert("clicked link")

};

var InputField = function InputField(_ref) {
  var type = _ref.type,
      onClick = _ref.onClick,
      onBlur = _ref.onBlur,
      value = _ref.value,
      defaultValue = _ref.defaultValue,
      length = _ref.length,
      placeholder = _ref.placeholder,
      disabled = _ref.disabled,
      variant = _ref.variant;
  var mode = variant && "input-field-comp--".concat(variant);
  return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("input", {
    className: mode ? ['input-field-comp', mode].join(' ') : 'input-field-comp',
    type: type,
    onClick: onClick,
    onBlur: onBlur,
    value: value,
    defaultValue: defaultValue,
    length: length,
    placeholder: placeholder,
    disabled: disabled
  }));
};

InputField.propTypes = {
  type: PropTypes__default['default'].oneOf(['text', 'email', 'number', 'password']),
  variant: PropTypes__default['default'].oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'dark']),
  placeholder: PropTypes__default['default'].string,
  onClick: PropTypes__default['default'].func,
  onBlur: PropTypes__default['default'].func,
  length: PropTypes__default['default'].number,
  disabled: PropTypes__default['default'].bool
};
InputField.defaultProps = {
  type: 'text',
  placeholder: 'Enter the input Value'
};

var Snackbar = function Snackbar(_ref) {
  var children = _ref.children,
      variant = _ref.variant;
  var cssClass = variant ? "snackbar-main--".concat(variant) : "snackbar-main--light";
  return /*#__PURE__*/React.createElement('p', {
    className: "snackbar-main ".concat(cssClass)
  }, children);
};

Snackbar.propTypes = {
  variant: PropTypes__default['default'].oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'])
};

var DateOfBirth = function DateOfBirth() {
  var dayRef = /*#__PURE__*/React.createRef();
  var monthRef = /*#__PURE__*/React.createRef();
  var yearRef = /*#__PURE__*/React.createRef();

  var _useState = React.useState({
    day: "",
    month: "",
    year: ""
  }),
      _useState2 = _slicedToArray(_useState, 2),
      dob = _useState2[0],
      setDob = _useState2[1];

  var changeDay = function changeDay(e) {
    if (e.target.value.length === 2) {
      monthRef.current.focus();
    }

    setDob(_objectSpread2(_objectSpread2({}, dob), {}, _defineProperty({}, e.target.id, e.target.value)));
  };

  var changeMonth = function changeMonth(e) {
    if (e.target.value.length === 2) {
      yearRef.current.focus();
    }

    setDob(_objectSpread2(_objectSpread2({}, dob), {}, _defineProperty({}, e.target.id, e.target.value)));
  };

  var changeYear = function changeYear(e) {};

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "date-of-birth"
  }, /*#__PURE__*/React__default['default'].createElement("input", {
    ref: dayRef,
    className: "dob-day",
    value: dob.day,
    id: "day",
    onChange: function onChange(e) {
      return changeDay(e);
    }
  }), /*#__PURE__*/React__default['default'].createElement("input", {
    ref: monthRef,
    className: "dob-month",
    value: dob.month,
    id: "month",
    onChange: function onChange(e) {
      return changeMonth(e);
    }
  }), /*#__PURE__*/React__default['default'].createElement("input", {
    ref: yearRef,
    className: "dob-year",
    value: dob.year,
    id: "year",
    onChange: function onChange(e) {
      return changeYear();
    }
  }));
};

var steps = [{
  label: "Step 1"
}, {
  label: "Step 2"
}, {
  label: "Step 3"
}];

var StepperComponent = function StepperComponent() {
  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      activeStep = _useState2[0],
      setActiveStep = _useState2[1];

  var handleSteps = function handleSteps() {
    if (activeStep < steps.length) {
      setActiveStep(activeStep + 1);
    }
  };

  return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(reactFormStepper.Stepper, {
    activeStep: activeStep,
    onClick: function onClick() {
      return handleSteps();
    }
  }, steps.map(function (list) {
    return /*#__PURE__*/React__default['default'].createElement(reactFormStepper.Step, {
      label: list.label
    });
  })));
};

var Container = function Container(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "content-container"
  }, children);
};

var BackNextButton = function BackNextButton(_ref) {
  var onClickBack = _ref.onClickBack,
      onClickNext = _ref.onClickNext;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "back-next-button-container"
  }, /*#__PURE__*/React__default['default'].createElement(Button, {
    buttonName: "back",
    onClick: function onClick(e) {
      return onClickBack(e);
    }
  }), /*#__PURE__*/React__default['default'].createElement(Button, {
    variant: "exdark",
    buttonName: "Next",
    onClick: function onClick(e) {
      return onClickNext(e);
    }
  }));
};

var Accordion = function Accordion(_ref) {
  var title = _ref.title,
      content = _ref.content;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isActive = _useState2[0],
      setIsActive = _useState2[1];

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "accordion"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "accordion-item"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "accordion-title",
    onClick: function onClick() {
      return setIsActive(!isActive);
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "accordion-title-heading"
  }, title)), /*#__PURE__*/React__default['default'].createElement("div", null, isActive ? '-' : '+')), isActive && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "accordion-content"
  }, content)));
};

var AccordionComponent = function AccordionComponent(_ref2) {
  var data = _ref2.data;
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, data === null || data === void 0 ? void 0 : data.map(function (_ref3) {
    var title = _ref3.title,
        content = _ref3.content;
    return /*#__PURE__*/React__default['default'].createElement(Accordion, {
      content: content,
      title: title
    });
  }));
};

exports.AccordionComponent = AccordionComponent;
exports.BackNextButton = BackNextButton;
exports.Button = Button;
exports.Card = Card;
exports.Container = Container;
exports.DateOfBirth = DateOfBirth;
exports.DownloadLink = DownloadLink;
exports.InputField = InputField;
exports.Snackbar = Snackbar;
exports.StepperComponent = StepperComponent;
