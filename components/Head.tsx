import NextHead from 'next/head';

const titleDefault =
  'Matt Seccafien (aka Cartogram) - Berlin-based creative web developer';
const url = 'https://cartogram.ca';
const description = '';
const author = 'Author';

export function Head({title = titleDefault}) {
  return (
    <>
      <NextHead>
        {/* Recommended Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="language" content="english" />
        <meta httpEquiv="content-type" content="text/html" />
        <meta name="author" content={author} />
        <meta name="designer" content={author} />
        <meta name="publisher" content={author} />

        {/* Search Engine Optimization Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="Software Engineer" />
        <meta name="robots" content="index,follow" />
        <meta name="distribution" content="web" />
        {/*
          Facebook Open Graph meta tags
            documentation: https://developers.facebook.com/docs/sharing/opengraph */}
        <meta name="og:title" content={title} />
        <meta name="og:type" content="site" />
        <meta name="og:url" content={url} />
        <meta name="og:site_name" content={title} />
        <meta name="og:description" content={description} />

        {/* Meta Tags for HTML pages on Mobile */}
        {/* <meta name="format-detection" content="telephone=yes"/>
            <meta name="HandheldFriendly" content="true"/>  */}
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1, initial-scale=1.0"
        />
        <meta name="theme-color" content="#000" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2290%22>👻</text></svg>"
        />

        {/*
          Twitter Summary card
            documentation: https://dev.twitter.com/cards/getting-started
            Be sure validate your Twitter card markup on the documentation site. */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@onirenaud" />
      </NextHead>
    </>
  );
}
