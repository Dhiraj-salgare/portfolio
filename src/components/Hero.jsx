

import pp from '../assets/ast.png'

import {animate, color, motion, reverseEasing} from 'framer-motion'
import { VscGithub } from "react-icons/vsc"
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SiLeetcode } from "react-icons/si"
import { FaLinkedinIn } from "react-icons/fa"
import { TypeAnimation } from 'react-type-animation'



function Hero(){
    return (
        <div className="text-white h-[600px] flex justify-center items-center flex-wrap flex-wrap-reverse lg:h-[700px]">

            <motion.div  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}  className='mx-auto text-center flex flex-col gap-4 lg:w-3/5'>
                <motion.h1  initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{duration:0.5,delay:0.5}} className='text-4xl  md:text-5xl flex-col flex gap-4 font-bold mt-[40px]'>Hii, I am Dhiraj Salgare</motion.h1>

                <TypeAnimation sequence={[
                      'I am computer Engineer',1000,
                      'I am Frontend Developer',1000,
                      'I am MERN stack developer',1000

                ]} wrapper='h2' speed={50}  repeat={Infinity} style={{color:'#00bcd4',fontWeight:'bold',fontSize:'30px'}}>


                </TypeAnimation>
                
               <div>
                <a href='/Dhiraj_Salgare_9822384717.pdf' download><button className='bg-[#00bcd4] px-6 py-3 rounded-full border-none outline-none'>Download Resume</button></a>
              
                </div>

                <div className='flex gap-2 justify-center mt-2 '>
                   <a href='https://github.com/Dhiraj-salgare'><VscGithub size={45} className='text-white border-2 border-[#00bcd4] rounded-full px-2 py-2 hover:shadow-[0px_4px_16px_6px_#00bcd4] duration-300 hover:bg-[#00bcd4]'/></a>
                   <a href='https://www.linkedin.com/in/dhiraj-salgare-309801201/'><FaLinkedinIn className='text-white border-2 border-[#00bcd4] rounded-full px-2 py-2 hover:shadow-[0px_4px_16px_6px_#00bcd4] duration-300 hover:bg-[#00bcd4]' size={45}/></a> 
                    <a href='https://leetcode.com/u/Dhiraj3117/'><SiLeetcode className='text-white border-2 border-[#00bcd4] rounded-full px-2 py-2 hover:shadow-[0px_4px_16px_6px_#00bcd4] duration-300 hover:bg-[#00bcd4]' size={45}/></a>
                </div>
            </motion.div>


            <div className='lg:w-2/5  w-4/5 flex justify-center items-center '>

            <motion.div className='nn w-[350px] h-[320px] mx-auto  lg:w-[500px]  lg:h-[400px] relative' initial={{y:-60}} animate={{y:[10,-10,10]}} transition={{duration:3,repeat:Infinity}}>
            <motion.img  initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:1}} className="mx-auto  md:w-[600px] lg:w-[500px] filter:drop-shadow-[10px_35px_35px_purple-500] kk absolute lg:top-[-80px]" src={pp} ></motion.img>
           </motion.div> 
           </div>
        </div>
    )
}

export default Hero