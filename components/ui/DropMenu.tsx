import { useState } from 'react';
import Link from "next/link"
import { useRouter } from "next/router";
import { Social } from "../../typings";

import { AnimatePresence, motion } from "framer-motion";

type Props = {
    socials: Social[];
};

export const DropMenu = ({socials}:Props) => {
    const {asPath} = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const lm = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div className="inline-flex bg-transparent lg:hidden  border rounded-md w-9 justify-end h-9" >
            <div className={`relative rounded-md w-full ${isMenuOpen ? 'bg-[#1e202e]' : '' }`}
            >
                <button
                onClick={lm}
                    type="button"
                    className="inline-flex items-center  mx-auto w-full  h-full  text-gray-100 border-slate-600"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[17px] mx-auto h-[17px]" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                { isMenuOpen && 
                    <AnimatePresence>
                            <motion.div 
                                key={"dropdown"}
                            variants={{
                                removed:{
                                    opacity:30, transition: {duration: 5}
                                }
                            }}
                                initial={{
                                    x: 0,
                                    opacity: 0,
                                    scale: 0,
                                }} 
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    scale: 1,
                                }}
                                exit={"removed"}
                                transition={{
                                    duration: .1,
                                    ease: "easeOut"
                                }}
                                className={`absolute right-0  w-[216px] mt-2 origin-top-right z-30 bg-[#2D3748] menu-border rounded-md shadow-lg`}
                                >

                                    <div className="py-2" >
                                        <Link
                                            href="/"
                                            className={`block  py-[6.4px] px-[12.8px] w-full px-4 py-2 text-base text-gray-100  hover:bg-gray-400/20  hover:underline hover:underline-offset-[3px] ${asPath === '/' ? 'bg-gray-400/20' : ''  }`}

                                            onClick={lm}
                                        >
                                            About
                                        </Link>
                                        <Link
                                            href="/ProjectsPage"
                                            className={`block  py-[6.4px] px-[12.8px] w-full px-4 py-2 text-base text-gray-100  hover:bg-gray-400/20  hover:underline hover:underline-offset-[3px]  ${asPath === '/ProjectsPage' ? 'bg-gray-400/20' : '' }`}

                                            onClick={lm}
                                        >
                                            Projects
                                        </Link>
                                        <Link 
                                            href={socials[1].url}
                                            className="block py-[6.4px] px-[12.8px] w-full px-4 py-2 text-base text-gray-100  hover:bg-gray-400/20 hover:underline hover:underline-offset-[3px]"
                                            onClick={lm}
                                            >
                                            Git
                                        </Link>
                                        <Link
                                            
                                            href={socials[0].url}
                                            className="block py-[6.4px] px-[12.8px] w-full px-4 py-2 text-base text-gray-100  hover:bg-gray-400/20 hover:underline hover:underline-offset-[3px]"
                                            onClick={lm}
                                            >
                                        Linkedin
                                        </Link>
                                    </div>
                            </motion.div>
                    </AnimatePresence>}

                    {isMenuOpen ? (<div className=' lg:hidden overlay bg-red-700 h-56' onClick={lm} />) : null}
            </div>
        </div>
  )
}
