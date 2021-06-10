"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const getIconSize_1 = require("../utils/getIconSize");
exports.default = ({ width = getIconSize_1.sizeMap.medium }) => (React.createElement("svg", { width: width, viewBox: '0 0 192 192', fill: '#546E7A', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M97 28H98C114.016 28 127 40.9837 127 57V77H68V57C68 40.9837 80.9837 28 97 28ZM56 77H43C37.4772 77 33 81.4771 33 87V166C33 171.523 37.4772 176 43 176H151C156.523 176 161 171.523 161 166V87C161 81.4771 156.523 77 151 77H139V57C139 34.3563 120.644 16 98 16H97C74.3563 16 56 34.3563 56 57V77ZM104.981 122.551C104.796 125.28 103.242 127.633 101 128.93V138H93V128.93C90.611 127.548 89.003 124.966 89 122.008C89 122.006 89 122.003 89 122C89 117.582 92.5817 114 97 114C101.418 114 105 117.582 105 122C105 122.185 104.994 122.369 104.981 122.551Z' })));
