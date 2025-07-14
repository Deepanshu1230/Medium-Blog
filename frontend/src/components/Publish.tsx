import { useState } from "react"
import { Plus, MoreHorizontal, Bell, Sparkles, Eye, Clock, Heart, Feather } from "lucide-react"
import axios from "axios";
import { BACKEND_URL } from "../config/config";
import { Link, Navigate, useNavigate } from "react-router-dom";



export const Publish=()=>{
    const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate=useNavigate();
   
    async function HandlePublish () {
        try {

          const response= await axios.post(`${BACKEND_URL}/api/v1/blog`,{
          title,
          content
        },{
          headers:{
            Authorization:localStorage.getItem("token")
          }
        })

         navigate(`/blog/${response.data.id}`)


        }
        catch(e){

        }
      
    }

    return (
        <div>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-black/5 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link to={"/blogs"}>
              <div className="flex items-center space-x-4">
                
                <div className="w-10 h-10 bg-black rounded-2xl flex items-center justify-center shadow-lg">
                  <Feather className="w-5 h-5 text-white" />
                </div>
                <span className="font-black text-2xl tracking-tight text-black">Kirags</span>
              </div>
              </Link>
              
              <div className="hidden md:flex items-center space-x-4">
                {/* <div className="px-6 py-2 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                  Draft
                </div>
                <div className="flex items-center space-x-3 text-xs uppercase tracking-wider text-black/60 font-medium">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-sm"></div>
                  <span>Auto-saved</span>
                </div> */}
              </div>
            </div>

            <div className="flex items-center space-x-6">
             
              <button onClick={HandlePublish} className="bg-black hover:bg-black/90 text-white font-bold px-8 py-3 rounded-full uppercase tracking-wider text-sm transition-all duration-300 hover:shadow-xl hover:scale-105">
                Publish ✨
              </button>

              <div>d</div>
              
            </div>
          </div>
        </div>
      </header>

      {/* Main Editor */}
      <main className="max-w-5xl mx-auto px-8 py-16">
        <div className="space-y-16">
          {/* Add Content Button */}
          {/* <div className="flex items-center space-x-6">
            <button className="group flex items-center justify-center w-16 h-16 bg-white hover:bg-black border-2 border-black/10 hover:border-black rounded-3xl transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <Plus className="w-6 h-6 text-black/60 group-hover:text-white transition-colors duration-300" />
            </button>
            <div className="space-y-1">
              <div className="text-black font-semibold text-lg">Add something beautiful</div>
              <div className="text-black/50 text-sm">Images, videos, or embeds to enhance your story</div>
            </div>
          </div> */}

          {/* Title Input */}
          <div className="space-y-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Craft your masterpiece title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full text-4xl md:text-6xl font-black text-black placeholder-black/20 bg-transparent border-none outline-none resize-none leading-[0.9] tracking-tight"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              />
              {title && (
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-black to-black/30 rounded-full"></div>
              )}
            </div>
            {title && (
              <div className="flex items-center space-x-4 p-4 bg-black/5 rounded-2xl border border-black/5">
                <Sparkles className="w-5 h-5 text-black" />
                <span className="text-sm font-medium text-black/70">Excellent! Your title has real presence.</span>
              </div>
            )}
          </div>

          {/* Content Area */}
          <div className="space-y-8">
            <div className="relative">
              <textarea
                placeholder="Pour your thoughts onto the page. Let your voice shine through every word, every pause, every breath..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full min-h-[600px] text-xl text-black/90 placeholder-black/30  border-none outline-none resize-none leading-relaxed font-light p-8 rounded-3xl focus:bg-black/[0.02] transition-all duration-300"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              />
            </div>

            {content && (
              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-black/5 to-transparent rounded-2xl border border-black/5 shadow-sm">
                <div className="flex items-center space-x-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-black">
                        {content.split(" ").filter((word) => word.length > 0).length}
                      </div>
                      <div className="text-xs text-black/60 font-medium uppercase tracking-wider">Words</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-black/10 rounded-full flex items-center justify-center">
                      <Clock className="w-4 h-4 text-black" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-black">{Math.ceil(content.split(" ").length / 200)}</div>
                      <div className="text-xs text-black/60 font-medium uppercase tracking-wider">Min read</div>
                    </div>
                  </div>
                </div>
                <button
                  
                  className="text-black/60 hover:text-black hover:bg-black/10 rounded-full w-10 h-10 p-0"
                >
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Writing Inspiration */}
          {!content && (
            <div className="mt-24 p-10 bg-gradient-to-br from-black/5 to-transparent rounded-3xl border border-black/5 shadow-lg">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-black text-2xl text-black">Writing with Soul</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8 text-black/70 font-medium leading-relaxed">
                  <div className="space-y-3">
                    <div className="w-12 h-1 bg-black rounded-full"></div>
                    <p className="text-lg">Write from the heart. Authenticity resonates deeper than perfection.</p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-1 bg-black rounded-full"></div>
                    <p className="text-lg">Embrace vulnerability. Your struggles make your triumphs meaningful.</p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-1 bg-black rounded-full"></div>
                    <p className="text-lg">Paint with words. Help readers see, feel, and experience your story.</p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-1 bg-black rounded-full"></div>
                    <p className="text-lg">Trust your voice. It's the one thing no one else can replicate.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Floating Word Counter */}
      <div className="fixed bottom-8 right-8 space-y-4">
        <div className="bg-white border border-black/10 p-6 rounded-3xl shadow-2xl backdrop-blur-xl">
          <div className="text-center space-y-2">
            <div className="text-xs uppercase tracking-widest text-black/50 font-bold">Flow State</div>
            <div className="text-3xl font-black text-black">
              {content.split(" ").filter((word) => word.length > 0).length}
            </div>
            <div className="text-xs uppercase tracking-wider text-black/60 font-medium">Words crafted</div>
          </div>
        </div>
      </div>

      
    </div>


        </div>
    )
}