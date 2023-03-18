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

/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

// import { apiVersion, dataset, projectId } from './lib/sanity.api'
// import { defineConfig } from 'sanity'
// import { deskTool } from 'sanity/desk'
// import product from './schemas/product'

// export default defineConfig({
//   title: 'koffee store',
//   basePath: '/studio',
//   projectId : process.env.NEXT_PUBLIC_SANITY_ID,
//   dataset: 'production',
//   schema: {
//     // If you want more content types, you can add them to this array
//     types: [product],
//   },
//   plugins: [deskTool(),
//     // Vision lets you query your content with GROQ in the studio
//     // https://www.sanity.io/docs/the-vision-plugin
//     visionTool({ defaultApiVersion: apiVersion }),
//   ],
// })