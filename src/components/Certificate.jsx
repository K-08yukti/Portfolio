import { CERTIFICATES } from "../constants";
import {motion} from "framer-motion";
const Certificate = () =>{
    return(
        <div className="border-b border-neutral-900 pt-20 pb-28 ">
            <motion.h1
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:0.5}}
            className="my-18 text-center text-4xl pb-20">Certificates</motion.h1>
                <div>
                    {CERTIFICATES.map((certificate,index) => (
                        <div key={index} className="mb-8 flex flexwrap lg:justify-center ml-64">
                            <motion.div
                            whileInView={{opacity:1,x:0}}
                            initial={{opacity:0,x:-100}}
                            transition={{duration:1}}
                             className="w-full lg:w-1/4">
                                <img src={certificate.image} width={150} height={150} alt={certificate.title} className="mb-6 rounded"/>
                            </motion.div>
                            <motion.div
                            whileInView={{opacity:1,x:0}}
                            initial={{opacity:0,x:100}}
                            transition={{duration:1}}
                             className="w-full max-w-xl lg:w-3/4">
                                <h6 className="mb-2 font-semibold">{certificate.title}</h6>
                                <h6 className="mb-2 font-semibold">{certificate.platform}</h6>
                                <h6 className="mb-2 font-semibold">{certificate.date}</h6>
                            </motion.div>
                        </div>
                    ))}
                </div>
        </div>
    );
};
export default Certificate;