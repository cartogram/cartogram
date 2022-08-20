import React from 'react';

import {threeLiner, professionalLinks, name} from '~/content';

import {Layout, A, Text, Content, Wordmark, Section, List} from '~/components';
import {useWindowSize} from '~/hooks';

export default function Home() {
  const size = useWindowSize();

  return (
    <Layout height={size.height}>
      <Wordmark height={size.height} />
      <Section vertical>
        <Text pad>
          <A href="/">{name}</A>
        </Text>
        <Content dangerouslySetInnerHTML={{__html: threeLiner}} />
      </Section>
      <Section vertical small>
        <List inline items={professionalLinks} />
      </Section>
    </Layout>
  );
}
