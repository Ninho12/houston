"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const getIconSize_1 = require("../utils/getIconSize");
exports.default = ({ width = getIconSize_1.sizeMap.medium }) => (React.createElement("svg", { width: width, viewBox: '0 0 192 192', fill: '#546E7A', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement("path", { d: 'M16 54C16 48.4772 20.4772 44 26 44H118C123.523 44 128 48.4772 128 54V138C128 143.523 123.523 148 118 148H26C20.4772 148 16 143.523 16 138V54Z' }),
    React.createElement("path", { d: 'M159.146 133.138L140 115.118V76.8823L159.146 58.8622C165.528 52.8559 176 57.3805 176 66.1442V125.856C176 134.619 165.528 139.144 159.146 133.138Z' })));
