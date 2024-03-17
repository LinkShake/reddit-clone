import { auth, clerkClient } from "@clerk/nextjs";
import { Avatar } from "@mantine/core";
import { EditPostBtn } from "./EditPostBtn";
import { DeletePostBtn } from "./DeletePostBtn";
import { RankingController } from "./RankingController";
import { PostClient } from "./PostClient";

interface PostProps {
  authorId: string;
  textContent: string;
  ranking: number;
  postId: string;
  roomId: string;
  comments: Comment[];
}

interface Comment {
  id: string;
  authorId: string;
  ranking: number;
  textContent: string;
  postId: string;
}

export const Post: React.FC<PostProps> = async (props) => {
  const { userId } = auth();

  const user = await clerkClient.users.getUser(props.authorId as string);

  return (
    <PostClient
      {...{
        ...props,
        userProfileImg: user.imageUrl as string,
        username: user.username as string,
        userId: userId as string,
      }}
    />
  );
};
