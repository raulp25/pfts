import type { GetServerSideProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { NavBar, SmallMainRectangles, SmallMainTriangles } from '../../components';
import { Project, Social } from '../../typings';
import { fetchSocials } from '../../utils';

import { AnimatePresence, motion } from 'framer-motion';
import { sanityClient, urlFor } from '../../sanity';
import { MotionLayout } from '../../components/MotionLayout';


interface Props {
   
    project: Project;
    socials: Social[];
};

const Home = ({project, socials}:Props) => {  
    
  return (  
        <div  className='bg-[#0f1018] hyphenate h-screen text-white z-1 overflow-x-hidden'>
            <Head>
            <title>RP</title>
            <link rel='icon' href='/favicon.ico'/>
            </Head> 
                    <AnimatePresence initial={false}>
                        <NavBar socials={socials}/>
                    </AnimatePresence>
            <div className='max-w-[780px] mx-auto text-white z-0'>
                    <section >                                              
                        <div className='flex flex-col gap-0 lg:gap-[0px] items-center justify-start text-center mt-[120px] md:mt-[180px] 2xl:mt-[180px]'>
                            <div>
                                <AnimatePresence initial={false}>
                                    <motion.div 
                                        initial={{
                                        opacity: 0,
                                        }}
                                        animate={{
                                        scale: [1,1.5,1.5,1.5,1],
                                        opacity: [0.1,0.2,0.4,0.8,0.1,1.0],
                                        borderRadius: ["20%","20%","50%","80%","20%"],
                                        }}
                                        transition={{
                                        duration: 2.0,
                                    }}
                                        className='relative flex justify-center items-center'
                                    >
                                        <SmallMainRectangles/>
                                    </motion.div>
                                </AnimatePresence>   

                                <SmallMainTriangles/>            
                            </div>
                        </div>
                    </section>
                        
            <MotionLayout>
                <div className='lg:mx-[109px] lg:max-w-[517px] w-full'>
                    <main className='w-10/12 lg:w-[517px] main-about lg:px-4 pt-5 pb-20 lg:py-7 mx-auto text-white'>

                            <article className='mt-3 flex flex-col'>
                                <div className='flex items-center'>
                                    <div className='flex items-center'>
                                        <p className='text-xl mb-4 mt-3'>Project</p> 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 text-white h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </div>

                                    <div>
                                        <p>{project.projectTitle}</p>
                                    </div>
                                </div>

                                <p lang='en' className='text-justify indent-5 text-base font-normal .main-about hyphens-auto'>
                                This app was designed <span className='text-[#72FFFF] hyphens-auto'>just to look good</span> with ultra high quality images and without caring about loading times. You may ask why images are not optimized to low sizes? Well, when images are 8k there's no way to optimize them. 
                                </p>

                                <p lang='en' className='text-justify indent-5 text-base font-normal .main-about hyphens-auto'>
                                Responsive design handcrafted with this bare hands. 
                                </p>
                            </article>

                            <article className='mt-7' >
                                <ul>
                                    <li lang='en' className='flex flex-wrap items-center'>
                                        <span className='h-fit mr-4 inline-block px-1  pt-0 pb-0 mt-0 mb-0 align-text-middle text-center whitespace-nowrap rounded bg-pink-rgba font-bold text-pink-text-rgba text-xs'>WEBSITE</span>
                                        <Link href={project.website} className='flex gap-1'>
                                            <span lang='en' className='text-[#72FFFF] hyphenate hyphens-atuo text-justify main-about cursor-pointer hover:underline hover:underline-offset-2'>{project.website}</span> 
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 font-bold  text-pink-text-rgba">
                                                <path fillRule="evenodd" d="M18 5.25a2.25 2.25 0 00-2.012-2.238A2.25 2.25 0 0013.75 1h-1.5a2.25 2.25 0 00-2.238 2.012c-.875.092-1.6.686-1.884 1.488H11A2.5 2.5 0 0113.5 7v7h2.25A2.25 2.25 0 0018 11.75v-6.5zM12.25 2.5a.75.75 0 00-.75.75v.25h3v-.25a.75.75 0 00-.75-.75h-1.5z" clipRule="evenodd" />
                                                <path fillRule="evenodd" d="M3 6a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V7a1 1 0 00-1-1H3zm6.874 4.166a.75.75 0 10-1.248-.832l-2.493 3.739-.853-.853a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.154-.114l3-4.5z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </li>

                                    <li>
                                        <span className='mr-4 h-fit inline-block px-1 pt-0 pb-0 mt-0 mb-0 align-text-middle text-center whitespace-nowrap rounded bg-pink-rgba font-bold text-pink-text-rgba text-xs'>STACK</span>
                                        <span>{project.projectStack}</span> 
                                    </li>

                                    <li className='flex flex-wrap  items-end'>
                                        <span className='h-fit mr-4 inline-block px-1 pt-0 pb-0 mt-0 mb-0 align-text-bottom text-end whitespace-nowrap rounded bg-pink-rgba font-bold text-pink-text-rgba text-xs'>SOURCE</span>
                                        <Link href={project.source}>
                                            <span className='main-about cursor-pointer hover:underline hover:underline-offset-2'>{project.source.slice(8)}</span> 
                                        </Link>
                                    </li>

                                    { project.disclaimer && (

                                            <li>
                                                <span className='h-fit mr-4 inline-block  px-1  pt-0 pb-0 mt-0 mb-0 align-text-bottom text-end whitespace-nowrap rounded bg-pink-rgba font-bold text-pink-text-rgba text-xs'>DISCLAIMER</span>
                                                <span className='main-about'>{project.disclaimer}</span> 
                                            </li>
                                    )}
                                </ul>
                            </article>
                            <section className='mt-10 flex flex-col gap-y-5'>

                                <div className='grid grid-cols-2 gap-2'>
                                    <img className='rounded-lg' src={urlFor(project.projectGallery[0].asset).url()} alt=""/>
                                    <img className='rounded-lg' src={urlFor(project.projectGallery[1].asset).url()} alt=""/>
                                </div>

                                <div className='w-full'>
                                    <img className='object-cover rounded-lg' src={urlFor(project.projectGallery[2].asset).url()} alt=""/>
                                </div>

                                <div className='w-full'>
                                <img className='h-full object-cover rounded-lg' src={urlFor(project.projectGallery[3].asset).url()} alt=""/>
                                </div>
                            </section>
                        
                        <footer className='mt-20 flex flex-row-reverse items-end justify-between'>
                            <div>
                            <img src={urlFor(project.projectSticker).url()} className='h-40 mx-auto' alt="" />
                            </div>
                        </footer>
                    </main>
                </div>        
            </MotionLayout>
            </div>
        </div>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps<Props>  = async() => {
    const query = `*[_type == "projectInfo" && projectTitle == $id][0]`;

    const socials:     Social[]  = await fetchSocials();
    
    const project:    Project  = await sanityClient.fetch(query,{
        id: `Comics Art`
    }); 
      
  
    if (!project){
        return {
            notFound: true
        }
    }

    return {
        props: {
            project,
            socials,
        }
    }
}