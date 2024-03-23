import { prisma } from "../../lib/prisma";
import { auth } from "@clerk/nextjs";

export async function GET(req: Request) {
  const { userId } = auth();

  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const rooms = await prisma.room.findMany({
    where: {
      OR: [
        {
          creatorId: userId as string,
        },
        {
          membersId: {
            has: userId,
          },
        },
      ],
    },
  });

  return Response.json({ rooms });
}
