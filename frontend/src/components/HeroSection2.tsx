import { Downarrow } from "../icons/Downarrow"
import {motion} from "framer-motion"

export const Herosection2=()=>{
    return (
        <div className="w-[100%]">

            <div className="flex flex-col items-center ">
            <motion.div  
            animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="text-gray-400  animate-updown pt-12 "><Downarrow/></motion.div>

            {/* post section */}
            <motion.div 
            initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
            className="w-full flex  md:flex-row items-center justify-around mt-6 border border-gray-100 px-[24px] py-[60px] leading-7">

                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay:0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                
                className="flex flex-col items-center justify-center">
                    <div className="text-4xl font-bold">10K+</div>
                    <div className="font-medium text-sm text-gray-600 leading-7">Posts Enhanced</div>
                </motion.div>

                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay:0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="hidden md:flex flex-col items-center justify-center">
                    <div className="text-4xl font-bold">5K+</div>
                    <div className="font-medium text-sm text-gray-600 leading-7">Tags Generated</div>
                </motion.div>

                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay:0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center">
                    <div className="text-4xl font-bold">1K+</div>
                    <div className="font-medium text-sm text-gray-600 leading-7">Writers</div>
                </motion.div>

                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay:0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center">
                    <div className="text-4xl font-bold">4.9</div>
                    <div className="font-medium text-sm text-gray-600 leading-7">User Rating</div>
                </ motion.div>
            </motion.div>


            {/* text-section */}

            <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className=" flex flex-col items-center  mx-auto mt-12">
                <div className="text-5xl font-bold mt-[24px] text-center">Powerful features, <br></br> <span className="text-gray-500 font-bold">beautifully simple</span></div>

                <div className="text-xl leading-8 text-center text-gray-600 pt-7" >Every tool you need to create, enhance, and organize your content with <br></br> intelligence and style.</div>
            </motion.div>
        
        
        
        </div>

        </div>
        
    )
}