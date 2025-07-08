import z from "zod";


export const blogcreate=z.object({
    title:z.string(),
    content:z.string(),
})


export const blogUpdate=z.object({
    title:z.string(),
    content:z.string(),
    id:z.string()
})


export const signupInput=z.object({
    email:z.string(),
    password:z.string().min(6),
    name:z.string().optional(),
})


 export const signinInput=z.object({
    email:z.string(),
    password:z.string().min(6)
 })

//this is for the frontend
export type SignupInput=z.infer<typeof signupInput>
export type SigninInput=z.infer<typeof signinInput>
export type BlogCreate=z.infer<typeof blogcreate>;
export type BlogUpdate=z.infer<typeof blogUpdate>;