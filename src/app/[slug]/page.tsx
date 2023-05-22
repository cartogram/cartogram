import {getProjectBySlug} from 'lib/sanity.client';
import {PortableText} from '~/components/PortableText';

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

  return <PortableText value={data.overview} />;
}
