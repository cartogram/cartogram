import React from 'react';

import {Wordmark} from '~/components/Wordmark';
import {Content} from '~/components/Content';
import {Section} from '~/components/Section';
import {PortableText} from '~/components/PortableText';
import {Header} from '~/components/Header';
import {AvailableForHire} from '~/components/AvailableForHire';
import {getHomePage} from '~/lib/sanity.client';

export default async function Home() {
  const data = await getHomePage({token: null});

  const {title, overview} = data || {};

  return (
    <>
      <Header title={title} />

      <Wordmark />

      <Section fill small>
        <Content>
          <PortableText value={overview} />
        </Content>
        <AvailableForHire />
      </Section>
    </>
  );
}
