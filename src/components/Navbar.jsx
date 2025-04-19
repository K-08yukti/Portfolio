import { SiGmail } from "react-icons/si";
import { FaGithub } from  "react-icons/fa";

const Navbar = () => {
    return(
        <nav className="mb-20 flex items-center justify-between py-10 ">
            <div className="flex flex-shrink-0 items-center">
                <div className="px-12 font-bold text-[30px] text-white">
                    Yc
                </div>
            </div>
            <div className="px-10 m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="mailto:yuktichauhan27@gmail.com" target="_blank" rel="noopener noreferrer">
                    <SiGmail />
                </a>            
                <a href="https://github.com/K-08yukti" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
        </nav>
    );
};
export default Navbar;