import {apiVersion, dataset, projectId, useCdn} from 'lib/sanity.api';
import {
  homePageQuery,
  homePageTitleQuery,
  pagesBySlugQuery,
  projectBySlugQuery,
  settingsQuery,
} from 'lib/sanity.queries';
import {createClient} from 'next-sanity';
import type {
  HomePagePayload,
  PagePayload,
  ProjectPayload,
  SettingsPayload,
} from 'types';

const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
});

export async function getHomePage({
  token,
}: {
  token?: string | null;
}): Promise<HomePagePayload | undefined> {
  return await client.fetch(homePageQuery);
}

export async function getHomePageTitle({
  token,
}: {
  token?: string | null;
}): Promise<string | undefined> {
  return await client.fetch(homePageTitleQuery);
}

export async function getPageBySlug({
  slug,
  token,
}: {
  slug: string;
  token?: string | null;
}): Promise<PagePayload | undefined> {
  return await client.fetch(pagesBySlugQuery, {slug});
}

export async function getProjectBySlug({
  slug,
  token,
}: {
  slug: string;
  token?: string | null;
}): Promise<ProjectPayload | undefined> {
  return await client.fetch(projectBySlugQuery, {slug});
}

export async function getSettings({
  token,
}: {
  token?: string | null;
}): Promise<SettingsPayload | undefined> {
  return await client.fetch(settingsQuery);
}
