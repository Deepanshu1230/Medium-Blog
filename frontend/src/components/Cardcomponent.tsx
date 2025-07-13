import { Arrow } from "../icons/Arror"
import {motion} from "framer-motion"

interface Cardprop{
    icon:any,
    topic:string,
    text:string,
    


}

export const Cardcomponent = ({icon, topic, text} : Cardprop)=>{
    return (
        <motion.div 
        initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
        
        className=" border border-gray-100 space-y-4 flex flex-col items-start px-[32px] py-[32px] rounded-3xl hover:border-gray-300 hover:shadow-lg transition-all duration-300  h-full">
            

            <div >

                <div className="bg-gray-100 p-3 rounded-2xl text-gray-700">
                {/* icon */}
            {icon}


            </div>

            </div>
            
            <div className="font-semibold text-xl leading-7">
                {/* title */}
                {text}
            </div>

            <div className="text-gray-600 leading-7">
                {/* text */}
                {topic}
            </div>

            <div className="flex items-center gap-x-3">
                {/* learn more */}
                Learn more <span><Arrow/></span>
                
            </div>

        </motion.div>
    )
}