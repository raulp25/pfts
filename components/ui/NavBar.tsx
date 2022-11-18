import { useState } from 'react';
import Link from 'next/link';
import { DropMenu } from './DropMenu';
import { SmallTriangles } from './Triangles';
import { Social } from '../../typings';

import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';



type Props = {
    socials: Social[];
};

export const NavBar = ({ socials }: Props) => {
  const [menu, setMenu] = useState(false);
  const lm = () => {
    setMenu(!menu)
  };


    return (
        <header className='bg-[#212123] border-b border-[#0f101879] bg-opacity-5 backdrop-filter backdrop-blur-xl firefox:bg-opacity-30 lg:firefox:bg-opacity-5 lg:max-w-[769px] mx-auto px-5 py-2 z-20   flex justify-between lg:justify-start items-center sticky top-0 text-white' >
            <motion.div 
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
        }} 
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        className="" 
        >   
      
            <SmallTriangles/>
            
        </motion.div>

        <motion.div 
            initial={{
                x: -500, 
                opacity:0, 
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 1.5,
            }}
            className="hidden lg:flex lg:flex-row lg:items-center"
            >   
                <Link href={socials[0].url} className='order-2 font-apple  pr-[8px] hover:underline hover:underline-offset-[3px]' >
                    <p >Linkedin</p>
                </Link>
                {socials.map(social => (
                        <SocialIcon 
                        key={social._id}
                        url={social.url} 
                        fgColor="white" 
                        bgColor="transparent"
                        style={{  width:30  }}
                        className={social.url.includes('git') ? 'ml-[8px] pl-[8px] pt-[8px] pb-[8px]  order-3  hover:underline ' : 'order-1  pl-[8px] pt-[8px] pb-[8px] hover:underline'}
                        />
                    
                    ))}
                    <Link href={socials[1].url} className='order-4  pr-[8px]  hover:underline hover:underline-offset-[3px]' >
                        <p >Git</p>
                    </Link>
                    <Link href={'/ProjectsPage'}className='order-5 ml-[8px] p-[8px] hover:underline hover:underline-offset-[3px]' >
                        <p >Projects</p>
                    </Link>
        </motion.div>
        
        
       

        <DropMenu socials={socials} />
    </header>
  )
}