"use client";

import { User } from "@clerk/nextjs/api";
import { Avatar } from "@mantine/core";
import { DeletePostBtn } from "./DeletePostBtn";
import { EditPostBtn } from "./EditPostBtn";
import { RankingController } from "./RankingController";
import { useEffect, useState } from "react";
import { PostEditor } from "./PostEditor";
import { ResubmitPostBtn } from "./ResubmitPostBtn";

interface PostClientProps {
  authorId: string;
  textContent: string;
  ranking: number;
  postId: string;
  roomId: string;
  userProfileImg: string;
  username: string;
  userId: string;
}

export const PostClient: React.FC<PostClientProps> = ({
  authorId,
  postId,
  ranking,
  textContent,
  roomId,
  userProfileImg,
  username,
  userId,
}) => {
  const [isEditModeOn, setIsEditModeOn] = useState(false);
  const [postContent, setPostContent] = useState(textContent);

  return (
    <div className="post-component">
      <div className="author-label">
        <Avatar src={userProfileImg} />
        <h2>{username}</h2>
      </div>
      <div className="post-container">
        <div className="ranking">
          <RankingController postId={postId} ranking={ranking} />
        </div>
        <div className="post-body">
          {!isEditModeOn ? (
            <span dangerouslySetInnerHTML={{ __html: textContent }}></span>
          ) : (
            <PostEditor
              postContent={postContent}
              setPostContent={setPostContent}
              variant="edit"
            />
          )}
          {authorId === userId && (
            <div className="post-controls">
              {!isEditModeOn ? (
                <EditPostBtn setIsEditModeOn={setIsEditModeOn} />
              ) : (
                <ResubmitPostBtn
                  setIsEditModeOn={setIsEditModeOn}
                  postId={postId}
                  roomId={roomId}
                  postContent={postContent}
                />
              )}
              <DeletePostBtn postId={postId} />
            </div>
          )}
        </div>
      </div>
      <br />
    </div>
  );
};
