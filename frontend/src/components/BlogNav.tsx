import { Star } from "../images/Star"
import { Avatar } from "./BlogCard"

export const BlogNave=()=>{
    return (
        <div>
            <div className="w-full top-0 fixed backdrop-blur-lg border border-b-gray-200 pb-3">
            <div className="flex items-center justify-between">
                <div className="text-3xl pl-4 font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                    Medium
                </div>

                <div className="flex space-x-5 pr-4 items-center pt-2">
                    <div>Publish</div>
                    <div><Avatar name="Deepanshu"/></div>

                </div>
            </div>
        </div>
          
          <div className="h-[40px] bg-slate-100 mt-14 hidden md:flex items-center justify-center ">

            <div className="flex gap-x-4"><span><Star/></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, qui!</div>
 
          </div>
        </div>
        
    )
}