export default {
  name: 'oakforgeWork',
  title: 'Oakforge Studios Work',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      description: 'Name of the completed project'
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'text',
      description: 'Detailed description of the project'
    },
    {
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      description: 'The client for whom the work was completed'
    },
    {
      name: 'completionDate',
      title: 'Completion Date',
      type: 'date',
      description: 'When the project was completed'
    },
    {
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          {title: 'Educational Software', value: 'educational'},
          {title: 'Gaming', value: 'gaming'},
          {title: 'Mobile Application', value: 'mobile'},
          {title: 'Web Development', value: 'web'},
          {title: 'Desktop Application', value: 'desktop'},
          {title: 'Other', value: 'other'}
        ]
      }
    },
    {
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Technologies and frameworks used in the project'
    },
    {
      name: 'mainImage',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Main showcase image for the project'
    },
    {
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'Image description'
            },
          ]
        }
      ],
      description: 'Additional project images'
    },
    {
      name: 'links',
      title: 'Project Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              type: 'string',
              title: 'Label'
            },
            {
              name: 'url',
              type: 'url',
              title: 'URL'
            }
          ]
        }
      ],
      description: 'Links to the live project, repository, etc.'
    },
    {
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'text',
      description: 'Feedback from the client about this project'
    },
    {
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Mark as a featured project on the Oakforge Studios page'
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order projects appear on the page (lower numbers appear first)'
    }
  ],
  preview: {
    select: {
      title: 'title',
      client: 'clientName',
      media: 'mainImage'
    },
    prepare({title, client, media}: { title: string; client: string; media: any }) {
      return {
        title,
        subtitle: `Client: ${client || 'Unknown'}`,
        media
      }
    }
  }
}
