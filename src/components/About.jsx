// import abt from "../assets/yukti3copy.jpg";
import { motion } from "framer-motion";
const About = () => {
    return (
        <div className="border-b border-neutral-900 ">
            <h2 className="my-4 text-center text-4xl "> About
                <span className="text-neutral-500"> Me</span></h2>
            <div className="flex flex-wrap lg:text-center mb-64 ">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full  ">
                    <div >
                        <p className="my-12">
                            I am <b>22 years old</b> and from <b>Kashipur, Uttarakhand</b>.<br /> I completed my schooling at <b>St. Mary&apos;s School</b>, scoring <b>84.5%</b> in 10th grade and <b>88.5%</b> in 12th grade.<br /> Currently, I am pursuing a <b>Bachelor of Technology in Computer Science and Engineering</b> from <b>Jaypee University of Engineering and Technology (JUET), Guna, Madhya Pradesh</b>, with a <b>CGPA of 7.5</b>.<br /> I am set to graduate in <b>2025</b>.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
export default About;