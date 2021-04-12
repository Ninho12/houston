"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var List_1 = tslib_1.__importDefault(require("@material-ui/core/List"));
var functions_1 = require("../Helpers/functions");
var WrapperTheme_1 = tslib_1.__importDefault(require("../ThemeProvider/WrapperTheme"));
var Items_1 = tslib_1.__importDefault(require("./internals/Items"));
var Item_1 = tslib_1.__importDefault(require("./Item"));
var Left_1 = tslib_1.__importDefault(require("./Left"));
var Right_1 = tslib_1.__importDefault(require("./Right"));
var Subtitle_1 = tslib_1.__importDefault(require("./Subtitle"));
var Title_1 = tslib_1.__importDefault(require("./Title"));
var List = React.memo(function (_a) {
    var children = _a.children, _b = _a.stripedRows, stripedRows = _b === void 0 ? false : _b, props = tslib_1.__rest(_a, ["children", "stripedRows"]);
    var items = React.useMemo(function () {
        return React.Children.map(children, function (child) {
            var _a, _b, _c, _d;
            if (!functions_1.isReactComponent(child, Item_1.default))
                return null;
            var left = functions_1.getReactFirstChildrenProps((_a = child === null || child === void 0 ? void 0 : child.props) === null || _a === void 0 ? void 0 : _a.children, Left_1.default);
            var title = functions_1.getReactFirstChildrenProps((_b = child.props) === null || _b === void 0 ? void 0 : _b.children, Title_1.default);
            var subtitle = functions_1.getReactFirstChildrenProps((_c = child.props) === null || _c === void 0 ? void 0 : _c.children, Subtitle_1.default);
            var right = functions_1.getReactFirstChildrenProps((_d = child === null || child === void 0 ? void 0 : child.props) === null || _d === void 0 ? void 0 : _d.children, Right_1.default);
            return { left: left, title: title, subtitle: subtitle, right: right };
        }).filter(function (item) { return !!item; });
    }, [children]);
    return (React.createElement(WrapperTheme_1.default, null,
        React.createElement(List_1.default, tslib_1.__assign({ component: 'ul' }, props),
            React.createElement(Items_1.default, { items: items, stripedRows: stripedRows }))));
});
List.Item = Item_1.default;
List.Title = Title_1.default;
List.Subtitle = Subtitle_1.default;
List.Left = Left_1.default;
List.Right = Right_1.default;
exports.default = List;
