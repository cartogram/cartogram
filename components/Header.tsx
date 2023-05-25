import {Text} from './Text';

import styles from './Header.module.css';
import {Section} from './Section';
import {A} from './A';

import {clsx} from 'clsx';

import {name} from '~/content';

interface HeaderProps {
  title?: React.ReactNode;
  busy?: boolean;
}

export function Header({title, busy}: HeaderProps) {
  const className = clsx(styles.Header, busy && styles.busy);

  return (
    <div className={className}>
      <Section>
        <Text>
          <A href="/">{title || name}</A>
        </Text>
      </Section>
    </div>
  );
}
