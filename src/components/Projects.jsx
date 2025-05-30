import { PROJECTS } from "../constants";
import {motion} from "framer-motion";
const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-8">
            <motion.h1
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:0.5}}
             className="my-18 text-center text-4xl pb-20">Projects</motion.h1>
            <div className="max-w-5xl mx-auto px-4">
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex felx-wrap lg:text-center mr-32">
                        <motion.div
                        whileInView={{opacity:1,x:0}}
                        initial={{opacity:0,x:-100}}
                        transition={{duration:1}}
                         className="w-full lg:w-1/4">
                            {/* <img src={project.image} width={150} height={150} alt={project.title} className="mb-6 rounded" /> */}
                        </motion.div>
                        <motion.div
                        whileInView={{opacity:1,x:0}}
                        initial={{opacity:0,x:100}}
                        transition={{duration:1}}
                         className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-bold">{project.title}</h6>
                            <p className="mb-2 text-neutral-400">{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-gray-300">
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>

    );
};
export default Projects;