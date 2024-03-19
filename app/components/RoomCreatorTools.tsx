"use client";

import { Button } from "@mantine/core";
import { useContext } from "react";
import { DeleteRoomModalContext } from "../context/deleteRoomModalContext";

export const RoomCreatorTools = () => {
  const deleteRoomModalContext = useContext(DeleteRoomModalContext);

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      <Button disabled>Creator</Button>
      <Button
        onClick={() => {
          deleteRoomModalContext?.setState(true);
        }}
      >
        Delete room
      </Button>
    </div>
  );
};
