import Link from 'next/link';
import { ProjectsArray } from '../../typings';
import { CardProject } from './CardProject';
import { SmallMainRectangles, SmallMainTriangles, ThreeDots } from '../ui';

import { urlFor } from '../../sanity';
import { AnimatePresence, motion } from 'framer-motion';
import { MotionLayout } from '../MotionLayout';


type Props = {
    projects: ProjectsArray;
}

export const Projects = ({ projects }:Props) => {

    const responsiveImages = projects.projectsArray.map(project => { 
       return project.projectResponsiveImages.map(image => {
             return image.asset._ref
        })
    });

    return (                            //** h-screen */
        <div className='w-10/12 lg:w-[550px]  pb-[100px] mt-10 mx-auto text-white' >
            <section >
                <div className='flex flex-col gap-0 lg:gap-[0px] items-center justify-start text-center mt-[120px] md:mt-[180px] 2xl:mt-[180px]' >
                    <div className=''>  
                        <AnimatePresence initial={false}>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    scale: [1, 1.5, 1.5, 1.5, 1],
                                    opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                                    borderRadius: ["20%", "20%", "50%", "80%", "20%"],
                                }}
                                transition={{
                                    duration: 2.0,
                                }}
                                className='relative flex justify-center items-center'
                            >
                                <SmallMainRectangles />
                            </motion.div>
                        </AnimatePresence>

                        <SmallMainTriangles />
                    </div>
                </div>
            </section>

            <MotionLayout>
                <h3 className='font-medium text-xl mb-4 mt-3 md:ml-16 lg:ml-4' >Projects</h3>
                <div className='grid grid-cols-1 w-full justify-items-center lg:justify-items-center lg:grid-cols-2 gap-y-14 lg:gap-y-6' >
                    {projects.projectsArray && projects.projectsArray.map((project, idx) => (
                            <Link key={project.projectTitle} href={`/ProjectsPage/${project.projectTitle.split(' ').join('').toLocaleLowerCase()}`} >
                                <div className='sm:hidden' >
                                    <CardProject src={`${project.projectResponsiveImages.find(element => element.asset._ref.includes('331')) ? urlFor(responsiveImages[idx][0]).url() : ''}`} title={project.projectTitle} description={project.projectDescription} />
                                </div>

                                <div className='hidden lg:block' >
                                    <CardProject src={`${project.projectResponsiveImages.find(element => element.asset._ref.includes('250')) ? urlFor(responsiveImages[idx][1]).url() : ''}`} title={project.projectTitle} description={project.projectDescription} />
                                </div>

                                <div className='hidden sm:block lg:hidden' >
                                    <CardProject src={`${project.projectResponsiveImages.find(element => element.asset._ref.includes('570')) ? urlFor(responsiveImages[idx][2]).url() : ''}`} title={project.projectTitle} description={project.projectDescription} />
                                </div>
                            </Link>
                    ))}  
                </div>
                <ThreeDots/>
                <footer className='lg:text-center  flex flex-col items-center gap-y-3 md:gap-y-3'>
                    <p>This Portfolio was built on Next, Ts, Sanity and Framer Motion.</p>
                    <Link href={'https://github.com/raulp25/portfolioTs'}>
                        <p className=' hover:underline hover:underline-offset-[3px] h-fit mr-4 inline-block px-1 cursor-pointer pt-0 pb-0 mt-0 mb-0 align-text-bottom text-end whitespace-nowrap rounded bg-pink-rgba font-bold text-green-text-rgba text-sm'>Source</p>
                    </Link>
                </footer>
            </MotionLayout>
        </div>
    )
}