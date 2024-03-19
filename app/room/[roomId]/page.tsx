import { AddPostForm } from "@/app/components/AddPostForm";
import { JoinRoomBtn } from "@/app/components/JoinRoomBtn";
import { Post } from "@/app/components/Post";
import { RoomClient } from "@/app/components/RoomClient";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs";

export default async function RoomPage({
  params,
}: {
  params: { roomId: string };
}) {
  const { userId } = auth();

  const { roomId } = params;
  const room = await prisma.room.findUnique({
    where: {
      id: roomId,
    },
    include: {
      posts: {
        include: {
          comments: true,
        },
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });

  return (
    <RoomClient
      {...{ room, userId: userId as string, roomId: roomId as string }}
    />
  );
}
