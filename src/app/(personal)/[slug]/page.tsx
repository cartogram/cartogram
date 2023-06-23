import {getProjectBySlug} from 'lib/sanity.client';
import {PortableText} from '~/components/PortableText';
import {Content} from '~/components/Content';
import {Section} from '~/components/Section';
import {Header} from '~/components/Header';
import {Image} from '~/components/Image';
import {Text, Small, Large} from '~/components/Text';
import {Mast} from '~/components/Mast';

import Link from 'next/link';

export default async function PageSlugRoute({
  params,
}: {
  params: {slug: string};
}) {
  const {slug} = params;

  const data = await getProjectBySlug({slug});

  if (!data) {
    return null;
  }

  const {client, coverImage, description, duration, overview, site, title} =
    data || {};

  return (
    <>
      <Header title={title} />
      <Mast
        image={coverImage}
        title={title}
        overview={overview}
        duration={duration}
        link={site}
      >
        {client && <Small>{client}</Small>}
      </Mast>

      <Section fill>
        <Content>
          <PortableText value={description} />
        </Content>
      </Section>
    </>
  );
}
