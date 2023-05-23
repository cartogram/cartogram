import React from 'react';

import {threeLiner} from '~/content';
import {Wordmark} from '~/components/Wordmark';
import {Content} from '~/components/Content';
import {Section} from '~/components/Section';

export default async function Home() {
  return (
    <>
      <Wordmark />
      <Section pad fill>
        <Content content={threeLiner} />
      </Section>
    </>
  );
}
