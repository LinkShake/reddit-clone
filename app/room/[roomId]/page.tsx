import { AddPostForm } from "@/app/components/AddPostForm";
import { Post } from "@/app/components/Post";
import { prisma } from "@/lib/prisma";

export default async function RoomPage({
  params,
}: {
  params: { roomId: string };
}) {
  const { roomId } = params;
  const room = await prisma.room.findUnique({
    where: {
      id: roomId,
    },
    include: {
      posts: true,
    },
  });

  return (
    <>
      <h1>{room?.name}</h1>
      <h2>{room?.description}</h2>
      <AddPostForm roomId={roomId} />
      {room?.posts?.map((post) => {
        return <Post key={post.id} {...{ ...post, postId: post.id }} />;
      })}
    </>
  );
}
