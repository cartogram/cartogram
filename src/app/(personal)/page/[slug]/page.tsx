import {getPageBySlug} from 'lib/sanity.client';
import {PortableText} from '~/components/PortableText';
import {Content} from '~/components/Content';
import {Section} from '~/components/Section';
import {Header} from '~/components/Header';
import {Small} from '~/components/Text';
import {Mast} from '~/components/Mast';

export default async function PageSlugRoute({
  params,
}: {
  params: {slug: string};
}) {
  const {slug} = params;

  const data = await getPageBySlug({slug});

  if (!data) {
    return null;
  }

  const {body, coverImage, intro, title} = data || {};

  return (
    <>
      <Header title={title} />
      <Mast image={coverImage} title={title} overview={intro} />

      <Section fill>
        <Content>
          <PortableText value={body} />
        </Content>
      </Section>
    </>
  );
}
