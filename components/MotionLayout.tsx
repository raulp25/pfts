import { motion } from 'framer-motion';






interface Props  {
    children: JSX.Element | JSX.Element[]
}


const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
  }

export const MotionLayout = ({children}:Props) => {
    return (
        <motion.article
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: .4, type: 'easeInOut' }}
          // style={{ position: 'relative' }}
        >
          <>        
            {children}
          </>
        </motion.article>
      )
}

