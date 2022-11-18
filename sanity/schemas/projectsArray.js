export default {
    name: 'projectsArray',
    title: 'Projects Array',
    type: 'document',
    fields: [
       {name:"projectsArray",
        title: "Projects Array",
        description: "Individual Project in Project Info document",
        type: "array",
        of: [{ type: "reference", to: { type: "projectInfo" } }],
      }
    ],
  
    
  }
  