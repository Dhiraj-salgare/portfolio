
import { useState } from 'react'
import ss from '../assets/pp.png'
import {motion} from 'framer-motion'


function About(){

    const [options,setoption]=useState('Skills')
    return(
        <div className='container mx-auto text-white mt-[20px]' id='about'>
            <motion.div className='overflow-x-hidden'>
                <h1 className="text-3xl font-bold text-center md:4xl mb-8">About</h1>
               <div className="flex flex-col md:flex-row justify-center items-center gap-3">

                <div className='mb-8 md:mb-0 md:mr-8 flex justify-center md:w-2/5 py-2'>
                    <motion.img src={ss} initial={{opacity:0, x:-100}}  whileInView={{opacity:1,x:0,transition:{duration:0.5}}} viewport={{amount:0.8}} className='w-2/3 sm:w-1/2 md:w-2/3 border-2 border-[#00bcd4] rounded-full shadow-xl shadow-[#00bcd4]'></motion.img>
                </div>


                <motion.div className='flex flex-col gap-2 md:w-3/5 '>

                <motion.p className='text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl text-justify' initial={{opacity:0, y:100}} whileInView={{opacity:1,y:0}}  transition={{duration:0.5}}>
                    hello,I am Dhiraj Salgare,a passionate MERN stack developer and I have recently completed BTech degree in computer science and engineering from Kolhapur institute of technology,kolhapur 
                </motion.p>

                  <div className='flex flex-col gap-3'>

                    <div className='flex gap-4 px-4 text-[20px] text-[#00bcd4] font-bold'>
                        <p onClick={()=>setoption('Skills')} className={options=="Skills"?"opt":"mm"}>skills</p>
                        <p onClick={()=>setoption('experience')} className={options=="experience"?"opt":"mm"}>experince</p>
                        <p onClick={()=>setoption('education')} className={options=="education"?"opt":"mm"}>education</p>
                    </div>

                    <div>
                        {
                            options==='Skills' && (<motion.div className='flex px-4 gap-4'>
                                   <div className='flex flex-col' initial={{opacity:0, y:100
                }} animate={{opacity:1,y:0}} transition={{duration:0.5}}>
                                   <li>HTML</li>
                                   <li>CSS</li>
                                   <li>Javascript</li>
                                  <li>java</li>
                                   </div>

                                   <div className='flex flex-col'>
                                   <li>React Js</li>
                                   <li>express Js</li>
                                   <li>Node Js</li>
                                  <li>MongoDB</li>
                                   </div>

                                
                                </motion.div>)


                                 

                            

                        }
                        {
                              options==='experience' && (<div className='flex flex-col px-4'>
                                <li>Java developement Intern-codeclause</li>
                                <li>Frontend developement Intern-Revolution IT Solution</li>
                            
                                
                                </div>)
                        }

{
                              options==='education' && (<div className='flex flex-col px-4 gap-3'>
                                <div>
                                 <p>2017-18</p>
                                 <p>10th 92.40%</p>
                                 <p>Shri padmaraje vidyalay shirol</p>

                                </div>
                                <div>
                                 <p>2019-20</p>
                                 <p>12th 78.77%</p>
                                 <p>Shri padmaraje vidyalay shirol</p>

                                </div>

                                <div>
                                 <p>2021-24</p>
                                 <p>12th 72.3% (computer science and technology)</p>
                                 <p>Kolhapur institute of technology kolhapur</p>

                                </div>
                                
                            
                                
                                </div>)
                        }
                            
                    </div>

                  </div>

                </motion.div>

               </div>



            </motion.div>

        </div>
    )
}
export default About