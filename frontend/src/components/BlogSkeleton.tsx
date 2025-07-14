

export const Skeleton =()=> {
    return (
        <div> 
            <div role="status" className="w-full max-w-md sm:max-w-lg animate-pulse ">
                 <div className="pt-8 pb-9">
                    <div className="h-2 bg-gray-200 rounded-full  max-w-[500px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>

                 </div>
                 
                <div  className="w-[100%] border p-7 rounded-xl shadow-lg shadow-slate-200 hover:shadow-xl hover:shadow-slate-300 transition-all duration-75">

                      
                        <div className="flex space-x-3 items-center">
                            {/* image */}
                            <div>
                                 <div className="w-10 h-10 bg-gray-200 rounded-full mb-4"></div>
                                 
                            </div>
                
                
                            <div className="w-[200px] md:w-[500px]">
                
                                {/* name */}
                            <div className="h-2.5 bg-gray-200 rounded-full w-8 mb-4"></div>
                            {/* date */}
                            <div>
                                {/* <div className="h-2.5 bg-gray-200 rounded-full w-8 mb-4"></div> */}
                                <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
                            </div>
                
                            </div>
                            
                
                        </div>
                        
                
                        {/* content */}
                        <div className="flex flex-col pt-4">
                            <div className="text-xl md:text-xl font-bold">
                                <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
                            </div>
                            <div className="text-sm pt-3"><div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div></div>
                
                        </div>
                
                        {/* read */}
                        <div className="pt-6  pb-2">
                            <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
                        </div>
                       
                
                    </div>
                
    {/* <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
    <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div> */}
    <span className="sr-only">Loading...</span>
</div>
        </div>
    )
}