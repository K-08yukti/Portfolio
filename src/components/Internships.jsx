import { INTERNSHIPS } from "../constants";
import { motion } from "framer-motion";

const Internships = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:text-center pt-16">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-18 text-center text-4xl pb-20"
            >
                Internship
            </motion.h1>
            <div>
                {INTERNSHIPS.map((internship, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        {/* Conditionally render image if available */}
                        {internship.image && (
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1 }}
                                className="w-full lg:w-1/4"
                            >
                                {/* <img src={internship.image} width={150} height={150} alt={internship.company} className="mb-6 rounded" /> */}
                            </motion.div>
                        )}

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4"
                        >
                            <h6 className="mb-2 font-semibold">{internship.title}</h6>
                            <p className="mb-2 text-neutral-400">{internship.company}</p>
                            <p className="mb-2 text-neutral-400">{internship.duration}</p>
                            <p className="mb-4 text-neutral-400">{internship.description}</p>

                            {/* Conditionally render technologies if available */}
                            {internship.technologies && internship.technologies.length > 0 && (
                                <div>
                                    {internship.technologies.map((tech, index) => (
                                        <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-gray-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Internships;
