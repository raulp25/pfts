import { ProfileInfo } from '../typings';


export const fetchProfileInfo = async() => {

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProfileInfo`);
        const data = await res.json();
        const profileInfo: ProfileInfo = data.profileInfo;

  return profileInfo;
}