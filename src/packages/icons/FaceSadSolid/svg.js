"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const getIconSize_1 = require("../utils/getIconSize");
exports.default = ({ width = getIconSize_1.sizeMap.medium }) => (React.createElement("svg", { width: width, viewBox: '0 0 192 192', fill: '#546E7A', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M96 176C140.183 176 176 140.183 176 96C176 51.8172 140.183 16 96 16C51.8172 16 16 51.8172 16 96C16 140.183 51.8172 176 96 176ZM76 90C76 98.8366 68.8366 106 60 106C51.1634 106 44 98.8366 44 90C44 81.1634 51.1634 74 60 74C68.8366 74 76 81.1634 76 90ZM148 90C148 98.8366 140.837 106 132 106C123.163 106 116 98.8366 116 90C116 81.1634 123.163 74 132 74C140.837 74 148 81.1634 148 90ZM96 124C82.7452 124 72 131.163 72 140L120 140C120 131.163 109.255 124 96 124Z' })));
