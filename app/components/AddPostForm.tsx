"use client";

import { useRef } from "react";
import { addPost } from "../actions/action";

export const AddPostForm = ({ roomId }: { roomId: string }) => {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={formRef}
      action={(formData) => {
        addPost(formData, roomId);
        formRef.current?.reset();
      }}
    >
      <label htmlFor="postContent"></label>
      <input type="text" id="postContent" name="postContent" />
      <button type="submit">Post</button>
    </form>
  );
};
