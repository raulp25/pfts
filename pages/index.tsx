import type { GetServerSideProps } from 'next'
import Head from 'next/head';
import { NavBar, Hero, HomePage } from '../components';
import { ProfileInfo, Social } from '../typings';
import { fetchProfileInfo, fetchSocials } from '../utils';
import { AnimatePresence, motion } from 'framer-motion';
import { MotionLayout } from '../components/MotionLayout';

interface Props {
    profileInfo: ProfileInfo;
    socials: Social[];
};

const Home = ({ profileInfo, socials }:Props) => {  
  return (  
    <div className='bg-[#0f1018] h-screen  text-white z-1 overflow-x-hidden'>
        <Head>
          <title>RP</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        
        <NavBar socials={socials}/>
        
        <div className=' max-w-[780px] mx-auto text-white z-0 '>
            <div className='lg:mx-[109px] lg:max-w-[517px] w-full'>
                <section >
                    <Hero/>
                </section>
                
                <section >
                    <MotionLayout>
                        <HomePage profileInfo={profileInfo} />
                    </MotionLayout>
                </section>
            </div>        
        </div>
        
    </div>
  )
}
export default Home

export const getServerSideProps: GetServerSideProps<Props> = async() => {
      const profileInfo: ProfileInfo = await fetchProfileInfo();
      const socials:     Social[]    = await fetchSocials();

    return{
        props:{
            profileInfo,
            socials,
        },
    }
}
