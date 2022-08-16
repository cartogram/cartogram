import NextHead from 'next/head';
import {name, description, title, url} from '~/content';

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
        <meta name="og:type" content="site" />
        <meta name="og:url" content={url} />
        <meta name="og:site_name" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content="/og-image.jpg" />
        <meta name="og:image:width" content="1200" />
        <meta name="og:image:height" content="687" />
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
