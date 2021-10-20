"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const getIconSize_1 = require("../utils/getIconSize");
exports.default = ({ width = getIconSize_1.sizeMap.small }) => (React.createElement("svg", { width: width, viewBox: '0 0 192 192', fill: 'currentColor', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M103.911 35.7607C108.332 30.8531 116.463 30.4387 119.17 36.3665C121.601 41.6872 122.304 47.6787 121.011 53.5418L116 76.2622L164 76.2622C170.627 76.2622 176 81.3746 176 87.681V101.132C176 102.304 175.765 103.465 175.308 104.553L157.029 148.037C153.992 155.262 146.637 160 138.459 160L64 160L64 80.0685L103.911 35.7607ZM109.631 46.9564L76 84.2926L76 148.581L138.459 148.581C141.731 148.581 144.672 146.686 145.887 143.796L164 100.707V87.681L116 87.681C112.385 87.681 108.963 86.1303 106.684 83.4597C104.405 80.7891 103.513 77.2834 104.256 73.9168L109.267 51.1964C109.578 49.7851 109.696 48.3614 109.631 46.9564Z' }),
    React.createElement("path", { d: 'M52 154C52 157.314 49.3137 160 46 160L22 160C18.6863 160 16 157.314 16 154L16 86C16 82.6863 18.6863 80 22 80L46 80C49.3137 80 52 82.6863 52 86L52 154Z' })));
