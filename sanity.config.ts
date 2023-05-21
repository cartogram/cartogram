import {defineConfig, isDev} from 'sanity';
import {visionTool} from '@sanity/vision';
import {deskTool} from 'sanity/desk';
import {schemaTypes} from './schemas';

export default defineConfig({
  name: 'default',
  title: 'seashell-frog',
  basePath: '/studio',

  projectId: 'rgblfkxx',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
