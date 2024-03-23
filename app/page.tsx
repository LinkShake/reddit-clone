import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs";
import { HomePageClientWrapper } from "./components/HomePageClientWrapper";
import { RoomsClient } from "./components/RoomsClient";
import { HomeClient } from "./components/Home";

export default async function Home() {
  const { userId } = auth();

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

  return (
    <main>
      <HomeClient {...{ rooms }} />
    </main>
  );
}
