import { FaNodeJs } from "react-icons/fa";
import {RiReactjsLine} from  "react-icons/ri";
import {SiExpress, SiPython} from "react-icons/si";
import {SiMysql} from "react-icons/si";
import {motion} from "framer-motion";

const iconVariants = (duration)=>({
    initial: {y:-10},
    animate:{
        y:[10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})
const Technology = () =>{
    return(
        <div className="border-b border-neutral-900 pb-28 lg:mt-[-10rem] ">
            <motion.h1
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}} 
            className="my-18 text-center text-4xl pb-16">Technologies</motion.h1>
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}} 
            className="flex flex-wrap items-center justify-center gap-4 pb-2">
                <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPython className="text-7xl text-green-500"/>
                </motion.div>
                <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className="text-7xl text-black-400"/>
                </motion.div>
                <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-700"/>
                </motion.div>
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiExpress className="text-7xl text"/>
                </motion.div>
            </motion.div>
        </div>
    );
};
export default Technology;