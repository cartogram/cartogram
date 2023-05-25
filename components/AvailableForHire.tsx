import {Text} from './Text';
import {A} from './A';
import styles from './AvailableForHire.module.css';

export function AvailableForHire() {
  return (
    <A href="/hire" className={styles.AvailableForHire}>
      <div className={styles.Foreground}>
        <Text>hire me</Text>
      </div>
      <div className={styles.Background} />
    </A>
  );
}
