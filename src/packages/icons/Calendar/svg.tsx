import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='#546E7A' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M75 17C78.3137 17 81 19.6863 81 23V24H112V23C112 19.6863 114.686 17 118 17C121.314 17 124 19.6863 124 23V24H158C163.523 24 168 28.4772 168 34V158C168 163.523 163.523 168 158 168H34C28.4771 168 24 163.523 24 158V34C24 28.4771 28.4772 24 34 24H69V23C69 19.6863 71.6863 17 75 17ZM112 36V42C112 45.3137 114.686 48 118 48C121.314 48 124 45.3137 124 42V36H156V58H36V36H69V42C69 45.3137 71.6863 48 75 48C78.3137 48 81 45.3137 81 42V36H112ZM36 70V156H156V70H36Z'
    />
  </svg>
);
