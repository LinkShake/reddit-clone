"use client";

import { Button } from "@mantine/core";
import { usePathname } from "next/navigation";
import { deletePost } from "../actions/action";

export const DeletePostBtn = ({ postId }: { postId: string }) => {
  const pathname = usePathname();
  const roomId = pathname.slice(pathname.lastIndexOf("/") + 1);

  return (
    <form
      action={() => {
        deletePost(roomId, postId);
      }}
    >
      <Button type="submit">Delete</Button>
    </form>
  );
};
