import {allPosts} from 'contentlayer/generated'
import {getMDXComponent} from 'next-contentlayer/hooks'

import {Content} from '~/components/Content'
import {Header} from '~/components/Header'
import {Mast} from '~/components/Mast'
import {Section} from '~/components/Section'
import {Small} from '~/components/Text'

interface Params {
  slug: string
}

export default async function PageSlugRoute({params}: {params: Params}) {
  const {slug} = params

  const post = allPosts.find(post => post._raw.flattenedPath === slug)

  if (!post) {
    return null
  }

  const {title} = post

  const PostContent = getMDXComponent(post.body.code)

  return (
    <>
      <Header title={title} />
      {/* <Mast
        image={coverImage}
        title={title}
        overview={overview}
        duration={duration}
        link={site}
      >
        {client && <Small>{client}</Small>}
      </Mast> */}

      <Section fill>
        <Content>
          <article className="py-8 mx-auto max-w-xl">
            <div className="mb-8 text-center">
              <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
                {post.name}
              </time>
              <h1>{title}</h1>
            </div>
            <PostContent />
          </article>
        </Content>
      </Section>
    </>
  )
}

export const generateStaticParams = async () =>
  allPosts.map(post => ({slug: post._raw.flattenedPath}))

export const generateMetadata = ({params}) => {
  const post = allPosts.find(post => post._raw.flattenedPath === params.slug)
  return {title: post.title}
}
