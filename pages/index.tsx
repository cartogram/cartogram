import React from 'react';

import {
  formatedDates,
  twoLiner,
  title,
  socialLinks,
  links,
  tags,
  Tag,
  name,
} from '~/content';

import {Layout, Head, A, Text, Content, Wordmark} from '~/components';

export default function Home() {
  return (
    <>
      <Head />
      <Layout>
        <Wordmark />
        <Content>
          <Text>{name}</Text>
          <Text dangerouslySetInnerHTML={{__html: twoLiner}} />]
        </Content>
      </Layout>
    </>
  );
}
