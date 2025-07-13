import { Arrow } from "../icons/Arror"
import { Stars } from "../icons/star"
import coffee from  "../icons/icons8-coffee-24.png";

import magic from "../images/magicstick.png"
import robot from "../images/robot.png"
import notebook from "../images/image-C11jyRrHOs8lCOeNpdk3Qr3hLD3Oxt.png"

import {motion} from "framer-motion";
import { Link } from "react-router-dom";

export const Herosection =()=>{
    return(
        <div className="w-full relative z-0 flex flex-col items-center mt-28  ">


            {/* AI tag */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items center font-medium text-sm leading-7 text-gray-700 bg-gray-100 px-4 py-1 rounded-full gap-x-2 -z-1"><span><Stars/></span>UNFILTERED THOUGHTS</motion.div>

            {/* text */}
            
                <img src={robot} className="absolute right-2 -z-10 md:bottom-72 md:right-72 md:rotate-12 animate-leftright" width={100} alt="" />
                <img src={magic} className="absolute left-3 bottom-72 md:bottom-72 md:left-72 md:rotate-12 animate-updown" width={100} alt="" />
                
                <img src={notebook} className="absolute hidden md:flex md:bottom-44 md:left-96 -z-10 animate-updown" width={100} alt="" />
                

           
            <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className=" pt-7 text-5xl md:text-7xl font-bold text-center">Life's too short for <br></br>
            <span className="text-gray-500">boring content</span> </motion.div>


            {/* para */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-gray-600 text-center mt-4 text-xl">Create compelling content with AI-powered summaries and smart <br></br> tagging. Focus on your ideas while we handle the details.</motion.div>


            {/* button */}
            <motion.div 
             initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col md:flex-row gap-y-5 md:gap-x-5 mt-7">

                <Link to={"/signin"}>

                <motion.div
                whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
                className="flex gap-x-2 items-center bg-black rounded-full text-white px-7 py-2 font-medium">Start Writing <span><Arrow/></span></motion.div>

                </Link>

                
                <Link to={"/commingsoon"}>

                <motion.div
                whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
                className="flex gap-x-2 items-center rounded-full text-black font-medium border border-gray-300 px-7 py-2 "><span><img src={coffee} alt="" /></span>Watch Demo</motion.div>

                </Link>
                

            </motion.div>



            {/* small text */}
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-500 pt-11">Free to start • No credit card required</motion.div>
        
             
        </div>
    )
}