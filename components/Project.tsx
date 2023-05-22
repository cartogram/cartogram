import {Large} from './Text';
import {Project} from 'types';
import {A} from './A';
import styles from './Project.module.css';

interface ProjectProps {
  project: Project;
}

export function Project({project}: ProjectProps) {
  return (
    <div className={styles.Project}>
      <Large>
        <A href={project.slug}>{project.title}</A>
      </Large>
    </div>
  );
}
