'use client';

import {useState} from 'react';
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
  const forceOpen = Boolean(!params?.slug);
  const [open, setOpen] = useState(forceOpen);

  return (
    <div
      className={styles.Projects}
      onMouseOut={() => setOpen(!hasActiveProject)}
      onMouseOver={() => setOpen(true)}
    >
      {projects?.map((project, index) => (
        <Project open={forceOpen || open} key={index} project={project} />
      ))}
    </div>
  );
}
