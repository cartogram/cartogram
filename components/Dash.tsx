import React from 'react';
import styles from './Dash.module.css';

import {clsx} from 'clsx';

export function Dash({fill}: {fill?: boolean}) {
  const className = clsx(styles.dash, fill && styles.fill);

  return <span className={className}>―</span>;
}
