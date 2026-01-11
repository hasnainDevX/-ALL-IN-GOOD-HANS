import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'qr9jhcw6', // Your project ID from sanity.config.js
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01'
})