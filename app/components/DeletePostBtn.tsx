"use client";

import { usePathname } from "next/navigation";
import { deletePost } from "../actions/action";
import { IconTrash } from "@tabler/icons-react";

export const DeletePostBtn = ({ postId }: { postId: string }) => {
  const pathname = usePathname();
  const roomId = pathname.slice(pathname.lastIndexOf("/") + 1);

  return (
    <form
      action={() => {
        deletePost(roomId, postId);
      }}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <IconTrash color="gray" />
    </form>
  );
};
