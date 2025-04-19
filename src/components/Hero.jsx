import profile from "../assets/yukti3copy.jpg";
import {motion} from "framer-motion";
const container= (delay)=>({
    hidden: {x:-100,opacity:0},
    visible: {
        x:0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    },
});

const Hero = () =>{
    return (
        <div className="border-b border-neutral-900 py-4 lg:mb-[-14rem] lg:mt-28">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-4 text-6xl font-thin tracking-tight lg:mt-10 lg:text-8xl">
                        Yukti Chauhan</motion.h1>
                    <motion.span
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                         Fresher | Software Developer & Data Science Explorer
                    </motion.span >
                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl pt-6 font-normal tracking-tight">
                    Passionate about leveraging technology to solve real-world problems. I have experience working with software development, machine learning, and data-driven solutions. Skilled in React, Node.js, Python, SQL. Excited to explore opportunities in software engineering, AI, and data science.                    
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pt-8 min-h-screen">
                <div className="flex justify-center h-1/2">
                    <motion.img
                    initial={{x:100,opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:1,delay:1.2}} src={profile} alt="Yukti"/>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Hero