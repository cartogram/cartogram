import React from 'react'

import {Wordmark} from '~/components/Wordmark'
import {Content} from '~/components/Content'
import {Section} from '~/components/Section'
import {Header} from '~/components/Header'

export default async function Home() {
  const title = 'Cartogram'
  const overview = 'Cartogram is a small design studio in Berlin, Germany.'

  return (
    <>
      <Header title={title} />

      <Wordmark />

      <Section fill small>
        <Content>
          <p>{overview}</p>
        </Content>
      </Section>
    </>
  )
}
