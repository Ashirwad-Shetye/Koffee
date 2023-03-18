import { defineCliConfig } from 'sanity/cli'
import { loadEnvConfig } from '@next/env'

const dev = process.env.NODE_ENV !== 'production'
loadEnvConfig(__dirname, dev, {info: () => null, error: console.error})

export default defineCliConfig({
  api: {
    projectId: 'mx09ii36',
    dataset: 'production'
  }
})
