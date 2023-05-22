import {Large} from './Text';
import {Project} from 'types';
import {A} from './A';
import styles from './Project.module.css';
import {clsx} from 'clsx';

interface ProjectProps {
  project: Project;
  hasActive?: boolean;
  children?: React.ReactNode;
}

export function Project({project, hasActive, children}: ProjectProps) {
  const className = clsx(
    styles.Project,
    hasActive && styles.hasActive,
    project.active && styles.active,
  );

  const href = project.active ? '/' : project.slug;
  return (
    <div className={className}>
      <Large>
        <A href={href}>{project.title}</A>
        {project.active && ' (current)'}
      </Large>
      {project.active && children}
    </div>
  );
}
