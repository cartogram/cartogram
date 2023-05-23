import Link from 'next/link';
import {clsx} from 'clsx';

import {ActiveProject} from 'types';

import {Text} from './Text';
import {A} from './A';

import styles from './Project.module.css';

interface ProjectProps {
  project: ActiveProject;
  hasActive?: boolean;
}

export function Project({project, hasActive}: ProjectProps) {
  const className = clsx(
    styles.Link,
    hasActive && styles.hasActive,
    project.active && styles.active,
  );

  const href =
    project.active || project.slug === undefined ? '/' : project.slug;
  return (
    <article className={styles.Project}>
      <Link href={href} className={className}>
        <Text>
          <A>{project.title}</A>
        </Text>
      </Link>
    </article>
  );
}
