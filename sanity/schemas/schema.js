import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import profileInfo from './profileInfo'
import bioInfo from './bioInfo'
import projectInfo from './projectInfo'
import projectsArray from './projectsArray'
import social from './social';


export default createSchema({

  name: 'default',
  types: schemaTypes.concat([ profileInfo, bioInfo, projectInfo, projectsArray, social ]),
})
