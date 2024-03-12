import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs";
import { HomePageClientWrapper } from "./components/HomePageClientWrapper";
import Link from "next/link";

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
      {rooms?.map((room) => {
        return (
          <div key={room.id}>
            <Link
              href={`/room/${room.id}`}
              style={{
                color: "black",
              }}
            >
              <h1>{room.name}</h1>
            </Link>
          </div>
        );
      })}
      <HomePageClientWrapper />
    </main>
  );
}
