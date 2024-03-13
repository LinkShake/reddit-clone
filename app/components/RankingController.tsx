"use client";

import { Button } from "@mantine/core";
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "50%",
      }}
    >
      <Button
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
        // style={{
        //   backgroundColor: "transparent",
        //   color: "gray",
        //   border: "none",
        // }}
      >
        +
      </Button>
      <span>{rankingState}</span>
      <Button
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
        // style={{
        //   backgroundColor: "transparent",
        //   color: "gray",
        //   border: "none",
        // }}
      >
        -
      </Button>
    </div>
  );
};
