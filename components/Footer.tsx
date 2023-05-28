import React from 'react';
import styles from './Footer.module.css';
import {Small} from './Text';
import {A} from './A';
import {Dash} from './Dash';

import {Section} from './Section';

export function Footer() {
  return (
    <footer className={styles.Footer}>
      <Section small>
        <span className={styles.copyright}>
          <Small>© {new Date().getFullYear()}</Small>
          <Dash />
          <Small>
            <A href="/">Cartogram Inc.</A>
          </Small>
          <Dash fill />
          <Small>All Rights Reserved.</Small>
        </span>
      </Section>
    </footer>
  );
}
