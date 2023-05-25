'use client';

import {useState, useEffect} from 'react';
import {ActiveProject} from 'types';
import {Project} from './Project';
import {Small} from './Text';
import styles from './Projects.module.css';
import {useParams} from 'next/navigation';

interface ProjectsProps {
  projects?: ActiveProject[];
  activeProjectSlug?: string;
}

export function Projects(props: ProjectsProps) {
  const params = useParams();

  useEffect(() => {
    document.body.style.setProperty(
      '--color-primary',
      ['red', 'blue', 'deeppink'][Math.floor(Math.random() * 3)],
    );
  }, []);

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
    <section className={styles.Wrap}>
      <div
        className={styles.Projects}
        onMouseOut={() => setOpen(!hasActiveProject)}
        onMouseOver={() => setOpen(true)}
      >
        <div className={styles.Label}>
          <Small>Selected</Small>
          <span className="dash">―</span>
          <Small>Projects ❒</Small>
          <Small>Writing ❍</Small>
        </div>
        {projects?.map((project, index) => (
          <Project open={forceOpen || open} key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
