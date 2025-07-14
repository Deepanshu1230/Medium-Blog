import { Link } from "react-router-dom"



 
 
 interface BlogProps{
    id:string,
    authorname:string,
    publishdate:string,
    content:string,
    description:string,
    
    

}

export const BlogCard=({authorname,publishdate,content,description,id}:BlogProps)=>{
    return(
        <Link to={`/blog/${id}`}>
    <>  
    <div className="w-full max-w-md md:max-w-2xl px-4  mx-auto  md:py-2 mt-10">

        <div  className="border p-7 rounded-xl shadow-lg shadow-slate-200 hover:shadow-xl hover:shadow-slate-300 transition-all duration-75">
        <div className="flex space-x-3 items-center">
            {/* image */}
            <div>
                 <Avatar name={authorname} />
            </div>


            <div>

                {/* name */}
            <div>{authorname}</div>
            {/* date */}
            <div>{publishdate}</div>

            </div>
            

        </div>
        

        {/* content */}
        <div className="flex flex-col pt-4">
            <div className="text-xl md:text-xl font-bold">{content}</div>
            <div className="text-sm pt-3">{description.slice(0,100) + "..."}</div>

        </div>

        {/* read */}
        <div className="pt-6  pb-2">{`${Math.ceil(content.length/100)} Minute read`}</div>
       

    </div>

    </div>

    </>

    </Link>

    
  )
}


export function Avatar({name} : {name? : string}){
    const initials = name
    ? name.split(" ").map(word => word[0]).join("").toUpperCase()
    : "U"; 
    return(
        <>
        <div className={`relative inline-flex items-center justify-center w-10 h-10  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
    <span className="font-medium text-gray-600 dark:text-gray-300">{initials}</span>
</div>
</>
    )
}