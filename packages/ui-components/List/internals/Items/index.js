"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var ListItem_1 = tslib_1.__importDefault(require("@material-ui/core/ListItem"));
var styles_1 = require("@material-ui/core/styles");
var clsx_1 = tslib_1.__importDefault(require("clsx"));
var Left_1 = tslib_1.__importDefault(require("../Left"));
var Right_1 = tslib_1.__importDefault(require("../Right"));
var Subtitle_1 = tslib_1.__importDefault(require("../Subtitle"));
var Title_1 = tslib_1.__importDefault(require("../Title"));
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        padding: '12px 16px',
        borderRadius: 4,
        alignItems: 'flex-start'
    },
    striped: {
        backgroundColor: theme.palette.grey[200]
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center'
    }
}); });
var Items = function (_a) {
    var items = _a.items, stripedRows = _a.stripedRows;
    var classes = useStyles();
    var shouldDisplayStriped = React.useCallback(function (position) {
        return position % 2 !== 0 && stripedRows;
    }, [stripedRows]);
    return (React.createElement(React.Fragment, null, items.map(function (_a, index) {
        var left = _a.left, title = _a.title, subtitle = _a.subtitle, right = _a.right;
        return (React.createElement(ListItem_1.default, { key: "list-item-" + index, className: clsx_1.default([classes.root, shouldDisplayStriped(index) && classes.striped]) },
            left && React.createElement(Left_1.default, { icon: left.icon, image: left.image, striped: shouldDisplayStriped(index) }),
            React.createElement("div", { className: classes.textContainer },
                title && React.createElement(Title_1.default, null, title.children),
                subtitle && React.createElement(Subtitle_1.default, null, subtitle.children)),
            right && React.createElement(Right_1.default, { icon: right.icon, text: right.text, onClick: right.onClick })));
    })));
};
exports.default = React.memo(Items);
