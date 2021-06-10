"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const getIconSize_1 = require("../utils/getIconSize");
exports.default = ({ width = getIconSize_1.sizeMap.medium }) => (React.createElement("svg", { width: width, viewBox: '0 0 192 192', fill: '#546E7A', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M147 64C158.046 64 167 55.0457 167 44C167 32.9543 158.046 24 147 24C135.954 24 127 32.9543 127 44C127 44.1638 127.002 44.3271 127.006 44.4899L57.9537 81.6719C54.3503 78.162 49.4276 76 44 76C32.9543 76 24 84.9543 24 96C24 107.046 32.9543 116 44 116C49.4277 116 54.3503 113.838 57.9538 110.328L127.006 147.51C127.277 158.32 136.125 167 147 167C158.046 167 167 158.046 167 147C167 135.954 158.046 127 147 127C140.128 127 134.066 130.465 130.466 135.744L63.6463 99.7642C63.8785 98.5451 64 97.2867 64 96C64 94.7132 63.8785 93.4548 63.6463 92.2357L130.982 55.978C134.63 60.8483 140.447 64 147 64Z' })));
