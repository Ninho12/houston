import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='#546E7A' xmlns='http://www.w3.org/2000/svg'>
    <path d='M70 58C70 54.6863 72.6863 52 76 52C79.3137 52 82 54.6863 82 58V70H94C97.3137 70 100 72.6863 100 76C100 79.3137 97.3137 82 94 82H82V94C82 97.3137 79.3137 100 76 100C72.6863 100 70 97.3137 70 94V82H58C54.6863 82 52 79.3137 52 76C52 72.6863 54.6863 70 58 70H70V58Z' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M128 76C128 88.1977 123.8 99.4145 116.768 108.283L165.081 156.596C167.424 158.939 167.424 162.738 165.081 165.081C162.738 167.425 158.939 167.425 156.595 165.081L108.282 116.768C99.4138 123.8 88.1973 128 76 128C47.2812 128 24 104.719 24 76C24 47.2812 47.2812 24 76 24C104.719 24 128 47.2812 128 76ZM76 116C98.0914 116 116 98.0914 116 76C116 53.9086 98.0914 36 76 36C53.9086 36 36 53.9086 36 76C36 98.0914 53.9086 116 76 116Z'
    />
  </svg>
);
