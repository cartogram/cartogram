import React from 'react';

import {threeLiner, name} from '~/content';

import {Layout, Head, A, Text, Content, Wordmark} from '~/components';

export default function Home() {
  return (
    <>
      <Head />
      <Layout>
        <Wordmark />
        <Text>{name}</Text>
        <Content dangerouslySetInnerHTML={{__html: threeLiner}} />
      </Layout>
    </>
  );
}
