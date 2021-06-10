import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='#546E7A' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M117 167.873C146.169 157.253 167 129.278 167 96.4363C167 63.5951 146.169 35.6191 117 25V37.9381C139.39 47.9043 155 70.3473 155 96.4363C155 122.525 139.39 144.968 117 154.935V167.873ZM117 131.436C117.64 131.187 118.274 130.915 118.9 130.62C122.851 128.76 126.44 126.035 129.463 122.599C132.487 119.163 134.885 115.085 136.522 110.596C138.158 106.107 139 101.295 139 96.4363C139 91.5774 138.158 86.7661 136.522 82.277C134.885 77.788 132.487 73.7091 129.463 70.2733C126.44 66.8376 122.851 64.1122 118.9 62.2527C118.274 61.9578 117.64 61.6856 117 61.4363V131.436ZM33.5 122.436H57.3772L94.1094 158.276C96.6024 160.708 101 159.062 101 155.696V36.1769C101 32.8109 96.6024 31.1641 94.1094 33.5965L57.3772 69.4363H33.5C28.8056 69.4363 25 72.8261 25 77.0077V114.865C25 119.046 28.8056 122.436 33.5 122.436Z'
    />
  </svg>
);
