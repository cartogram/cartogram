import {ReactNode} from 'react';
import styles from './Section.module.css';
import {clsx} from 'clsx';

interface SectionProps {
  children?: ReactNode;
  vertical?: boolean;
  small?: boolean;
  pad?: boolean;
  fill?: boolean;
}

export const Section = ({children, ...classes}: SectionProps) => {
  const className = clsx(
    styles.Section,
    classes.small && styles.small,
    classes.pad && styles.pad,
    classes.fill && styles.fill,
  );

  return <section className={className}>{children}</section>;
};
