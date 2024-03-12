import { auth } from "@clerk/nextjs";
import { Button } from "@mantine/core";
import { EditPostBtn } from "./EditPostBtn";
import { DeletePostBtn } from "./DeletePostBtn";
import { RankingController } from "./RankingController";

interface PostProps {
  authorId: string;
  textContent: string;
  ranking: number;
  postId: string;
}

export const Post: React.FC<PostProps> = ({
  authorId,
  ranking,
  textContent,
  postId,
}) => {
  const { userId } = auth();

  return (
    <>
      <span>{textContent}</span>
      <RankingController postId={postId} ranking={ranking} />
      {authorId === userId && (
        <>
          <EditPostBtn />
          <DeletePostBtn postId={postId} />
        </>
      )}
    </>
  );
};
