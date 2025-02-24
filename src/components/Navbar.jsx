
import { useState } from "react";
import { IoMenuSharp,IoClose } from "react-icons/io5";
import {motion} from 'framer-motion'

function Navbar(){

    const[menu,setmenu]=useState(false)

    const items=[
        {id:1,text:"About",link:'#about'},
       
        {id:2,text:"Work",link:'#work'},
        {id:3,text:"contact",link:'#contact'}
    ]



    const variants={
        open:{clipPath:"circle(1200px at 43px 43px)"},
        transition:{
            type:"spring"
        },
        closed:{
            clipPath:"circle(25px at 43px 43px)",
            transition:{
                type:"spring",
                duration:1
            }
        }
    }
    return(
        <div>
            <motion.div className="container mx-auto md:flex hidden justify-between items-center py-6" initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} transition={{duration:0.5}}>
                <div className="text-xl lg:text-2xl font-bold"> 
                    <h1 className="text-[#00bcd4]">Dhiraj</h1>
                </div>

                <div>
                    <ul className="hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base text-white">
                       {
                          items.map((item)=>(
                            <a href={item.link}><li key={item.id} className="hover:text-[#00bcd4]">{item.text}</li></a>
                          ))
                       }
                    </ul>
                </div>

                <a className="md:text-base lg:text-lg bg-[#00bcd4] hover:bg-cyan-600 text-white px-4 py-2 rounded-full duration-2" href="">Dowload Resume</a>
            </motion.div>

            <div className="flex md:hidden justify-between ">
                <motion.div  animate={menu?"open":"closed"}>
                    <motion.div className="bg-white w-2/3 h-screen text-black  fixed z-10" onClick={()=>setmenu((prev)=>!prev)} variants={variants}>
                        <div className="px-7 py-6">
                           {
                            menu?(<IoClose size={30}></IoClose>):(<IoMenuSharp size={30}></IoMenuSharp>)
                           }
                        </div>


                        {
                            menu && (<div className="flex flex-col justify-center items-center">
                                <ul className="space-y-6 text-black text-lg">

                                {
                                 items.map((item)=>(
                                  <a href={item.link}><li key={item.id}  className="hover:text-purple-500 duration-200 cursor-pointer">{item.text}</li></a>
                                    ))
                               }

                                </ul>

                                <a className="text-lg bg-[#00bcd4] hover:bg-purple-400 text-white px-4 py-2 mt-6 rounded-full" href="src\assets\Dhiraj_Salgare_9822384717.pdf" download>Download Resume</a>

                            </div>)
                        }


                    </motion.div>
                </motion.div>

                <motion.div  initial={{opacity:0,x:100,y:-100}} animate={{opacity:1,x:0,y:0}} transition={{duration:0.5}} className="text-xl font-bold flex items-center py-6 px-4">
                    <h1 className="text-white">Dhiraj</h1>
                </motion.div>
            </div>


        </div>
    )
}


export default Navbar