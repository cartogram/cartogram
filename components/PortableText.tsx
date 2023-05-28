import {
  PortableText as DefaultPortableText,
  PortableTextComponents,
} from '@portabletext/react';
import type {PortableTextBlock} from '@portabletext/types';
import {Image} from './Image';
import {Small, Text} from './Text';
import {Image as SanityImage} from 'sanity';

export function PortableText({
  value,
}: {
  paragraphClasses?: string;
  value?: PortableTextBlock[];
}) {
  if (!value) {
    return null;
  }

  const components: PortableTextComponents = {
    block: {
      normal: ({children}) => {
        return <Text>{children}</Text>;
      },
    },
    marks: {
      link: ({children, value}) => {
        return (
          <a
            className="underline transition hover:opacity-50"
            href={value?.href}
            rel="noreferrer noopener"
          >
            {children}
          </a>
        );
      },
    },
    types: {
      image: ({
        value,
      }: {
        value: SanityImage & {alt?: string; caption?: string};
      }) => {
        return (
          <>
            <Image image={value} alt={value.alt} />
            {value?.caption && <Small>{value.caption}</Small>}
          </>
        );
      },
    },
  };

  return <DefaultPortableText components={components} value={value} />;
}
