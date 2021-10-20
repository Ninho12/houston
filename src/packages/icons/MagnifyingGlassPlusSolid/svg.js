"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const getIconSize_1 = require("../utils/getIconSize");
exports.default = ({ width = getIconSize_1.sizeMap.small }) => (React.createElement("svg", { width: width, viewBox: '0 0 192 192', fill: 'currentColor', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M116.768 108.283C123.8 99.4145 128 88.1977 128 76C128 47.2812 104.719 24 76 24C47.2812 24 24 47.2812 24 76C24 104.719 47.2812 128 76 128C88.1973 128 99.4138 123.8 108.282 116.768L156.595 165.081C158.939 167.425 162.738 167.425 165.081 165.081C167.424 162.738 167.424 158.939 165.081 156.596L116.768 108.283ZM76 52C72.6863 52 70 54.6863 70 58V70H58C54.6863 70 52 72.6863 52 76C52 79.3137 54.6863 82 58 82H70V94C70 97.3137 72.6863 100 76 100C79.3137 100 82 97.3137 82 94V82H94C97.3137 82 100 79.3137 100 76C100 72.6863 97.3137 70 94 70H82V58C82 54.6863 79.3137 52 76 52Z' })));
