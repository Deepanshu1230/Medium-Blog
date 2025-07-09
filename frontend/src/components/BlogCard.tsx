 
 
 interface BlogProps{
    authorname:string,
    publishdate:string,
    content:string,
    description:string,
    

}

export const BlogCard=({authorname,publishdate,content,description}:BlogProps)=>{
  return(
    <div>
        <div className="flex space-x-3">
            {/* image */}
            <div>
                 <Avatar name={authorname}/>
            </div>
            {/* name */}
            <div>{authorname}</div>
            {/* date */}
            <div>{publishdate}</div>

        </div>
        

        {/* content */}
        <div>
            <div>{content.slice(0,100) + "..."}</div>
            <div>{description}</div>

        </div>

        {/* read */}
        <div>{`${Math.ceil(content.length/100)} Minutes`}</div>
       

    </div>
  )
}


function Avatar({name} : {name : string}){
    return(
        <>
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-medium text-gray-600 dark:text-gray-300">{name.split(" ").map(word => word[0]).join("")}</span>
</div>
</>
    )
}