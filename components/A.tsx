import Link, {LinkProps} from 'next/link';
import styles from './A.module.css';

type Props = Omit<LinkProps, 'href'> & {
  external?: boolean;
  href?: string;
  as?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onMouseOver?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => void;
  onMouseOut?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

export function A({external, as, href, children, ...rest}: Props) {
  if (!href) {
    return (
      <span className={styles.A} {...rest}>
        {children}
      </span>
    );
  }

  if (external) {
    return (
      <a href={href} className={styles.A} target="_blank" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link as={as} className={styles.A} href={href} {...rest}>
      {children}
    </Link>
  );
}
