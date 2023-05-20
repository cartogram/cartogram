import React from 'react';

import {threeLiner, professionalLinks, bio, name} from '~/content';

import {
  Layout,
  Footer,
  A,
  Text,
  Content,
  Wordmark,
  Section,
  List,
} from '~/components';

export default function Home() {
  return (
    <>
      <Layout>
        <Wordmark />
        <Section pad vertical>
          <Text pad>
            <A href="/">{name}</A>
          </Text>
          <Content dangerouslySetInnerHTML={{__html: threeLiner}} />
        </Section>
        <Section pad vertical small>
          <List pad inline items={professionalLinks} />
        </Section>
        <Footer />
      </Layout>
      {/* <Layout>
        <Section right pad vertical small>
          <Content dangerouslySetInnerHTML={{__html: bio}} />
        </Section>
      </Layout> */}
    </>
  );
}
