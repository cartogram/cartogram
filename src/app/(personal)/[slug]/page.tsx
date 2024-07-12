import {allPosts} from 'contentlayer/generated'
import {getMDXComponent} from 'next-contentlayer/hooks'
import type {MDXComponents} from 'mdx/types'

import {Header} from '~/components/Header'
import {Info} from '~/components/Info'
import {Section} from '~/components/Section'
import {Text, Small, Large} from '~/components/Text'
import {Image} from '~/components/Image'
import {ListItem} from '~/components/ListItem'
import {Dash} from '~/components/Dash'
import {A} from '~/components/A'

import {name} from '~/content'

interface Params {
  slug: string
}

const mdxComponents: MDXComponents = {
  a: ({href, children}) => <A href={href as string}>{children}</A>,
  section: Section,
  Text,
  Image,
  blockquote: ({children}) => (
    <Large>
      <blockquote>{children}</blockquote>
    </Large>
  ),
  h2: ({children}) => <Large>{children}</Large>,
  h3: ({children}) => <Large>{children}</Large>,
  li: ({children}) => <ListItem item={{title: children}} />,
}

export default async function PageSlugRoute({params}: {params: Params}) {
  const {slug} = params

  const post = allPosts.find(post => post._raw.flattenedPath === slug)

  if (!post) {
    return null
  }

  const {body, formats, title} = post
  const PostContent = getMDXComponent(body.code)

  const isPage = formats?.find(format => format.title === 'page')

  const mast = isPage ? null : (
    <>
      <Text>{post.description}</Text>
      <Small>view</Small>
      <Dash />
      <Small>
        <A href={post.link} external>
          {post.link?.replace('https://', '')}
        </A>
      </Small>
      <Small>roles</Small>
      <Dash />
      <Small>{post.roles?.map(role => role.title).join(', ')}</Small>
    </>
  )

  return (
    <>
      <Header title={name} />
      <Section fill>
        <Info>
          {mast}
          <PostContent components={mdxComponents} />
        </Info>
      </Section>
    </>
  )
}

export const generateStaticParams = async () =>
  allPosts.map(post => ({slug: post._raw.flattenedPath}))

export const generateMetadata = ({params}) => {
  const post = allPosts.find(post => post._raw.flattenedPath === params.slug)
  return {title: post?.title}
}

function Button({children}) {
  return <button style={{padding: 20}}>{children}</button>
}
