import {z } from "zod";



  export const UserSchema = z.object({

    first_name: z.string(),
    last_name:z.string(),
    email: z.string(),
    password:z.string(),
  
  })
