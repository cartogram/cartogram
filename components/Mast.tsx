import React from 'react';
import {Duration} from 'types';
import {Image} from './Image';
import {PortableText} from './PortableText';
import {Content} from './Content';
import {Dash} from './Dash';
import {Section} from './Section';
import {A} from './A';
import {Small} from './Text';

import {clsx} from 'clsx';

import styles from './Mast.module.css';

interface MastProps {
  children?: React.ReactNode;
  image?: React.ComponentProps<typeof Image>['image'];
  overview?: React.ComponentProps<typeof PortableText>['value'];
  duration?: Duration;
  title?: string;
  link?: string;
}

export function Mast({
  children,
  link,
  duration,
  image,
  title,
  overview,
}: MastProps) {
  const imageClassName = clsx(styles.Item, styles.Image);

  const startYear = new Date(duration?.start!).getFullYear();
  const endYear = duration?.end ? new Date(duration?.end).getFullYear() : 'Now';

  return (
    <>
      <div className={styles.Mast}>
        <div className={styles.Item}>
          <Section>
            <Content>
              <PortableText value={overview} />
            </Content>
            <div className={styles.Meta}>
              {duration && (
                <div className={styles.duration}>
                  <span>{startYear}</span>
                  <Dash />
                  <span>{endYear}</span>
                </div>
              )}
              {link && <A href={link}>Visit website</A>}
            </div>
          </Section>
        </div>

        <div className={imageClassName}>
          <Image monochrome image={image} alt={`Cover image for ${title}`} />
        </div>
      </div>
    </>
  );
}
