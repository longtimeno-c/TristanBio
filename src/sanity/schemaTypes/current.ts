export default {
    name: 'currentWork',
    title: 'Currently Working On',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'links',
        title: 'Links',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'link',
            fields: [
              { name: 'label', type: 'string', title: 'Label' },
              { name: 'url', type: 'url', title: 'URL' }
            ]
          }
        ]
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: { hotspot: true }
      }
    ]
  }
  