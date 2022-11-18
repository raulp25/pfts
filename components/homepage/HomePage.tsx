import Link from 'next/link';
import { ProfileInfo } from '../../typings';
import { ThreeDots } from '../ui/ThreeDots';

import { urlFor } from '../../sanity';


interface Props {
 profileInfo: ProfileInfo
};

export const HomePage = ({ profileInfo }:Props) => {

  return (
      <main className='mobile-width px-4 lg:w-[518px] main-about py-24 lg:pt-7  mx-auto text-white' >
            <article className='' >
                <div className='mb-3'>
                    <h2 className='text-3xl lg:text-4xl  font-medium'>{profileInfo.name}</h2>
                    <p className='font-normal'>{profileInfo.nameDescription}</p>
                </div>
            </article>

            <ThreeDots/>
            
            <section>
                    <article className='mt-3' >
                        <p className='font-medium text-xl mb-4 mt-3' >Projects</p> 
                        <p className='text-justify indent-5 text-base font-medium font-normal text-white .main-about' >
                            {profileInfo.projectsDescription}<span className='text-[#72FFFF]'>Software Engineer</span>.  
                        </p>
                        
                        <Link href={'/ProjectsPage'}>
                            <button className="button flex items-center mx-auto my-4" >
                                    <p>My portfolio</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 text-white h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                            </button>
                        </Link>
                    </article>

                    <article className='mt-7' >
                        <p className='font-medium text-xl mb-4 mt-3' >Bio</p> 
                        { profileInfo.bioInfo && profileInfo.bioInfo.map(bioEvent => (
                                <div key={bioEvent.year} className='text-justify text-base font-medium font-normal .main-about' >
                                    <span className='mr-4 font-medium'>{bioEvent.year}</span> {bioEvent.yearDescription}
                                </div> 
                        ))}
                    </article> 
            </section>
            
            
            <footer className='mt-20 flex flex-row-reverse items-end justify-between' >
                <div>
                <img src={urlFor(profileInfo.profileSticker.asset).url()} className='h-40  mx-auto' alt="" />
                </div>
                    
                <div className=''>
                    <p className='peace' >
                    ~ Peace
                    </p>
                </div>
            </footer>
      </main>
  )
}
