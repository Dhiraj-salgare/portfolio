
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import {motion} from 'framer-motion'

function Contact(){
    return (
        <div className="container mx-auto  mt-10" id="contact">

            <h1 className="text-3xl text-center text-white font-bold md:text-4xl">Contact</h1>
            <div className="flex gap-4 flex-wrap justify-center mt-5 px-2 py-2">

                <motion.div className="w-2/3 md:w-2/5 lg:w-1/5 " initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}}>
                     <div className="flex flex-col text-white">
                        <p>contract Me</p>
                        <div className="flex gap-2 items-center">
                            <MdEmail></MdEmail>
                            <p>dhirajsalgare7057@gmail.com</p>
                        </div>
                        <div className="flex gap-2 items-center">
                           <IoCall></IoCall>
                            <p>9822384717</p>
                        </div>

                     </div>
                </motion.div>
                
                <motion.div className="w-2/3 md:w-3/5  lg:w-3/5  flex flex-col gap-3 justify-center items-center w-full px-4" initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}}>

                    <div className="bg-[#262626] w-full px-2 py-2 text-white">
                      <input placeholder="your name" className="bg-transparent border-none outline-none"></input>
                      </div>

                      <div className="bg-[#262626] w-full px-2 py-2 text-white">
                      <input placeholder="your email" className="bg-transparent border-none outline-none"></input>
                      </div>

                      <div className="bg-[#262626] w-full px-2 py-2 h-[300px] text-white">
                      <input placeholder="your message" className="bg-transparent border-none outline-none"></input>
                      </div>


                      <button className="bg-[#00bcd4] px-6 py-3 rounded-full border-none outline-none w-full text-white font-bold">Submit</button>



                </motion.div>
               
                 
            </div>

        </div>
    )
}

export default Contact