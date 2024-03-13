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
      posts: {
        include: {
          comments: true,
        },
      },
    },
  });

  return (
    <div>
      <div className="room-header">
        <h1>{room?.name}</h1>
        <h2>{room?.description}</h2>
      </div>
      <br />
      <AddPostForm roomId={roomId} />
      <br />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {room?.posts?.map((post) => {
          return <Post key={post.id} {...{ ...post, postId: post.id }} />;
        })}
      </div>
    </div>
  );
}
