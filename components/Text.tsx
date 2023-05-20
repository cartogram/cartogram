import clsx from 'clsx';
import styles from './Text.module.css';

interface TextProps {
  pad?: boolean;
  children?: React.ReactNode;
}

export const Text = ({children, ...classes}: TextProps) => {
  const className = clsx(styles.Text, classes.pad && styles.pad);

  return <p className={className}>{children}</p>;
};

export const Small = (props: TextProps) => {
  const className = clsx(styles.Text, styles.small);

  return <small className={className}>{props.children}</small>;
};

export const Large = (props: TextProps) => {
  const className = clsx(styles.Text, styles.large);

  return <span className={className}>{props.children}</span>;
};
