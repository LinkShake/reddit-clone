import { prisma } from "../../../lib/prisma";
import { auth } from "@clerk/nextjs";

export async function PATCH(
  req: Request,
  { params }: { params: { roomId: string } }
) {
  const { userId } = auth();

  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const data = await req.json();
  const { roomId } = params;

  const room = await prisma.room.findUnique({
    where: {
      id: roomId,
    },
  });

  if (!room) return Response.json({ msg: "No room was found " });

  if (data.action === "upvote") {
    const updatedRoom = await prisma.room.update({
      where: {
        id: roomId,
      },
      data: {
        posts: {
          update: {
            where: {
              id: data.postId,
            },
            data: {
              ranking: {
                increment: 1,
              },
            },
          },
        },
      },
    });
    return Response.json({ updatedRoom });
  } else if (data.action === "downvote") {
    const updatedRoom = await prisma.room.update({
      where: {
        id: roomId,
      },
      data: {
        posts: {
          update: {
            where: {
              id: data.postId,
            },
            data: {
              ranking: {
                decrement: 1,
              },
            },
          },
        },
      },
    });
    return Response.json({ updatedRoom });
  }
}
