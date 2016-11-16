"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");
var ReactDom = require("react-dom");
var Radio = require("karl-component-radio");
var Select = require("karl-component-select");
var Nav = require("karl-component-nav");
var Carousel = require("karl-component-carousel");
var Chart = require("karl-component-chart");

var radioOptions = ["option 1", "option 2", "option 3", "option 4", "option 5", "option 6", "option 7", "option 8", "option 9", "option 10", "option 11"];
var selectOptions = [{ id: "o1", name: "option 1", checked: true }, { id: "o2", name: "option 2", checked: true }, { id: "o3", name: "option 3", checked: false }, { id: "o4", name: "option 4", checked: true }, { id: "o5", name: "option 5", checked: true }, { id: "o6", name: "option 6", checked: false }, { id: "o7", name: "option 7", checked: true }, { id: "o8", name: "option 8", checked: true }];
var navOptions = ["option 1", "option 2", "option 3"];

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            currentRadioValue: "",
            currentSelectValue: selectOptions.filter(function (d) {
                return d.checked;
            }).map(function (d) {
                return d.name;
            }).join("，")
        };
        var bindArr = [];
        bindArr.forEach(function (d) {
            _this[d] = _this[d].bind(_this);
        });
        return _this;
    }

    _createClass(App, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h3",
                    null,
                    React.createElement("a", { className: "anchor", href: "#chart" }),
                    "Chart"
                ),
                React.createElement(Chart, { title: "chart", yAxisText: "kg", x: "date",
                    y: [{ id: "apple", name: "apple" }, { id: "banana", name: "banana" }, { id: "pear", name: "pear" }],
                    data: [{ date: "2016-9-11", apple: 1, banana: 2, pear: 3 }, { date: "2016-9-13", apple: 0.03, banana: 3, pear: 2 }, { date: "2016-9-12", apple: 5, banana: 47 }, { date: "2016-9-14", apple: 0.05, banana: 7, pear: 4 }, { date: "2016-9-15", apple: 0.08, banana: 6 }] }),
                React.createElement(
                    "h3",
                    null,
                    React.createElement("a", { className: "anchor", href: "#radio" }),
                    "Radio"
                ),
                React.createElement(Radio, { data: radioOptions, defaultBlank: true, callback: function callback(d) {
                        _this2.setState({
                            currentRadioValue: d
                        });
                    } }),
                React.createElement(
                    "div",
                    { className: "current-value" },
                    "Current Value ：",
                    this.state.hasOwnProperty("currentRadioValue") ? this.state.currentRadioValue : ""
                ),
                React.createElement(
                    "h3",
                    null,
                    React.createElement("a", { className: "anchor", href: "#select" }),
                    "Select"
                ),
                React.createElement(Select, { data: selectOptions, optionNumPerColumn: 5, callback: function callback(d) {
                        d = d.filter(function (d1) {
                            return d1.checked;
                        }).map(function (d1) {
                            return d1.name;
                        }).join("，");
                        _this2.setState({
                            currentSelectValue: d
                        });
                    } }),
                React.createElement(
                    "div",
                    { className: "current-value" },
                    "Current Value ：",
                    this.state.hasOwnProperty("currentSelectValue") ? this.state.currentSelectValue : selectOptions.filter(function (d) {
                        return d.checked;
                    }).map(function (d) {
                        return d.name;
                    }).join("，")
                ),
                React.createElement(
                    "h3",
                    null,
                    React.createElement("a", { className: "anchor", href: "#nav" }),
                    "Nav"
                ),
                React.createElement(
                    Nav,
                    { data: navOptions, height: 200 },
                    React.createElement(
                        "div",
                        { className: "navPanel" },
                        "nav panel 1，some element..."
                    ),
                    React.createElement(
                        "div",
                        { className: "navPanel" },
                        "nav panel 2，some element..."
                    ),
                    React.createElement(
                        "div",
                        { className: "navPanel" },
                        "nav panel 3，some element..."
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    React.createElement("a", { className: "anchor", href: "#carousel" }),
                    "Carousel"
                ),
                React.createElement(
                    Carousel,
                    null,
                    React.createElement(
                        "div",
                        null,
                        React.createElement("img", { src: "image/1.jpg" })
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement("img", { src: "image/2.jpg" })
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement("img", { src: "image/3.jpg" })
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement("img", { src: "image/4.jpg" })
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

ReactDom.render(React.createElement(App, null), document.getElementById("app"));

//# sourceMappingURL=main.js.map