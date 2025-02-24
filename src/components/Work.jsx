
import {motion} from 'framer-motion'
import atm from '../assets/atm.jpg'
import fitness from '../assets/fitness.png'
import movie from '../assets/movie.jpg'
import weather from '../assets/weather.png'
import food from '../assets/food.png'
import { IoIosLink } from "react-icons/io";
import { RiExternalLinkLine } from "react-icons/ri";
import code from '../assets/code.jpg'

function Work(){
    return (
        <motion.div className="container mx-auto  mt-10 px-2 py-2" id='work'>

            <h1 className="text-3xl text-center text-white font-bold md:text-4xl">My Work</h1>
            <div className="flex gap-5 flex-wrap justify-center items-center mt-5 px-4">

                <motion.div className="w-[350px] h-[350px] md:[300px] h-[300px] relative group rounded-sm" initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}}>
                    <img src={atm} alt='' className='w-full h-full z-[-1]'></img>

                    <div className='absolute  bottom-0 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[#C700FF]  left-0 right-0 z-10 h-0 group-hover:h-full duration-150 flex flex-col justify-center items-center overflow-hidden gap-6 rounded-sm' >
                             <p className='text-white font-bold'>Atm interface using java swing</p>
                             <div className='flex gap-2'>
                   <a href='https://github.com/Dhiraj-salgare/MovieSearchapp-React.git'><IoIosLink className='text-[#C700FF] bg-white rounded-full px-2 py-2' size={40}></IoIosLink></a>
                   <a href=''><RiExternalLinkLine className='text-[#C700FF] bg-white rounded-full px-2 py-2' size={40}/></a>
                   </div>
                    </div>

                </motion.div>
                <motion.div className="w-[350px] h-[350px]  relative group rounded-sm" initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}}>
                <img src={fitness} alt='' className='w-full h-full z-[-1]'></img>

                  <div className='absolute  bottom-0 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[#C700FF]  left-0 right-0 z-10 h-0 group-hover:h-full duration-150 flex flex-col justify-center items-center overflow-hidden gap-6 rounded-sm' >
                   <p className='text-white font-bold'>Fitness App</p>
                   <div className='flex gap-2'>
                   <a href='https://github.com/Dhiraj-salgare/MovieSearchapp-React.git'><IoIosLink className='text-[#C700FF] bg-white rounded-full px-2 py-2' size={40}></IoIosLink></a>
                   <a href=''><RiExternalLinkLine className='text-[#C700FF] bg-white rounded-full px-2 py-2' size={40}/></a>
                   </div>
                   </div>

               </motion.div>

               <motion.div className="w-[350px] h-[350px]  relative group rounded-sm" initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}}>
                <img src={movie} alt='' className='w-full h-full z-[-1]'></img>

                  <div className='absolute  bottom-0 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[#C700FF]  left-0 right-0 z-10 h-0 group-hover:h-full duration-150 flex flex-col justify-center items-center overflow-hidden gap-6 rounded-sm' >
                   <p className='text-white font-bold'>Movie app</p>

                   <div className='flex gap-2'>
                   <a href='https://github.com/Dhiraj-salgare/MovieSearchapp-React.git'><IoIosLink className='text-[#C700FF] bg-white rounded-full px-2 py-2' size={40}></IoIosLink></a>
                   <a href=''><RiExternalLinkLine className='text-[#C700FF] bg-white rounded-full px-2 py-2' size={40}/></a>
                   </div>
                   </div>

               </motion.div>

               <motion.div className="w-[350px] h-[350px] relative group rounded-sm" initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}}>
                <img src={weather} alt='' className='w-full h-full z-[-1]'></img>

                  <div className='absolute  bottom-0 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[#C700FF]  left-0 right-0 z-10 h-0 group-hover:h-full duration-150 flex flex-col justify-center items-center overflow-hidden gap-6 rounded-sm' >
                   <p className='text-white font-bold'>Weather App</p>
                   <div className='flex gap-2'>
                   <a href='https://github.com/Dhiraj-salgare/MovieSearchapp-React.git'><IoIosLink className='text-[#C700FF] bg-white rounded-full px-2 py-2' size={40}></IoIosLink></a>
                   <a href=''><RiExternalLinkLine className='text-[#C700FF] bg-white rounded-full px-2 py-2' size={40}/></a>
                   </div>
                   </div>

               </motion.div>

               <motion.div className="w-[350px] h-[350px] relative group rounded-sm" initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}}>
                <img src={food} alt='' className='w-full h-full z-[-1]'></img>

                  <div className='absolute  bottom-0 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[#C700FF]  left-0 right-0 z-10 h-0 group-hover:h-full duration-150 flex flex-col justify-center items-center overflow-hidden gap-6 rounded-sm' >
                   <p className='text-white font-bold'>Food Delivery Web App (MERN stack)</p>
                  
                   <div className='flex gap-2'>
                   <a href='https://github.com/Dhiraj-salgare/MovieSearchapp-React.git'><IoIosLink className='text-[#C700FF] bg-white rounded-full px-2 py-2' size={40}></IoIosLink></a>
                   <a href=''><RiExternalLinkLine className='text-[#C700FF] bg-white rounded-full px-2 py-2' size={40}/></a>
                   </div>
                   </div>

               </motion.div>

               <motion.div className="w-[350px] h-[350px] relative group rounded-sm" initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}}>
                <img src={code} alt='' className='w-full h-full z-[-1]'></img>

                  <div className='absolute  bottom-0 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[#C700FF]  left-0 right-0 z-10 h-0 group-hover:h-full duration-150 flex flex-col justify-center items-center overflow-hidden gap-6 rounded-sm' >
                   <p className='text-white font-bold'>Code Reviewer</p>
                   <div className='flex gap-2'>
                   <a href='https://github.com/Dhiraj-salgare/MovieSearchapp-React.git'><IoIosLink className='text-[#C700FF] bg-white rounded-full px-2 py-2' size={40}></IoIosLink></a>
                   <a href=''><RiExternalLinkLine className='text-[#C700FF] bg-white rounded-full px-2 py-2' size={40}/></a>
                   </div>
                   </div>

               </motion.div>
               
                 
            </div>

        </motion.div>
    )
}

export default Work