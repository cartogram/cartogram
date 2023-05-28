import Link from 'next/link';
import {clsx} from 'clsx';

import {ActiveProject} from 'types';
import {A} from './A';
import {Text, Small} from './Text';

import styles from './Project.module.css';

interface ProjectProps {
  project: ActiveProject;
  open?: boolean;
}

const legend = {
  project: '✰',
  writing: '❍',
  page: '𝚫',
};

export function Project({project, open, ...props}: ProjectProps) {
  const className = clsx(
    styles.Link,
    open && styles.open,
    project.active && styles.active,
    project.pending && styles.inActive,
  );

  const href =
    project.active || project.slug === undefined
      ? '/'
      : project._type !== 'page'
      ? project.slug
      : `/page/${project.slug}`;

  const icons = project.tags?.map(tag => <span key={tag}>{legend[tag]}</span>);
  const year = project._createdAt
    ? new Date(project._createdAt).getFullYear()
    : '';

  return (
    <article className={styles.Project} {...props}>
      <A href={project.pending ? undefined : href} className={className}>
        <span className={styles.icons}>{icons}</span>
        <span>
          <Text>{project.title}</Text>
        </span>
        <span className={styles.pending}>
          {project.pending && (
            <Small>
              {' '}
              <span className={styles.pill}>Coming Soon</span>
            </Small>
          )}
        </span>
        <span>
          <Small>{year}</Small>
        </span>
      </A>
    </article>
  );
}
