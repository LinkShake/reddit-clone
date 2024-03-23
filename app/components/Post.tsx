import { auth, currentUser } from "@clerk/nextjs";
import { PostClient } from "./PostClient";

export const Post = (props: any) => {
  return (
    <PostClient
      {...{
        ...props,
        userProfileImg: props?.imageUrl as string,
        username: props?.username as string,
        userId: props?.userId as string,
      }}
    />
  );
};
