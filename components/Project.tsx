import {clsx} from 'clsx'

import {Post} from 'contentlayer/generated'
import {A} from './A'
import {Bar} from './Bar'
import {Text, Small} from './Text'

import styles from './Project.module.css'

interface ProjectProps {
  project: Post
  open?: boolean
  active?: boolean
}

const legend = {
  project: '✰',
  writing: '❍',
  page: '𝚫',
}

export function Project({project, active, open, ...props}: ProjectProps) {
  const className = clsx(
    styles.Link,
    open && styles.open,
    active && styles.active,
    project.pending && styles.inActive,
  )

  const href = active || project.slug === undefined ? '/' : project.slug

  const icons = project.formats?.map(format => (
    <span key={format.title}>{legend[format.title]}</span>
  ))
  const year = project.date ? new Date(project.date).getFullYear() : ''

  return (
    <article className={styles.Project} {...props}>
      <A href={project.pending ? undefined : href} className={className}>
        <div className={styles.Background}>
          <Bar />
        </div>

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
  )
}
