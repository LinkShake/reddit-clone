import { auth, clerkClient } from "@clerk/nextjs";
import { Avatar } from "@mantine/core";
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

export const Post: React.FC<PostProps> = async ({
  authorId,
  ranking,
  textContent,
  postId,
  comments,
}) => {
  const { userId } = auth();

  const user = await clerkClient.users.getUser(userId as string);

  return (
    <div className="post-component">
      <div className="author-label">
        <Avatar src={user.imageUrl} />
        <h2>{user.username}</h2>
      </div>
      <div className="post-container">
        <div className="ranking">
          <RankingController postId={postId} ranking={ranking} />
        </div>
        <div className="post-body">
          <span dangerouslySetInnerHTML={{ __html: textContent }}></span>
          {authorId === userId && (
            <div className="post-controls">
              <EditPostBtn />
              <DeletePostBtn postId={postId} />
            </div>
          )}
        </div>
      </div>
      <br />
    </div>
  );
};
