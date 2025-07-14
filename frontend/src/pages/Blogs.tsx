import { BlogCard } from "../components/BlogCard";
import { BlogNave } from "../components/BlogNav";
import { Skeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";
import { format } from "date-fns";


export const Blogs = () => {
  const {loading,blogs}=useBlogs();
  
 
 
  if(loading){
    return(
      <div className=" flex flex-col">
        <div className="shadow-sm bg-white  z-10">
        <BlogNave  />
      </div>
        <div className="flex flex-col items-center gap-y-4 mt-4">
          <Skeleton  />
        <Skeleton/>
        <Skeleton/>

        </div>
      
        
      </div>
    )
  }
 
 
    return (

    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="shadow-sm bg-white  z-10">
        <BlogNave  />
      </div>
      

      <div className="w-full flex flex-col items-center justify-center mt-24  md:mt-10 mx-auto">
        <p className="font-bold text-4xl md:text-5xl text-center">Stories that inspire</p>
        <p className="text-center pt-3 text-gray-500 px-6  md:text-xl">Discover thought-provoking articles and insights from passionate writers around the world</p>
      </div>

      {/* Blog Cards Container */}
      <div className="w-full max-w-2xl mx-auto px-2 sm:px-6 lg:px-8">

        { blogs.map(blog => 
          <BlogCard
          id={blog.id}
          authorname={blog.author.name  || "Anonymous"} 
          publishdate={format(new Date(blog.createdAt), "dd MMM yyyy")}
          content={blog.title}
          description={blog.content}
          
        />


        ) }
        
        

        
      </div>
    </div>
  );
};
