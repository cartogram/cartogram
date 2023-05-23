'use client';

import {ActiveProject} from 'types';
import {Project} from './Project';
import styles from './Projects.module.css';
import {useParams} from 'next/navigation';

interface ProjectsProps {
  children: React.ReactNode;
  projects?: ActiveProject[];
  activeProjectSlug?: string;
}

export function Projects({children, ...props}: ProjectsProps) {
  const params = useParams();

  const projects = props.projects?.reduce((acc, project) => {
    return [
      ...acc,
      {
        ...project,
        active: project.slug === params?.slug,
      },
    ];
  }, []);

  const hasActiveProject = projects?.some(project => project.active);

  return (
    <div className={styles.Projects}>
      {projects?.map(project => (
        <Project
          hasActive={hasActiveProject}
          key={project._id}
          project={project}
        />
      ))}
    </div>
  );
}
