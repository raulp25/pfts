import { GetServerSideProps } from 'next';
import { NavBar, Projects} from '../../components';
import { ProjectsArray, Social } from '../../typings';
import { fetchProjects, fetchSocials } from '../../utils';

import { AnimatePresence } from 'framer-motion';
import { MotionLayout } from '../../components/MotionLayout';


type Props = {
  projects: ProjectsArray
  socials: Social[];
};


const ProjectsPage = ({projects, socials}: Props) => {
  return (
    <div className='bg-[#0f1018] h-screen pb-[0px] lg:pb-[75px] overflow-x-hidden text-white'>
        <AnimatePresence initial={false}>
         <NavBar  socials={socials} />
        </AnimatePresence>
        
        <Projects projects={projects}/>
        
    </div>
  )
}

export default ProjectsPage

export const getServerSideProps: GetServerSideProps<Props> = async() => {
  
  const projects:    ProjectsArray    = await fetchProjects();
  const socials:     Social[]     = await fetchSocials();
  
  return{
    props:{
      projects,
      socials,

    },       
  }
}

