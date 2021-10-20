"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const getIconSize_1 = require("../utils/getIconSize");
exports.default = ({ width = getIconSize_1.sizeMap.small }) => (React.createElement("svg", { width: width, viewBox: '0 0 192 192', fill: 'currentColor', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M96 176C140.183 176 176 140.183 176 96C176 51.8172 140.183 16 96 16C51.8172 16 16 51.8172 16 96C16 140.183 51.8172 176 96 176ZM85.9375 106.797V110.266H98.3594V107.453C98.3594 105.578 98.75 104.062 99.5312 102.906C100.344 101.75 102.25 100.062 105.25 97.8438C109.625 94.7188 112.594 91.9062 114.156 89.4062C115.719 86.9062 116.5 83.9375 116.5 80.5C116.5 75.3438 114.594 71.2188 110.781 68.125C107 65.0312 101.891 63.4844 95.4531 63.4844C87.6406 63.4844 80.25 65.4375 73.2812 69.3438L78.3906 79.6094C84.3906 76.5469 89.7344 75.0156 94.4219 75.0156C97.1094 75.0156 99.2031 75.5469 100.703 76.6094C102.203 77.6719 102.953 79.2188 102.953 81.25C102.953 83.0625 102.422 84.7031 101.359 86.1719C100.328 87.6406 98.1719 89.5469 94.8906 91.8906C91.4844 94.3906 89.1406 96.75 87.8594 98.9688C86.5781 101.188 85.9375 103.797 85.9375 106.797ZM86.5469 120.344C85.1406 121.688 84.4375 123.672 84.4375 126.297C84.4375 128.828 85.1562 130.797 86.5938 132.203C88.0312 133.578 90.0625 134.266 92.6875 134.266C95.25 134.266 97.25 133.562 98.6875 132.156C100.125 130.719 100.844 128.766 100.844 126.297C100.844 123.734 100.125 121.766 98.6875 120.391C97.2812 119.016 95.2812 118.328 92.6875 118.328C90 118.328 87.9531 119 86.5469 120.344Z' }),
    React.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M73.9375 118.077V106.797C73.9375 102.349 74.8408 97.8944 77.0164 93.7836L73.0491 95.8086L57.4476 64.4625L67.4137 58.8761C76.1326 53.9888 85.5379 51.4844 95.4531 51.4844C103.766 51.4844 111.841 53.4962 118.362 58.8227C125.128 64.3225 128.5 71.945 128.5 80.5C128.5 85.8068 127.273 91.0608 124.332 95.7662C121.526 100.256 117.055 104.15 112.311 107.547C111.521 108.133 110.876 108.634 110.359 109.054V116.098C112.183 119.399 112.844 122.998 112.844 126.297C112.844 131.221 111.328 136.487 107.173 140.642L107.126 140.688L107.079 140.734C102.829 144.892 97.487 146.266 92.6875 146.266C87.9894 146.266 82.6102 144.998 78.2991 140.875L78.2504 140.828L78.2022 140.781C73.894 136.567 72.4375 131.173 72.4375 126.297C72.4375 123.704 72.8318 120.844 73.9375 118.077ZM85.9375 110.266H98.3594V107.453C98.3594 107.301 98.3619 107.151 98.3671 107.004C98.4035 105.96 98.5689 105.035 98.8633 104.228C99.0397 103.745 99.2623 103.304 99.5312 102.906C99.9078 102.37 100.519 101.72 101.366 100.956C101.401 100.924 101.437 100.892 101.473 100.86C102.44 99.9964 103.699 98.9911 105.25 97.8438C107.562 96.1924 109.481 94.6283 111.008 93.1515C111.049 93.1117 111.09 93.0719 111.13 93.0323C111.213 92.9514 111.294 92.8709 111.375 92.7906C112.56 91.6052 113.487 90.477 114.156 89.4062C115.719 86.9062 116.5 83.9375 116.5 80.5C116.5 75.3438 114.594 71.2188 110.781 68.125C108.468 66.2327 105.659 64.9191 102.352 64.1843C100.253 63.7177 97.9531 63.4844 95.4531 63.4844C95.1086 63.4844 94.7648 63.4882 94.4219 63.4958C91.016 63.5712 87.691 64.0215 84.4471 64.8465C82.1108 65.4406 79.8166 66.2291 77.5643 67.212C76.1193 67.8426 74.6916 68.5532 73.2812 69.3438L78.3906 79.6094C78.5587 79.5236 78.7262 79.439 78.8933 79.3556C79.1035 79.2507 79.3128 79.1477 79.5214 79.0466C85.064 76.3593 90.0309 75.0156 94.4219 75.0156C94.7759 75.0156 95.1197 75.0248 95.4531 75.0433C96.8669 75.1215 98.0954 75.3654 99.1386 75.7751C99.7171 76.0022 100.239 76.2803 100.703 76.6094C102.203 77.6719 102.953 79.2188 102.953 81.25C102.953 82.649 102.637 83.9455 102.004 85.1397C101.817 85.4927 101.602 85.8368 101.359 86.1719C100.82 86.9404 99.9721 87.8287 98.8165 88.8368C98.7707 88.8768 98.7244 88.9169 98.6777 88.9572C97.6493 89.844 96.3869 90.8218 94.8906 91.8906C92.8752 93.3699 91.2317 94.7999 89.9602 96.1806C89.911 96.2341 89.8623 96.2874 89.8143 96.3407C89.3629 96.8408 88.9606 97.3345 88.6074 97.8216C88.4996 97.9702 88.3964 98.1182 88.2978 98.2656C88.14 98.5015 87.9938 98.7359 87.8594 98.9688C86.5781 101.188 85.9375 103.797 85.9375 106.797V110.266ZM109.002 110.251C109.001 110.252 109.005 110.247 109.014 110.237C109.007 110.246 109.003 110.25 109.002 110.251ZM85.196 122.266C84.6903 123.379 84.4375 124.723 84.4375 126.297C84.4375 128.828 85.1562 130.797 86.5938 132.203C88.0312 133.578 90.0625 134.266 92.6875 134.266C95.25 134.266 97.25 133.562 98.6875 132.156C100.125 130.719 100.844 128.766 100.844 126.297C100.844 124.732 100.576 123.388 100.039 122.266C99.6975 121.551 99.2469 120.926 98.6875 120.391C98.5815 120.287 98.4721 120.187 98.3594 120.091C96.9764 118.916 95.0857 118.328 92.6875 118.328C90 118.328 87.9531 119 86.5469 120.344C86.3265 120.554 86.1234 120.781 85.9375 121.023C85.6486 121.399 85.4015 121.813 85.196 122.266ZM96 164C133.555 164 164 133.555 164 96C164 58.4446 133.555 28 96 28C58.4446 28 28 58.4446 28 96C28 133.555 58.4446 164 96 164ZM176 96C176 140.183 140.183 176 96 176C51.8172 176 16 140.183 16 96C16 51.8172 51.8172 16 96 16C140.183 16 176 51.8172 176 96Z' })));
