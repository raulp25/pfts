import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { ProjectsArray  } from '../../typings';


const query = groq`*[_type == "projectsArray"][0]{
        ...,
        projectsArray[]->
    }`;


type Data = {
    projectsArray: ProjectsArray ;
};


export default async function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
    const projectsArray:  ProjectsArray = await sanityClient.fetch(query);
    res.status(200).json( { projectsArray });
}





