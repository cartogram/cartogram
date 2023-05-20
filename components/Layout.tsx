import React, {ReactNode} from 'react';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({children}: LayoutProps) {
  return <section className={styles.Layout}>{children}</section>;
}
