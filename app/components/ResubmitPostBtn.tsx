"use client";

import { Button } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { editPost } from "../actions/action";

export const ResubmitPostBtn = ({
  setIsEditModeOn,
  postId,
  roomId,
  postContent,
}: {
  setIsEditModeOn: React.Dispatch<React.SetStateAction<boolean>>;
  postId: string;
  roomId: string;
  postContent: string;
}) => {
  return (
    <form
      action={() => {
        editPost(postId, roomId, postContent);
        setIsEditModeOn(false);
      }}
      className="action-form"
    >
      <Button type="submit">
        <IconCheck />
      </Button>
    </form>
  );
};
