import {getProjectBySlug} from 'lib/sanity.client';
import {PortableText} from '~/components/PortableText';
import {Content} from '~/components/Content';
import {Section} from '~/components/Section';
export default async function PageSlugRoute({
  params,
}: {
  params: {slug: string};
}) {
  const {slug} = params;
  const data = await getProjectBySlug({slug});

  if (!data) {
    console.log('not found', slug);
    return null;
  }

  return (
    <Section fill pad>
      <Content>
        <PortableText value={data.overview} />
      </Content>
    </Section>
  );
}
