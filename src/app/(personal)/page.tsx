import React from 'react'

import {Wordmark} from '~/components/Wordmark'
import {Info} from '~/components/Info'
import {Section} from '~/components/Section'
import {Header} from '~/components/Header'

import {threeLiner, title, name} from '~/content'

export default async function Home() {
  return (
    <>
      <Header title={name} />

      <Wordmark />

      <Section fill>
        <Info>
          <span dangerouslySetInnerHTML={{__html: threeLiner}} />
        </Info>
      </Section>
    </>
  )
}
