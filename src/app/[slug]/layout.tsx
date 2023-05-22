import React from 'react';

import {getHomePage} from 'lib/sanity.client';

import {Projects} from '~/components/Projects';

export default async function Home({children, params, ...rest}) {
  const data = await getHomePage({token: null});

  const projects = data
    ? data.showcaseProjects?.reduce((acc, project) => {
        return [
          ...acc,
          {
            ...project,
            active: project.slug === params.slug,
          },
        ];
      }, [])
    : [];

  return <Projects projects={projects}>{children}</Projects>;
}
