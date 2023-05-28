import type {PortableTextBlock} from '@portabletext/types';
import type {Image} from 'sanity';

export interface Duration {
  start?: string;
  end?: string;
}

export interface MenuItem {
  _type: string;
  slug?: string;
  title?: string;
}

export interface MilestoneItem {
  description?: string;
  duration?: Duration;
  image?: Image;
  tags?: string[];
  title?: string;
}

export interface Project {
  _type: string;
  _createdAt?: string;
  client?: string;
  coverImage?: Image;
  description?: PortableTextBlock[];
  title?: string;
  slug?: string;
  tags?: string[];
  duration?: Duration;
  pending: boolean;
}

export interface ActiveProject extends Project {
  active?: boolean;
}

export interface ShowcaseProject {
  _type: string;
  coverImage?: Image;
  overview?: PortableTextBlock[];
  slug?: string;
  tags?: string[];
  title?: string;
  pending: boolean;
}

// Page payloads

export interface HomePagePayload {
  footer?: PortableTextBlock[];
  overview?: PortableTextBlock[];
  showcaseProjects?: ShowcaseProject[];
  title?: string;
  _id?: string;
}

export interface PagePayload {
  body?: PortableTextBlock[];
  name?: string;
  overview?: PortableTextBlock[];
  intro?: PortableTextBlock[];
  title?: string;
  coverImage?: Image;
}

export interface ProjectPayload {
  client?: string;
  coverImage?: Image;
  description?: PortableTextBlock[];
  duration?: Duration;
  overview?: PortableTextBlock[];
  site?: string;
  slug: string;
  tags?: string[];
  title?: string;
}

export interface SettingsPayload {
  footer?: PortableTextBlock[];
  menuItems?: MenuItem[];
  ogImage?: Image;
}
