import React from 'react';

import {Section} from '~/components/Section';
import {NotFound} from '~/components/NotFound';

export default async function NotFoundPage() {
  return (
    <>
      <Section fill>
        <NotFound />
      </Section>
    </>
  );
}
