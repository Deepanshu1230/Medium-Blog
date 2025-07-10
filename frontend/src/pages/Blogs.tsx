import { BlogCard } from "../components/BlogCard";
import { BlogNave } from "../components/BlogNav";

export const Blogs = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="shadow-sm bg-white  z-10">
        <BlogNave />
      </div>
      

      <div className="w-full flex flex-col items-center justify-center mt-24  md:mt-10 mx-auto">
        <p className="font-bold text-4xl md:text-5xl text-center">Stories that inspire</p>
        <p className="text-center pt-3 text-gray-500 px-6  md:text-xl">Discover thought-provoking articles and insights from passionate writers around the world</p>
      </div>

      {/* Blog Cards Container */}
      <div className="w-full max-w-2xl mx-auto px-2 sm:px-6 lg:px-8">
        <BlogCard
          authorname="Deepanshu Kohli"
          publishdate="July 9, 2025"
          content="There are the curle popele that are working around the desk and living in the world"
          description="We know that there are things happening around that are not clear yet, but people are moving and adapting regardless of the noise."
        />

        <BlogCard
          authorname="Deepanshu Kohli"
          publishdate="July 9, 2025"
          content="Exploring the hidden habits of high-performing individuals"
          description="From managing time to focusing energy on key goals, the habits of successful people are fascinating and worth exploring deeply."
        />

        <BlogCard
          authorname="Deepanshu Kohli"
          publishdate="July 9, 2025"
          content="Why embracing failure is a sign of growth"
          description="We often run from failure, but it’s in those moments that we grow the most. Let’s dive into how to embrace the discomfort of failing forward."
        />
      </div>
    </div>
  );
};
