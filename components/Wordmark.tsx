'use client';

import {Letter} from './Letter';
import {useWindowSize} from '~/hooks';

import styles from './Wordmark.module.css';

export function Wordmark({active = true}) {
  const size = useWindowSize();

  const letters = Array.from('CARTOGRAM').map((l, index) => (
    <Letter
      height={size.height}
      active={active}
      key={`${l}${index}`}
      letter={l}
    />
  ));

  return <div className={styles.Wordmark}>{letters}</div>;
}
