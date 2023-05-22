import React from 'react';

import {threeLiner, professionalLinks, name} from '~/content';
import {getHomePage} from 'lib/sanity.client';

import {Wordmark} from '~/components/Wordmark';
import {Layout} from '~/components/Layout';
import {Section} from '~/components/Section';
import {Text} from '~/components/Text';
import {Footer} from '~/components/Footer';
import {List} from '~/components/List';
import {Content} from '~/components/Content';
import {A} from '~/components/A';
import {Project} from '~/components/Project';

export default async function Home(params) {
  const data = await getHomePage({token: null});

  console.log(params);
  return (
    <>
      <Layout>
        <Wordmark />
        <Section pad>
          <Text pad>
            <A href="/">{name}</A>
          </Text>
          <Content>{threeLiner}</Content>
        </Section>
        <Section pad small>
          <List pad inline items={professionalLinks} />
        </Section>
        <Footer />
        {data &&
          data.showcaseProjects &&
          data.showcaseProjects.map(project => (
            <Project key={project._id} project={project} />
          ))}
      </Layout>
    </>
  );
}
