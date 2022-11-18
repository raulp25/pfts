import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../sanity';
import { ProfileInfo } from '../../typings';
import { groq } from 'next-sanity';

const query = groq`*[_type == "profileInfo"][0]{
        ...,
        bioInfo[]->,
    }`;

type Data = {
    profileInfo : ProfileInfo
};


export default async function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
    const profileInfo: ProfileInfo = await sanityClient.fetch(query);
    res.status(200).json( { profileInfo });
}


