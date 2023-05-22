import React from 'react';

import {getHomePage} from 'lib/sanity.client';
import {Projects} from '~/components/Projects';

export default async function Home({children, ...rest}) {
  const data = await getHomePage({token: null});

  return (
    <Projects projects={data?.showcaseProjects ?? []}>{children}</Projects>
  );
}
