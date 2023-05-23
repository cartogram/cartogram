import styles from './Content.module.css';

interface ContentProps {
  children?: React.ReactNode;
  content?: React.ReactNode;
}

export const Content = ({children, content}: ContentProps) => {
  if (children) {
    return <article className={styles.Content}>{children}</article>;
  }

  return (
    <article
      className={styles.Content}
      dangerouslySetInnerHTML={{__html: content || ''}}
    />
  );
};
