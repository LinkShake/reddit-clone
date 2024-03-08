import { prisma } from "../../../lib/prisma";

export async function POST(
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
        create: {
          author: data.author,
          ranking: 0,
          textContent: data.textContent,
        },
      },
    },
  });

  return Response.json({ updatedRoom });
}
