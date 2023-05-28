import clsx from 'clsx';
import styles from './Text.module.css';

interface TextProps {
  clamp?: boolean;
  pad?: boolean;
  children?: React.ReactNode;
}

export const Text = ({children, ...classes}: TextProps) => {
  const className = clsx(
    styles.Text,
    classes.clamp && styles.clamp,
    classes.pad && styles.pad,
  );

  return <span className={className}>{children}</span>;
};

export const Small = (props: TextProps) => {
  const className = clsx(styles.Text, styles.small);

  return <small className={className}>{props.children}</small>;
};

export const Large = (props: TextProps) => {
  const className = clsx(styles.Text, styles.large, props.pad && styles.pad);

  return <span className={className}>{props.children}</span>;
};
