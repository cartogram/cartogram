import Link from 'next/link';
import {clsx} from 'clsx';

import {ActiveProject} from 'types';

import {Text} from './Text';
import {A} from './A';

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

  console.log(open, project.active);

  const href =
    project.active || project.slug === undefined ? '/' : project.slug;
  return (
    <article className={styles.Project} {...props}>
      <Link href={project.slug} className={className}>
        <Text>
          <A>{project.title}</A>
        </Text>
      </Link>
    </article>
  );
}
