import NextHead from 'next/head';
import {name, description, title, url, aka} from '~/content';
import {randomNumber} from '~/utils';

const COLORS = [
  [147, 56, 42, 1],
  [72, 184, 204, 1],
  [72, 203, 164, 1],
  [243, 89, 255, 1],
  [151, 169, 147, 1],
  [9, 38, 3, 1],
  [0, 68, 82, 1],
];

export function Head() {
  const color = COLORS[randomNumber(0, COLORS.length - 1)];

  return (
    <>
      <NextHead>
        <meta charSet="utf-8" />
        <meta name="language" content="english" />
        <meta httpEquiv="content-type" content="text/html" />
        <meta name="author" content={name} />
        <meta name="designer" content={name} />
        <meta name="publisher" content={name} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="Software Engineer" />
        <meta name="robots" content="index,follow" />
        <meta name="distribution" content="web" />
        <meta name="og:title" content={title} />
        <meta property="og:type" content="site" />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={aka} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="687" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={url.substring(7)} />
        <meta property="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/og-image.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1, initial-scale=1.0"
        />
        <meta name="theme-color" content="#000" />
      </NextHead>
      <style global jsx>{`
        :root {
          --color-primary: rgba(${color});
        }
      `}</style>
    </>
  );
}
