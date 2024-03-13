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

  await prisma.$disconnect();

  revalidatePath("/");
};

export const addPost = async (postContent: string, roomId: string) => {
  // const postContent = formData.get("postContent");

  const { userId } = auth();

  await prisma.post.create({
    data: {
      roomId,
      authorId: userId as string,
      ranking: 0,
      textContent: postContent as string,
    },
  });

  await prisma.$disconnect();

  revalidatePath(`/room/${roomId}`);
};

export const deletePost = async (roomId: string, postId: string) => {
  const { userId } = auth();

  const post = await prisma.post.findUnique({
    where: {
      roomId,
      id: postId,
    },
  });

  if (post?.authorId !== userId) return;

  await prisma.post.delete({
    where: {
      id: postId,
      roomId,
    },
    include: {
      comments: true,
    },
  });

  await prisma.$disconnect();

  revalidatePath(`/room/${roomId}`);
};

export const addComment = async (
  formData: FormData,
  postId: string,
  roomId: string
) => {
  const commentContent = formData.get("commentContent");

  const { userId } = auth();

  await prisma.comment.create({
    data: {
      authorId: userId as string,
      textContent: commentContent as string,
      ranking: 0,
      postId,
    },
  });

  await prisma.$disconnect();

  revalidatePath(`/room/${roomId}`);
};
