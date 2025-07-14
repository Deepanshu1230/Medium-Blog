import type { SignupInput } from "@lumberjack02/medium-common";
import axios from "axios";
import { useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config/config";
import { toast } from 'react-toastify';



export const Auth=({type} : {type: "signup" | "signin"})=>{
    const navigate=useNavigate();
     

    const [postInputs,setpostInput]=useState<SignupInput>({
        name:"",
        email:"",
        password:""
})

   async function sendRequest(){

    try{


      const response=await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signin" ? "signin" : "signup" }`, postInputs);
      
      const jwt=response.data.jwt;
      const user=response.data.user;
      

      localStorage.setItem("token",jwt);
      localStorage.setItem("user",JSON.stringify(user));

      if(response){
        toast.success(`${type  === "signin" ? "Signin" : "Signup"} Successfull`)
      }

      navigate("/blogs");




    }
    catch(err){
        toast.error(`Enter Valid Credentials`)

    }
      
   }


    return (
        <>

        
      
             {/* Login page */}
            <div className="h-screen flex flex-col justify-center items-center">
                 
               <div className="border-2 border-gray-300 rounded-xl p-7 md:border-none">
                               {/* Heading */}
                <div className="text-center text-3xl font-bold px-10">
                    Create an Account
                    <p className="text-base text-gray-600 font-medium">
                        { type == "signin" ? "Don't have an Account"  :  "Already have an account?"}  
                        <Link to={type === "signin"  ?   "/signup" : "/signin"}>
                        <span className="underline">{type == "signin" ? " Sign up" : " Sign in"}
                            </span></Link></p>
                </div>

                {/* form section */}
                <div>
                   { type === "signup" ?  (<LabelledInput  label="Username" placeholder="Enter Your Name" onChange={(e)=>{
                      setpostInput(c => ({
                        ...c,
                        name: e.target.value
                      }))
                   }

                   }/>)   : (null) }

                   <LabelledInput  label="Email" placeholder="test@gmail.com" onChange={(e)=>{
                      setpostInput(c => ({
                        ...c,
                        email: e.target.value
                      }))
                   }

                   

                   }/>



                   <LabelledInput type={"password"}  label="Password" placeholder="Enter Your Password" onChange={(e)=>{
                      setpostInput(c => ({
                        ...c,
                        password: e.target.value
                      }))
                   }

                   }/>
                </div>
                

                <div>
                    <button onClick={sendRequest} type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 mt-5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign up" : "Sign in"}</button>
                </div>





               </div>

           
        

                 </div>
                
        </>
    )
}

interface LabelledInputType{
    label:string,
    placeholder:string,
    onChange:(e:ChangeEvent<HTMLInputElement>)=> void,
    type?:string
}
function LabelledInput( {  label,placeholder,type,onChange }:LabelledInputType){
    return (<div>
            <label className="block pt-4 pb-2 text-sm font-semibold text-gray-900 dark:text-black">{label}</label>
            <input onChange={onChange} type={ type || "text"} id="first_name" 
            className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm focus-within:outline-2 focus-within:outline-blue-400 rounded-lg block w-full p-2.5 " placeholder={placeholder} required />
        </div>
        
    )
    
};