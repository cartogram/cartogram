'use client'

import {useState} from 'react'
import {Post} from 'contentlayer/generated'
import {Project} from './Project'
import {Dash} from './Dash'
import {Small} from './Text'
import styles from './Projects.module.css'
import {useParams} from 'next/navigation'

interface ProjectsProps {
  projects?: Post[]
}

export function Projects(props: ProjectsProps) {
  const params = useParams()
  const {slug} = params
  const hasActiveProject = props.projects?.some(
    project => project.slug === slug,
  )
  const forceOpen = Boolean(!params?.slug)
  const [open, setOpen] = useState(forceOpen)

  return (
    <section className={styles.Wrap}>
      <div
        className={styles.Projects}
        onMouseOut={() => setOpen(!hasActiveProject)}
        onMouseOver={() => setOpen(true)}
      >
        {props.projects?.map((project, index) => (
          <Project
            active={project.slug === slug}
            open={forceOpen || open}
            key={index}
            project={project}
          />
        ))}
        <div className={styles.Label}>
          <Small>
            <Dash />
          </Small>
          <Small>Page 𝚫</Small>
          <Small>Project ✰</Small>
          <Small>Writing ❍</Small>
        </div>
      </div>
    </section>
  )
}
