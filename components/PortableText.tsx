import {
  PortableText as DefaultPortableText,
  PortableTextComponents,
} from '@portabletext/react';
import type {PortableTextBlock} from '@portabletext/types';
import {Image} from './Image';
import {Small} from './Text';
import {Image as SanityImage} from 'sanity';

export function PortableText({
  paragraphClasses,
  value,
}: {
  paragraphClasses?: string;
  value: PortableTextBlock[];
}) {
  const components: PortableTextComponents = {
    block: {
      normal: ({children}) => {
        return <p className={paragraphClasses}>{children}</p>;
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
          <div>
            <Image image={value} alt={value.alt} />
            {value?.caption && <Small>{value.caption}</Small>}
          </div>
        );
      },
    },
  };

  return <DefaultPortableText components={components} value={value} />;
}
