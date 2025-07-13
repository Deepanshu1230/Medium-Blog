import { Link } from "react-router-dom"
import { Starss } from "../icons/Starrs"
import { motion } from "motion/react"


export const Footer = () =>{
    return (
        <div>
            
            {/* text */}

            <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            
            className="flex flex-col items-center justify-center pt-16 leading-7">
                <div className="text-5xl font-bold text-center pt-11">Ready to transform <br></br> your writing?</div>
                <div className="text-center text-xl text-gray-600 pt-7">Join thousands of writers who've discovered the perfect balance of <br></br> creativity and intelligence.</div>
            </motion.div>


            {/* input */}
            <div className="flex flex-col md:flex-row pt-12 items-center justify-center gap-x-5">
                <input className="bg-white rounded-full text-base px-[24px] py-[12px] border border-gray-300" type="text" placeholder="Enter your email" />
                <div className="text-white font-medium bg-black px-[24px] mt-4 md:mt-1 py-2 rounded-full shadow-sm">Get Started</div>
            </div>



            {/* starts & content */}
            <motion.div 
            initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
                  viewport={{ once: true }}
            className="flex items-center justify-center pt-6 gap-x-2">
                <div className="text-yellow-500"><Starss/></div>
                <div className="text-yellow-500"><Starss/></div>
                <div className="text-yellow-500"><Starss/></div>
                <div className="text-yellow-500"><Starss/></div>
                <div className="text-yellow-500"><Starss/></div>

                
            </motion.div>

            <motion.div 
            initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay:0.05, ease: "easeOut" }}
                  viewport={{ once: true }}
            className="w-full">
                <p className="text-center  text-gray-500 text-sm flex  items-center justify-center mx-auto  pt-4">Trusted by 2,500+ content creator</p>
            </motion.div>


               {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-12 mb-12"
          >
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-black rounded-2xl flex items-center justify-center">
                  
                </div>
                <span className="text-xl font-semibold">SassyBlog</span>
              </div>
              <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
                Intelligent writing tools that help you create better content with less effort.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Product</h4>
              <div className="space-y-3">
                <Link to={"/"} className="block text-gray-600 hover:text-black transition-colors text-sm">
                  Features
                </Link>
                <Link to={"/"}  className="block text-gray-600 hover:text-black transition-colors text-sm">
                  Pricing
                </Link>
                <Link to={"/"} className="block text-gray-600 hover:text-black transition-colors text-sm">
                  Changelog
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Company</h4>
              <div className="space-y-3">
                <Link to={"/"} className="block text-gray-600 hover:text-black transition-colors text-sm">
                  About
                </Link>
                <Link to={"/"} className="block text-gray-600 hover:text-black transition-colors text-sm">
                  Blog
                </Link>
                <Link to={"/signup"} className="block text-gray-600 hover:text-black transition-colors text-sm">
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>

          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm">© 2024 SassyBlog. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to={"/"} className="text-gray-500 hover:text-black transition-colors text-sm">
                Privacy
              </Link>
              <Link to={"/"} className="text-gray-500 hover:text-black transition-colors text-sm">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
            
        </div>
    )
}