import { useState } from "react"
import type { Blog } from "../hooks"
import { PostIcon } from "../icons/date"
import { Stars } from "../icons/star"
import { Timepost } from "../icons/time"
import { Avatar } from "./BlogCard"
import { BlogNave } from "./BlogNav"
import { format } from "date-fns";
import { BACKEND_URL } from "../config/config"
import axios from "axios"
import { useParams } from "react-router-dom"


export const FullBlog=({ blog } : {blog : Blog})=>{
   const [summary, setsummary] = useState(blog.summary || "");
const [tags, setTags] = useState<string[]>(blog.tags || []);
const [aigenrated, setaigenerated] = useState(Boolean(blog.summary));
    const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
    

    const handleAiGenerate = async () =>{

                if (summary || tags.length > 0) {
    
    return;
  }

        try{

     
             setLoading(true); // ← you missed this
             setError(null);

            const {data}=await axios.post(`${BACKEND_URL}/api/v1/generate`,{
            id:blog.id,
            content:blog.content
        })

        setsummary(data.summary);
        setTags(data.tag);
        setaigenerated(true);

        }
       catch (err: any) {
      setError(err.response?.data?.message ?? "Something went wrong.");
    } finally {
      setLoading(false);
    }
        
    }
    return (
        <div>

            {/* navbar */}
            <div>
            <BlogNave/>
        </div>

        <div className="w-full grid grid-cols-3 md:grid-cols-12 px-5  md:px-16 pt-10">
            {/* left section */}
            <div className=" col-span-8">

                {/* tags section */}

                <div>
                 
                </div>

                {/* title */}
                <div className="text-4xl font-bold pt-10 md:pt-2 md:font-5xl">{blog.title}</div>

                {/* icons */}
                <div className=" flex pt-5 gap-x-2 md:gap-x-5 ">
                    <div className="flex gap-x-1 md:gap-x-3  text-slate-600"><span><PostIcon/></span>Post on {format(new Date(blog.createdAt), "dd MMM yyyy")}</div>
                    <div className="flex gap-x-3 text-slate-600"><span><Timepost/></span>{Math.ceil((blog.content.length)/100)} min read</div>
                </div>

                {/* 
                <Button
                  onClick={handleAiGenerate}
                  disabled={isGeneratingSummary}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 flex items-center space-x-2 shadow-sm"
                >
                  <Sparkles className={`w-4 h-4 ${isGeneratingSummary ? "animate-spin" : ""}`} />
                  <span>{isGeneratingSummary ? "Generating Summary..." : "Generate AI Summary"}</span>
                </Button> */}

                
                    {/* ai button */}
                    <button
                      onClick={handleAiGenerate}
                      disabled={loading}
                      className={`bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 mt-5 flex items-center space-x-2 shadow-sm transition-opacity duration-200 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                    <Stars className={` ${loading ? "animate-spin" : ""}`} />
                    <span>{loading ? "Generating Summary..." : "Generate AI Summary"}</span>
                    </button>

                 
          {/* Error display */}
          {error && <p className="text-red-500 mt-2">{error}</p>}

                {/* ai summary */}
            {aigenrated &&
                
                <div className="flex flex-col mt-10 bg-blue-50 rounded-md p-[24px] border border-blue-100 ">
                    <div className="flex text-blue-900 rounded-lg font-semibold leading-7 gap-x-3">
                       <span className="text-blue-600"><Stars className={`w-4 h-4 ${loading ? "animate-spin" : ""}`}/></span> AI Summary
                    </div>
                    <div className="text-blue-800 pt-4 leading-7">
                        {summary}
                    </div>
                    </div>

            
            }
                


                {/* description */}
                <div className="leading-7 pt-5 text-slate-800 text-lg">{blog.content}</div>

            </div>


            {/* right section */}

            <div className="col-span-4">
                             
                             {/* card */}
                             <div className="flex flex-col items-center justify-center border p-[24px] leading-7 gap-y-3 rounded-lg md:ml-7 mt-6 md:mt-2 ">
                                <div className=""><Avatar name="Anonymous"/></div>
                                <div className="font-semibold text-xl">Author</div>
                                <div className="text-lg">{blog.author.name || "Anonymous"}</div>
                                <div className="text-sm"> helllo ji kasie ho saare ke sare</div>

                                <div className="w-full  text-center py-2 text-green-600 border border-green-600 rounded-full bg-transparent"> follow</div>
                             
                            
                             </div>

                           {/* recommendend Topic */}
                             <div className="flex flex-col items-center justify-center border p-[24px] leading-7 gap-y-3 rounded-lg  md:ml-7 mt-8 ">
                                <div className="text-lg font-semibold text-left ">
                                    Recommended Topics

                                </div>

                                
                                    {/* tags */}

                                    {
                                        blog.tags?.slice(0,4).map((tag) => (
                                            
                                            <div >
                                              <span className="border  font-semibold bg-gray-100 text-gray-700 rounded-full px-[12px] py-[2px]">{tag}</span>
                                              </div>
                                        ) )
                                    }
                                    
                                
                             </div>
                             

                             
            
            
            </div> 
        
        
        
        </div>
        </div>
        
    )
}