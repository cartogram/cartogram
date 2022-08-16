import NextHead from 'next/head';
import {name, description, title, url, aka} from '~/content';

export function Head() {
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
    </>
  );
}
