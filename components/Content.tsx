import styles from './Content.module.css';

interface ContentProps {
  children?: React.ReactNode;
}

export const Content = (props: ContentProps) => {
  return (
    <article
      className={styles.Content}
      dangerouslySetInnerHTML={{__html: props.children || ''}}
    />
  );
};
