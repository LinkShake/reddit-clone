"use client";

import { usePathname } from "next/navigation";
import { deletePost } from "../actions/action";
import { IconTrash } from "@tabler/icons-react";
import { Button } from "@mantine/core";

export const DeletePostBtn = ({ postId }: { postId: string }) => {
  const pathname = usePathname();
  const roomId = pathname.slice(pathname.lastIndexOf("/") + 1);

  return (
    <form
      action={() => {
        deletePost(roomId, postId);
      }}
      className="action-form"
      // style={{
      //   width: "100%",
      //   display: "flex",
      //   justifyContent: "center",
      // }}
    >
      <Button type="submit" className="action-btn">
        <IconTrash color="white" />
      </Button>
    </form>
  );
};
