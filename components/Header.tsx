import {Text} from './Text';

import styles from './Header.module.css';

interface HeaderProps {
  children: React.ReactNode;
}

export function Header({children}: HeaderProps) {
  return (
    <div className={styles.Header}>
      <Text>{children}</Text>
    </div>
  );
}
