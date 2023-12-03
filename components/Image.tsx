import NextImage from 'next/image'

import styles from './Image.module.css'

import {clsx} from 'clsx'

interface ImageProps {
  src: string
  alt?: string
  width?: number
  height?: number
  size?: string
  monochrome?: boolean
}

export function Image({
  src,
  alt = 'Cover image',
  width = 3500,
  height = 2000,
  size = '100vw',
  monochrome,
}: ImageProps) {
  const className = clsx(styles.Image, monochrome && styles.monochrome)

  return (
    <div className={className}>
      {src && (
        <NextImage
          alt={alt}
          width={width}
          height={height}
          sizes={size}
          src={src}
        />
      )}
    </div>
  )
}
