


import { PrismaClient } from "@prisma/client";
import type { z } from "zod";
import type { UserSchema } from "../../interface/zod/zodValidation";

const prisma = new PrismaClient();

// export async function getPosts() {
//   return await prisma.users.findMany({
//     orderBy: {
//       id: "desc",
//     },
//   });
// }

export async function createPost(data: z.infer<typeof UserSchema>) {
  console.log("data",data);
    
  return await prisma.users.create({ data });
}
// export async function updatePost(data: z.infer<typeof updateUserSchema>) {
//   return await prisma.user.update({ data, where: { id: data.id } });
// }
// export async function deletePost(id: number) {
//   return await prisma.users.delete({
//     where: {
//       id: id,
//     },
//   });
// }

