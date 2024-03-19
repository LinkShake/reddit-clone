"use client";

import { useRef, useState } from "react";
import { addPost } from "../actions/action";
import { PostEditor } from "./PostEditor";

export const AddPostForm = ({ roomId }: { roomId: string }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [postContent, setPostContent] = useState("");
  return (
    <form
      ref={formRef}
      action={() => {
        addPost(postContent, roomId);
        formRef.current?.reset();
      }}
    >
      <PostEditor setPostContent={setPostContent} postContent={postContent} />
    </form>
  );
};
