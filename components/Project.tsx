import Link from 'next/link';
import {clsx} from 'clsx';

import {ActiveProject} from 'types';

import {Text, Small} from './Text';

import styles from './Project.module.css';

interface ProjectProps {
  project: ActiveProject;
  open?: boolean;
}

export function Project({project, open, ...props}: ProjectProps) {
  const className = clsx(
    styles.Link,
    open && styles.open,
    project.active && styles.active,
  );

  const href =
    project.active || project.slug === undefined ? '/' : project.slug;
  return (
    <article className={styles.Project} {...props}>
      <Link href={href} className={className}>
        <Small>❒</Small>
        <Text>{project.title}</Text>
      </Link>
    </article>
  );
}
