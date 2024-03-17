import { AddPostForm } from "@/app/components/AddPostForm";
import { JoinRoomBtn } from "@/app/components/JoinRoomBtn";
import { Post } from "@/app/components/Post";
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
    <div>
      <div className="room-header">
        <h1>{room?.name}</h1>
        <h3>{room?.description}</h3>
      </div>
      <div
        style={{
          marginTop: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <JoinRoomBtn
          creatorId={room?.creatorId as string}
          membersIdx={room?.membersId as string[]}
          roomId={room?.id as string}
          userId={userId as string}
        />
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
        {room?.posts?.length ? (
          <>
            {room?.posts?.map((post) => {
              return <Post key={post.id} {...{ ...post, postId: post.id }} />;
            })}
          </>
        ) : (
          "No posts available"
        )}
      </div>
    </div>
  );
}
