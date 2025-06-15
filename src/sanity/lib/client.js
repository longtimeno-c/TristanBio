import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-01-01',
  useCdn: process.env.NODE_ENV === 'production', // Use CDN in production for reads
  token: process.env.NEXT_PUBLIC_SANITY_WRITE_TOKEN, // Use token for write operations
  ignoreBrowserTokenWarning: true, // Suppress warning if token is exposed (as it is public for this use case)
})
