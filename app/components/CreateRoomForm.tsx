"use client";

import { useEffect } from "react";
import { createRoom } from "../actions/action";
import { Button } from "@mantine/core";

interface CreateRoomFormProps {
  isCreateRoomFormOpen: boolean;
  setIsCreateRoomFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreateRoomForm: React.FC<CreateRoomFormProps> = ({
  isCreateRoomFormOpen,
  setIsCreateRoomFormOpen,
}) => {
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setIsCreateRoomFormOpen(false);
    });
  });

  return (
    isCreateRoomFormOpen && (
      <>
        <div
          className="overlay"
          onClick={() => {
            setIsCreateRoomFormOpen(false);
          }}
        ></div>
        <form action={createRoom} className="create-room-modal">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label htmlFor="roomName">Room name</label>
            <input
              type="text"
              id="roomName"
              name="roomName"
              maxLength={20}
              minLength={1}
              placeholder="Max 20 chars..."
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label htmlFor="roomDescription">Room description</label>
            <input
              type="text"
              id="roomDescription"
              name="roomDescription"
              maxLength={50}
              minLength={1}
              placeholder="Max 50 chars..."
            />
          </div>
          <Button type="submit">Create</Button>
        </form>
      </>
    )
  );
};
