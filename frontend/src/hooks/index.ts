import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config/config";




export interface Blog {
    "id":string
    "content":string,
    "title":string,
    "createdAt":string,
    "summary":string,
    "tags":[]
    "author":{
        "name":string
    }

}
export interface Blogprop {
    "id":string
    "content":string,
    "title":string,
    "createdAt":string,
    "author":{
        "name":string
    }

}

export const useBlog= ({id } : {id : string}) =>{
    const [loading,setloading]=useState(true);
    const [blog,setBlog]=useState<Blog>();

    async function Blogss (){

        try{
            
            

            const response=await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
        headers:{
            Authorization:localStorage.getItem("token"),
        }

    }
    );

    setBlog(response.data.blog);
    setloading(false);

        }
        catch(err){
            if (axios.isAxiosError(err)) {
    console.error("Error status:", err.response?.status); // should show 500
    console.error("Server response body:", err.response?.data); // MOST important
  } else {
    console.error("Unexpected error:", err);
  }

        }
    
}

    useEffect(()=>{
        Blogss()

    },[id]);


    return {
        loading,
        blog

    }

}

export const useBlogs=()=>{
    const [loading,setloading]=useState(true);
    const [blogs,setBlogs]=useState<Blogprop[]>([]);

    async function Blogss (){

        try{
            
            

            const response=await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
        headers:{
            Authorization:localStorage.getItem("token"),
        }

    }
    );

    setBlogs(response.data.blogs);
    setloading(false);

        }
        catch(err){
            if (axios.isAxiosError(err)) {
    console.error("Error status:", err.response?.status); // should show 500
    console.error("Server response body:", err.response?.data); // MOST important
  } else {
    console.error("Unexpected error:", err);
  }

        }
    
}

    useEffect(()=>{
        Blogss()

    },[]);


    return {
        loading,
        blogs

    }
}

