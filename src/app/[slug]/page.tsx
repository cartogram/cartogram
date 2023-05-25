import {getProjectBySlug} from 'lib/sanity.client';
import {PortableText} from '~/components/PortableText';
import {Content} from '~/components/Content';
import {Section} from '~/components/Section';
import {Header} from '~/components/Header';
import {Image} from '~/components/Image';
import {Text, Small, Large} from '~/components/Text';

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

  const {
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    tags,
    title,
  } = data || {};

  const startYear = new Date(duration?.start!).getFullYear();
  const endYear = duration?.end ? new Date(duration?.end).getFullYear() : 'Now';

  return (
    <>
      <Header title={title} />

      <Section fill>
        <Content>
          <PortableText value={overview} />

          <PortableText value={description} />

          {client && <Small>{client}</Small>}
          {!!(startYear && endYear) && (
            <Small>{`${startYear} -  ${endYear}`}</Small>
          )}
          {site && (
            <Small>
              <Link
                target="_blank"
                className="text-md break-words md:text-lg"
                href={site}
              >
                {site}
              </Link>
            </Small>
          )}

          {tags?.map((tag, key) => (
            <Small>#{tag}</Small>
          ))}
        </Content>
        <Image
          image={coverImage}
          alt={`Cover image for ${title}`}
          classesWrapper="relative aspect-[16/9]"
        />
      </Section>
    </>
  );
}
