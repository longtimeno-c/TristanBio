export default {
  name: 'bffPageAssets',
  title: 'BFF Page Assets',
  type: 'document',
  fields: [
    {
      name: 'identifier',
      title: 'Identifier',
      type: 'string',
      description: 'A unique identifier for this set of assets (e.g., "tristan-hill-bff")',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'profilePicture',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
  ],
  preview: {
    select: {
      title: 'identifier',
      media: 'profilePicture',
    },
  },
}
