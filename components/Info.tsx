'use client'

import {Content} from './Content'
import styles from './Info.module.css'

interface InfoProps {}

export function Info({children}: React.PropsWithChildren<InfoProps>) {
  return (
    <article className={styles.Info}>
      <Content>{children}</Content>
    </article>
  )
}
