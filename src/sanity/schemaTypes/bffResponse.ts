import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'bffResponse',
  title: 'BFF Application Response',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Respondee Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'decision',
      title: 'Decision',
      type: 'string',
      options: {
        list: [
          {title: 'Approved', value: 'approved'},
          {title: 'Denied', value: 'denied'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
      },
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
    defineField({
        name: 'applicant',
        title: 'Applicant Identifier',
        type: 'string',
        description: 'Identifier for whose BFF application this response is for (e.g., "tristan-hill-bff")',
        initialValue: 'tristan-hill-bff', // Assuming this page is for "tristan-hill-bff"
        readOnly: true,
    })
  ],
  preview: {
    select: {
      name: 'name',
      decision: 'decision',
      submittedAt: 'submittedAt',
    },
    prepare({name, decision, submittedAt}) {
      const date = submittedAt ? new Date(submittedAt).toLocaleDateString() : 'No date';
      const decisionText = decision ? decision.charAt(0).toUpperCase() + decision.slice(1) : 'No decision';
      return {
        title: `${name} - ${decisionText}`,
        subtitle: date,
      }
    },
  },
})
