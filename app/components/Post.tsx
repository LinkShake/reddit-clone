import { auth } from "@clerk/nextjs";
import { Button } from "@mantine/core";
import { EditPostBtn } from "./EditPostBtn";
import { DeletePostBtn } from "./DeletePostBtn";
import { RankingController } from "./RankingController";
import { AddCommentForm } from "./AddCommentForm";

interface PostProps {
  authorId: string;
  textContent: string;
  ranking: number;
  postId: string;
  comments: Comment[];
}

interface Comment {
  id: string;
  authorId: string;
  ranking: number;
  textContent: string;
  postId: string;
}

export const Post: React.FC<PostProps> = ({
  authorId,
  ranking,
  textContent,
  postId,
  comments,
}) => {
  const { userId } = auth();

  return (
    <>
      <span dangerouslySetInnerHTML={{ __html: textContent }}></span>
      <RankingController postId={postId} ranking={ranking} />
      {authorId === userId && (
        <>
          <EditPostBtn />
          <DeletePostBtn postId={postId} />
        </>
      )}
      <AddCommentForm postId={postId} />
      {comments.map((comment) => {
        return <div key={comment.id}>{comment.textContent}</div>;
      })}
    </>
  );
};
