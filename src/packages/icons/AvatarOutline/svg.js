"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const getIconSize_1 = require("../utils/getIconSize");
exports.default = ({ width = getIconSize_1.sizeMap.small }) => (React.createElement("svg", { width: width, viewBox: '0 0 192 192', fill: 'currentColor', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M132 52C132 71.8823 115.882 88 96 88C76.1177 88 60 71.8823 60 52C60 32.1177 76.1177 16 96 16C115.882 16 132 32.1177 132 52ZM120 52C120 65.2548 109.255 76 96 76C82.7452 76 72 65.2548 72 52C72 38.7452 82.7452 28 96 28C109.255 28 120 38.7452 120 52Z' }),
    React.createElement("path", { d: 'M148 140C148 124.536 135.464 112 120 112H72C56.536 112 44 124.536 44 140V168H43.917C43.9716 168.325 44 168.659 44 169V170C44 173.314 41.3137 176 38 176C34.6863 176 32 173.314 32 170V169C32 168.659 32.0284 168.325 32.083 168H32V140C32 117.909 49.9086 100 72 100H120C142.091 100 160 117.909 160 140V168H159.917C159.972 168.325 160 168.659 160 169V170C160 173.314 157.314 176 154 176C150.686 176 148 173.314 148 170V169C148 168.659 148.028 168.325 148.083 168H148V140Z' })));
