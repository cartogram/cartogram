import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files'

const Tag = defineNestedType(() => ({
  name: 'Tag',
  fields: {
    title: {type: 'string', required: true},
  },
}))

const Format = defineNestedType(() => ({
  name: 'Format',
  fields: {
    title: {
      type: 'enum',
      options: ['project', 'writing', 'page'],
      default: 'project',
      required: true,
    },
  },
}))

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    pending: {
      type: 'boolean',
      description: 'Whether the post is pending',
      required: false,
    },
    tags: {
      type: 'list',
      of: Tag,
    },
    formats: {
      type: 'list',
      of: Format,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: doc => `/posts/${doc._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: doc => doc._raw.flattenedPath,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
})
