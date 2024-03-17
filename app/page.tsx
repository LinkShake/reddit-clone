import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs";
import { HomePageClientWrapper } from "./components/HomePageClientWrapper";
import Link from "next/link";
import { SearchRoomBar } from "./components/SearchRoomBar";
import { RoomsClient } from "./components/RoomsClient";

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
      <RoomsClient {...{ rooms }} />
      <HomePageClientWrapper />
    </main>
  );
}
