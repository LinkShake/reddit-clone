import { revalidatePath } from "next/cache";
import { prisma } from "../../../lib/prisma";
import { auth } from "@clerk/nextjs";

export async function DELETE(
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

  await prisma.comment.deleteMany({
    where: {
      postId: data.postId,
    },
  });

  const updatedRoom = await prisma.room.update({
    where: {
      id: roomId,
    },
    data: {
      posts: {
        delete: {
          id: data.postId,
        },
      },
    },
  });

  revalidatePath(`/room/${roomId}`);

  return Response.json({ updatedRoom });
}
