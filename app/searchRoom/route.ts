import { prisma } from "../../lib/prisma";

export async function POST(req: Request) {
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
