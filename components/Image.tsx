import {urlForImage} from 'lib/sanity.image';
import NextImage from 'next/image';

import styles from './Image.module.css';

import {clsx} from 'clsx';

interface ImageProps {
  image?: {asset?: any};
  alt?: string;
  width?: number;
  height?: number;
  size?: string;
  monochrome?: boolean;
}

export function Image({
  image,
  alt = 'Cover image',
  width = 3500,
  height = 2000,
  size = '100vw',
  monochrome,
}: ImageProps) {
  const className = clsx(styles.Image, monochrome && styles.monochrome);
  const imageUrl =
    image && urlForImage(image)?.height(height).width(width).fit('crop').url();

  return (
    <div className={className}>
      {imageUrl && (
        <NextImage
          alt={alt}
          width={width}
          height={height}
          sizes={size}
          src={imageUrl}
        />
      )}
    </div>
  );
}
