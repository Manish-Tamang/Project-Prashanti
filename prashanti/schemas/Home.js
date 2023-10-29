// schemas/home.js
export default {
    name: 'home',
    title: 'Home Page',
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
        name: 'testimonials',
        title: 'Testimonials',
        type: 'object',
        fields: [
          {
            name: 'clientName',
            title: 'Client Name',
            type: 'string',
          },
          {
            name: 'banner',
            title: 'Banner',
            type: 'image',
          },
          {
            name: 'testimonialText',
            title: 'Testimonial Text',
            type: 'text',
          },
        ],
      },
      // You can add more fields for other content as needed
    ],
  };
  