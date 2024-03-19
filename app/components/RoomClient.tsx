"use client";

import { useContext, useState } from "react";
import { AddPostForm } from "./AddPostForm";
import { JoinRoomBtn } from "./JoinRoomBtn";
import { Post } from "./Post";
import { DeleteRoomModalContext } from "../context/deleteRoomModalContext";
import { RoomCreatorTools } from "./RoomCreatorTools";
import { ConfirmRoomDeleteModal } from "./ConfirmRoomDeleteModal";

export const RoomClient = ({
  userId,
  room,
  roomId,
}: {
  userId: string;
  room: any;
  roomId: string;
}) => {
  const [isDeleteRoomModalOpen, setIsDeleteRoomModalOpen] = useState(false);
  const deleteRoomModalContext = useContext(DeleteRoomModalContext);

  return (
    <div>
      <DeleteRoomModalContext.Provider
        value={{
          state: isDeleteRoomModalOpen,
          setState: setIsDeleteRoomModalOpen,
        }}
      >
        <div className="room-header">
          <h1>{room?.name}</h1>
          <h3>{room?.description}</h3>
        </div>
        <div
          style={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {userId !== (room?.creatorId as string) ? (
            <JoinRoomBtn
              creatorId={room?.creatorId as string}
              membersIdx={room?.membersId as string[]}
              roomId={room?.id as string}
              userId={userId as string}
            />
          ) : (
            <RoomCreatorTools />
          )}
        </div>
        <br />
        <AddPostForm roomId={roomId} />
        <br />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {room?.posts?.length ? (
            <>
              {room?.posts?.map((post: any) => {
                return <Post key={post.id} {...{ ...post, postId: post.id }} />;
              })}
            </>
          ) : (
            "No posts available"
          )}
        </div>
        {isDeleteRoomModalOpen && <ConfirmRoomDeleteModal roomId={roomId} />}
      </DeleteRoomModalContext.Provider>
    </div>
  );
};
