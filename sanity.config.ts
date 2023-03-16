import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  basePath: "/studio",
  name: 'default',
  title: 'koffee store',

  projectId: 'mx09ii36',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
