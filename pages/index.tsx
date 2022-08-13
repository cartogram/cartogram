import React from 'react';

import {threeLiner, professionalLinks, socialLinks, name} from '~/content';

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

export default function Home() {
  return (
    <>
      <Head />
      <Layout>
        <Wordmark />
        <Section>
          <Text>
            <A>{name}</A>
          </Text>
          <Content dangerouslySetInnerHTML={{__html: threeLiner}} />
        </Section>
      </Layout>
      <Footer>
        <Section>
          <List inline items={[...professionalLinks, ...socialLinks]} />
        </Section>
        <Section>
          {' '}
          <Small>
            © {new Date().getFullYear()} Cartogram Inc. All Rights Reserved.
          </Small>
        </Section>
      </Footer>
    </>
  );
}
