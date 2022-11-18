import { BigMainRectangles, BigMainTriangles} from './ui';
import { motion } from 'framer-motion';


export const Hero = () => {

  return (
    <div className='flex flex-col gap-0 lg:gap-[0px] items-center justify-start text-center mt-[204px] md:mt-[210px] 2xl:mt-[300px]' >
        <div>
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
                <BigMainRectangles/>
            </motion.div>
            
                <BigMainTriangles/>       
        </div>
        
        <div className='flex flex-col items-center justify-center' >
            <h2 className='pl-1 lg:pl-[10px] text-sm text-center uppercase text-gray-200 pb-2 tracking-[5px] md:tracking-[5px] lg:tracking-[15px] mt-2 lg:mt-2' >Software Engineer</h2>
            <h1 className='text-lg lg:text-xl mt-2 font-semibold px-10' >
            </h1>
        </div>
    </div>
  )
}