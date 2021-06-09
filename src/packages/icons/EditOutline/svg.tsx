import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.medium }) => (
  <svg width={width} viewBox='0 0 192 192' fill='#546E7A' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M38.361 127.122C38.4941 126.956 38.6374 126.796 38.7907 126.642L129.221 35.7677C131.559 33.4189 135.358 33.4096 137.706 35.747C138.088 36.1271 138.409 36.5459 138.667 36.9908L155.307 53.6312C155.698 54.022 156.023 54.4533 156.284 54.9116C158.149 57.2593 158.004 60.684 155.839 62.8647L65.291 154.1C64.1674 155.233 62.7044 155.823 61.2268 155.871C61.1094 155.894 60.9892 155.913 60.8661 155.926L38.0878 158.338C35.7468 158.586 33.7732 156.612 34.0211 154.271L36.4333 131.493C36.4676 131.169 36.5395 130.865 36.6433 130.582C36.8109 129.321 37.3792 128.103 38.3481 127.135C38.3524 127.13 38.3567 127.126 38.361 127.122ZM61.0437 141.345L143.235 58.5297L133.343 48.6378L51.0416 131.343L61.0437 141.345Z'
    />
  </svg>
);
