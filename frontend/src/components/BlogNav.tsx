import { Link } from "react-router-dom"
import { Star } from "../images/Star"
import { Avatar } from "./BlogCard"





export const BlogNave=()=>{
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    return (
        <div>
            <div className="w-full top-0 fixed backdrop-blur-lg border border-b-gray-200 pb-3">
            <div className="flex items-center justify-between">
                <Link to={"/blogs"}>
                <div className="text-3xl pl-4 font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                    TalkTales
                </div>

                </Link>
                
                <div className="flex flex-row items-center space-x-5 pr-4 pt-2">
                     
                     
                    <div className="flex justify-center">
                        <Link to={"/publish"}>
                     <button className="text-white mt-0 bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">New</button>
                     </Link>
                        
                    
                    <div><Avatar name={user.name}/></div>

                    </div>
                    

                </div>
            </div>
        </div>
          
          <div className="h-[40px] bg-slate-100 mt-16 hidden md:flex items-center justify-center ">

            <div className="flex gap-x-4"><span><Star/></span>Discover tech stories, insights, and ideas — all in one place.</div>
 
          </div>
        </div>
        
    )
}