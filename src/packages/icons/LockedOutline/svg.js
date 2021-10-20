"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const getIconSize_1 = require("../utils/getIconSize");
exports.default = ({ width = getIconSize_1.sizeMap.small }) => (React.createElement("svg", { width: width, viewBox: '0 0 192 192', fill: 'currentColor', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M126 57.5V76.5C126 76.667 125.999 76.8337 125.996 77H67.0042C67.0014 76.8337 67 76.667 67 76.5V57.5C67 41.2076 80.2076 28 96.5 28C112.792 28 126 41.2076 126 57.5ZM138 76.5C138 76.6669 137.999 76.8336 137.997 77H150C155.523 77 160 81.4771 160 87V166C160 171.523 155.523 176 150 176H42C36.4772 176 32 171.523 32 166V87C32 81.4771 36.4772 77 42 77H55.003C55.001 76.8336 55 76.6669 55 76.5V57.5C55 34.5802 73.5802 16 96.5 16C119.42 16 138 34.5802 138 57.5V76.5ZM44 89V164H148V89H44ZM104 122C104 124.961 102.391 127.547 100 128.93V138H92V128.93C89.6088 127.547 88 124.961 88 122C88 117.582 91.5817 114 96 114C100.418 114 104 117.582 104 122Z' })));
