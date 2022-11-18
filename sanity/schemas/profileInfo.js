export default {
  name: 'profileInfo',
  title: 'Profile Info',
  type: 'document',
  fields: [
    {
      name:"name",
      title: "Name",
      type: "string",
    },
    {
      name:"nameDescription",
      title: "Name Description",
      description: "description with cool phrase",
      type: "string",
    },
     {name:"projectsDescription",
      title: "Projects Description",
      description: "description with who you are",
      type: "string",
    },
     {name:"bioInfo",
      title: "Bio Info",
      description: "year and event of bio",
      type: "array",
      of: [{ type: "reference", to: { type: "bioInfo" } }],
    },
    {
      name:"profileSticker",
      title: "Profile Sticker Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],

  
}
