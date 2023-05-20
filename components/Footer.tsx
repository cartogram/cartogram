import React from 'react';
import styles from './Footer.module.css';
import {Small} from './Text';
import {A} from './A';
import {Section} from './Section';

export function Footer() {
  return (
    <footer className={styles.Footer}>
      <Section pad small>
        <Small>
          © {new Date().getFullYear()}
          <span className="color--primary">―</span>
          <A href="/">Cartogram Inc.</A>
          <span className="dash">―</span> All Rights Reserved.
        </Small>
      </Section>
    </footer>
  );
}
