import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs";

export async function POST(req: Request) {
  const { userId } = auth();

  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }
  const data = await req.json();

  const sameRoom = await prisma.room.findFirst({
    where: {
      OR: [
        {
          name: data.name,
        },
        {
          description: data.description,
        },
      ],
    },
  });

  if (sameRoom)
    return Response.json({
      msg: "Already existing room",
    });

  const newRoom = await prisma.room.create({
    data: {
      creatorId: userId,
      name: data.name,
      description: data.description,
      numberOfMembers: 1,
    },
    include: {
      posts: true,
    },
  });

  return Response.json({ ...newRoom });
}
