export const schemaTypes = [
  {
    name: 'aboutContent',
    title: 'About Section',
    type: 'document',
    fields: [
      {
        name: 'heading',
        title: 'Heading',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
    ],
  },
  {
    name: 'signsSection',
    title: 'Signs Section',
    type: 'document',
    fields: [
      {
        name: 'heading',
        title: 'Heading',
        type: 'string',
      },
      {
        name: 'signs',
        title: 'Signs List',
        type: 'array',
        of: [{type: 'string'}],
      },
      {
        name: 'closingText',
        title: 'Closing Text',
        type: 'text',
      },
    ],
  },
  {
    name: 'whyChooseVa',
    title: 'Why Choose VA Section',
    type: 'document',
    fields: [
      {
        name: 'heading',
        title: 'Heading',
        type: 'string',
      },
      {
        name: 'benefits',
        title: 'Benefits',
        type: 'array',
        of: [
          {
            type: 'object',
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
            ],
          },
        ],
      },
      {
        name: 'imageUrl',
        title: 'Background Image URL',
        type: 'url',
        description: 'Full URL of the background image',
      },
    ],
  },
  {
    name: 'servicesSection',
    title: 'Services Section',
    type: 'document',
    fields: [
      {name: 'heading', title: 'Heading', type: 'string'},
      {
        name: 'services',
        title: 'Services',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {name: 'number', title: 'Number', type: 'string'},
              {name: 'title', title: 'Title', type: 'string'},
              {name: 'tagline', title: 'Tagline', type: 'string'},
              {name: 'description', title: 'Description', type: 'text'},
              {name: 'includes', title: 'Includes', type: 'array', of: [{type: 'string'}]},
              {name: 'ideal', title: 'Ideal For', type: 'text'},
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'pricingSection',
    title: 'Pricing Section',
    type: 'document',
    fields: [
      {name: 'title', title: 'Title', type: 'string'},
      {name: 'introText', title: 'Introductory Text', type: 'string'},
      {
        name: 'pricing',
        title: 'Pricing Packages',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {name: 'name', title: 'Package Name', type: 'string'},
              {name: 'hours', title: 'Hours Included', type: 'string'},
              {name: 'points', title: 'Description Points', type: 'array', of: [{type: 'string'}]},
              {name: 'cta', title: 'Call to Action Button Text', type: 'string'},
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'packagesSection',
    title: 'Packages & Projects Section',
    type: 'document',
    fields: [
      {
        name: 'heading',
        title: 'Heading',
        type: 'string',
        description: 'Main heading for the packages section',
      },
      {
        name: 'introText',
        title: 'Introductory Text',
        type: 'text',
        description: 'Brief description under the heading',
      },
      {
        name: 'packages',
        title: 'Packages/Projects',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Package Name',
                type: 'string',
                description: 'e.g., "Inbox and Calendar Management"',
              },
              {
                name: 'subtitle',
                title: 'Subtitle/Price',
                type: 'text',
                description: 'e.g., "£450/month" or a descriptive subtitle',
              },
              {
                name: 'points',
                title: 'Feature Points',
                type: 'array',
                of: [{type: 'text'}],
                description: 'List of features or details for this package',
              },
              {
                name: 'ctaText',
                title: 'Call to Action Button Text',
                type: 'string',
                description: 'Button text (default: "I want this!")',
              },
            ],
            preview: {
              select: {
                title: 'name',
                subtitle: 'subtitle',
              },
            },
          },
        ],
      },
    ],
  },
  {
    name: 'getstarted',
    title: 'Get Started Section',
    type: 'document',
    fields: [
      {
        name: 'heading',
        title: 'Main Heading',
        type: 'string',
        description: 'Main heading for the Get Started section',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'subheading',
        title: 'Subheading',
        type: 'text',
        description: 'Subheading text below the main heading',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'step1',
        title: 'Step 1',
        type: 'text',
        description: 'First step description',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'step2',
        title: 'Step 2',
        type: 'text',
        description: 'Second step description',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'step3',
        title: 'Step 3',
        type: 'text',
        description: 'Third step description',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'step4',
        title: 'Step 4',
        type: 'text',
        description: 'Fourth step description',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'ctaButton',
        title: 'CTA Button Text',
        type: 'string',
        description: 'Text for the contact button',
        initialValue: 'Contact Me',
      },
      {
        name: 'emailButton',
        title: 'Email Button Text',
        type: 'string',
        description: 'Text for the email button',
        initialValue: 'Email',
      },
    ],
    preview: {
      select: {
        title: 'heading',
        subtitle: 'subheading',
      },
    },
  },
]
