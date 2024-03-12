"use client";

import { useRef } from "react";
import { addComment } from "../actions/action";
import { usePathname } from "next/navigation";

export const AddCommentForm = ({ postId }: { postId: string }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const pathname = usePathname();
  const roomId = pathname.slice(pathname.lastIndexOf("/") + 1);

  return (
    <form
      ref={formRef}
      action={(formData) => {
        addComment(formData, postId, roomId);
        formRef.current?.reset();
      }}
    >
      <label htmlFor="commentContent"></label>
      <input type="text" id="commentContent" name="commentContent" />
      <button type="submit">Comment</button>
    </form>
  );
};
