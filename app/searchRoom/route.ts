import { prisma } from "../../lib/prisma";
import { auth } from "@clerk/nextjs";

export async function POST(req: Request) {
  const { userId } = auth();

  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const data = await req.json();

  const rooms = await prisma.room.findMany({
    where: {
      name: {
        contains: data.searchParam,
        mode: "insensitive",
      },
    },
  });

  return Response.json({ rooms });
}
