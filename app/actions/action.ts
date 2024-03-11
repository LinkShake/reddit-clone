"use server";

import { auth } from "@clerk/nextjs";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createRoom = async (formData: FormData) => {
  const roomName = formData.get("roomName");
  const roomDescription = formData.get("roomDescription");

  const { userId } = auth();

  await prisma.room.create({
    data: {
      creatorId: userId as string,
      name: roomName as string,
      description: roomDescription as string,
      membersId: [userId as string],
      numberOfMembers: 1,
    },
  });

  revalidatePath("/");
};

export const addPost = async (formData: FormData, roomId: string) => {
  const postContent = formData.get("postContent");

  const { userId } = auth();

  await prisma.post.create({
    data: {
      roomId,
      authorId: userId as string,
      ranking: 0,
      textContent: postContent as string,
    },
  });

  revalidatePath(`/room/${roomId}`);
};
