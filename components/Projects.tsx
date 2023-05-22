import {Project as ProjectType} from 'types';
import {Project} from './Project';
import styles from './Projects.module.css';

interface ProjectsProps {
  children: React.ReactNode;
  projects?: ProjectType[];
  activeProjectSlug?: string;
}

export function Projects({children, projects}: ProjectsProps) {
  const hasActiveProject = projects?.some(project => project.active);
  return (
    <div className={styles.Projects}>
      {projects.map(project => (
        <Project
          hasActive={hasActiveProject}
          key={project._id}
          project={project}
        >
          {children}
        </Project>
      ))}
    </div>
  );
}
