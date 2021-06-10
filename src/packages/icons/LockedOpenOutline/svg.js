"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const getIconSize_1 = require("../utils/getIconSize");
exports.default = ({ width = getIconSize_1.sizeMap.medium }) => (React.createElement("svg", { width: width, viewBox: '0 0 192 192', fill: '#546E7A', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M126 57.5V64C126 66.7614 128.239 69 131 69H133C135.761 69 138 66.7614 138 64V57.5C138 34.5802 119.42 16 96.5 16C73.5802 16 55 34.5802 55 57.5V76.5C55 76.6669 55.001 76.8336 55.003 77H42C36.4772 77 32 81.4771 32 87V166C32 171.523 36.4772 176 42 176H150C155.523 176 160 171.523 160 166V87C160 81.4771 155.523 77 150 77H142H137.997H125.996H121H67.0042C67.0014 76.8337 67 76.667 67 76.5V57.5C67 41.2076 80.2076 28 96.5 28C112.792 28 126 41.2076 126 57.5ZM44 89V164H148V89H44ZM104 122C104 124.961 102.391 127.547 100 128.93V138H92V128.93C89.6088 127.547 88 124.961 88 122C88 117.582 91.5817 114 96 114C100.418 114 104 117.582 104 122Z' })));
