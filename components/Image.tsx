import {urlForImage} from 'lib/sanity.image';
import NextImage from 'next/image';

import styles from './Image.module.css';

interface ImageProps {
  image?: {asset?: any};
  alt?: string;
  width?: number;
  height?: number;
  size?: string;
  classesWrapper?: string;
}

export function Image({
  image,
  alt = 'Cover image',
  width = 3500,
  height = 2000,
  size = '100vw',
}: ImageProps) {
  const imageUrl =
    image && urlForImage(image)?.height(height).width(width).fit('crop').url();

  return (
    <div className={styles.Image}>
      {imageUrl && (
        <NextImage
          className=""
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
