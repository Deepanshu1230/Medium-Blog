import { useParams } from "react-router-dom";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks";
import { NewLoader } from "../components/Loader";
import { BlogNave } from "../components/BlogNav";





export const Blog=()=>{
    const {id} =useParams();
    const {loading,blog}=useBlog({
        id: id || ""
    });


    if(loading || !blog ){
        return ( <div>
            <div><BlogNave /></div>
           <div>
            <NewLoader/>
            </div> 
        </div>

        )
    }
    return (
        <>

         <div >
           <FullBlog blog={blog}/>
        </div>
        </>
    )
}