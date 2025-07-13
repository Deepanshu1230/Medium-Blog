import {motion} from "framer-motion";
import { Link } from "react-router-dom";


export const Mainav= ()=>{
    return (
        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        
        className="w-full fixed top-0 inset-x-0 z-50 border border-gray-100 flex items-center justify-between px-[24px] py-[20px] bg-white/30 backdrop-blur-sm shadow-sm">

            <motion.div className="flex"
            whileHover={{scale: 1.02}}
            >
                <img src="" alt="" />
                <div className="font-semibold text-2xl ">SassBlog</div>

            </motion.div>

            <div className="hidden  md:flex leading-7 text-gray-600 gap-x-6">
                <div className=" hover:text-black transition-colors duration-200">Features</div>
                <div className=" hover:text-black transition-colors duration-200">Pricing</div>
                <div className=" hover:text-black transition-colors duration-200">Blog</div>

            </div>

            <div className="flex  items-center gap-x-4">
                

                <Link to={"/signin"}>

                <div className="text-gray-600">Sign In</div>
                </Link>

                
                
                <Link to={"/signup"}>

                <motion.div 
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="text-white font-medium bg-black px-[24px] py-2 rounded-full shadow-sm hover:bg-gray-900 ">
                    Get Started</motion.div>

                </Link>
                
            </div>

        </motion.div>
    )
}