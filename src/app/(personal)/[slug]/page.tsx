import {Content} from '~/components/Content'
import {Header} from '~/components/Header'
import {Mast} from '~/components/Mast'
import {PortableText} from '~/components/PortableText'
import {Section} from '~/components/Section'
import {Small} from '~/components/Text'

interface Params {
  slug: string
}

function getProjectBySlug(params: Params) {
  return {}
}

export default async function PageSlugRoute({
  params,
}: {
  params: {slug: string}
}) {
  const {slug} = params

  const data = await getProjectBySlug({slug})

  if (!data) {
    return null
  }

  const {client, coverImage, description, duration, overview, site, title} =
    data

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
  )
}
