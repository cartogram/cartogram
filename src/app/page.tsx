import React from 'react';

import {threeLiner} from '~/content';
import {Wordmark} from '~/components/Wordmark';
import {Content} from '~/components/Content';
import {Section} from '~/components/Section';
import {Header} from '~/components/Header';
import {AvailableForHire} from '~/components/AvailableForHire';

export default async function Home() {
  return (
    <>
      <Header />

      <Wordmark />

      <Section fill>
        <Content content={threeLiner} />
        <AvailableForHire />
      </Section>
    </>
  );
}
