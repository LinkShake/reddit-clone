"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

export const RankingController = ({
  ranking,
  postId,
}: {
  ranking: number;
  postId: string;
}) => {
  const [rankingState, setRankingState] = useState(ranking);
  const pathname = usePathname();
  const roomId = pathname.slice(pathname.lastIndexOf("/") + 1);

  return (
    <>
      <button
        onClick={async () => {
          setRankingState(rankingState + 1);
          await fetch(`/editPostRanking/${roomId}`, {
            method: "PATCH",
            body: JSON.stringify({
              postId,
              action: "upvote",
            }),
          });
        }}
      >
        +
      </button>
      <span>{rankingState}</span>
      <button
        onClick={async () => {
          setRankingState(rankingState - 1);
          await fetch(`/editPostRanking/${roomId}`, {
            method: "PATCH",
            body: JSON.stringify({
              postId,
              action: "downvote",
            }),
          });
        }}
      >
        -
      </button>
    </>
  );
};
