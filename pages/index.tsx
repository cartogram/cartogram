import React from 'react';

import {threeLiner, professionalLinks, name, copyright} from '~/content';

import {
  Layout,
  Head,
  A,
  Small,
  Text,
  Content,
  Footer,
  Wordmark,
  Section,
  List,
} from '~/components';
import {useWindowSize} from '~/hooks';

export default function Home() {
  const size = useWindowSize();

  return (
    <>
      <Head />
      <Layout height={size.height}>
        <Wordmark height={size.height} />
        <Section>
          <Text>
            <A>{name}</A>
          </Text>
          <Content dangerouslySetInnerHTML={{__html: threeLiner}} />
        </Section>
      </Layout>
      <Footer>
        <Section>
          <List items={professionalLinks} />
        </Section>
        <Section>
          <Small dangerouslySetInnerHTML={{__html: copyright}} />
        </Section>
      </Footer>
    </>
  );
}
