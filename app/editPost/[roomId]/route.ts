import { prisma } from "../../../lib/prisma";

export async function PATCH(
  req: Request,
  { params }: { params: { roomId: string } }
) {
  const data = await req.json();
  const { roomId } = params;

  const room = await prisma.room.findUnique({
    where: {
      id: roomId,
    },
  });

  if (!room) return Response.json({ msg: "No room was found " });

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
            textContent: data.newContent,
          },
        },
      },
    },
  });

  return Response.json({ updatedRoom });
}
