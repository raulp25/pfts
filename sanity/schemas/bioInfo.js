export default {
    name: 'bioInfo',
    title: 'BioInfo',
    type: 'document',
    fields: [
      {
        name:"year",
        title: "Year",
        description: "year of bio event",
        type: "string",
      },
      {
        name:"yearDescription",
        title: "Year Description",
        type: "string",
        description: "description of bio event",
        validation: (Rule) => Rule.min(0).max(50),
      },
    ],
  }