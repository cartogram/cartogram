import {defineConfig, isDev} from 'sanity';
import {visionTool} from '@sanity/vision';
import {deskTool} from 'sanity/desk';
import page from 'schemas/documents/page';
import project from 'schemas/documents/project';
import duration from 'schemas/objects/duration';
import milestone from 'schemas/objects/milestone';
import timeline from 'schemas/objects/timeline';
import home from 'schemas/singletons/home';
import settings from 'schemas/singletons/settings';

export default defineConfig({
  name: 'default',
  title: 'Cartogram',
  basePath: '/studio',

  projectId: 'rgblfkxx',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
      home,
      settings,
      // Documents
      duration,
      page,
      project,
      // Objects
      milestone,
      timeline,
    ],
  },
});
