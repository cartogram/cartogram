import React, {ReactNode} from 'react'
import styles from './Layout.module.css'
import {professionalLinks} from '~/content'

import type {Post} from 'contentlayer/generated'
import {Footer} from '~/components/Footer'
import {List} from '~/components/List'
import {Header} from '~/components/Header'
import {A} from '~/components/A'
import {Text} from '~/components/Text'
import {Section} from '~/components/Section'
import {Projects} from '~/components/Projects'

interface LayoutProps {
  projects: Post[]
}

export function Layout({
  projects,
  children,
}: React.PropsWithChildren<LayoutProps>) {
  return (
    <section className={styles.Layout}>
      {children}

      <Section small>
        <List pad inline items={professionalLinks} />
      </Section>

      <Projects projects={projects} />
      <Footer />
    </section>
  )
}
