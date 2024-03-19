"use client";

import { useContext, useEffect } from "react";
import { DeleteRoomModalContext } from "../context/deleteRoomModalContext";
import { Button, Flex } from "@mantine/core";
import { deleteRoom } from "../actions/action";

export const ConfirmRoomDeleteModal = ({ roomId }: { roomId: string }) => {
  const deleteRoomModalContext = useContext(DeleteRoomModalContext);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") deleteRoomModalContext?.setState(false);
    });
  });

  return (
    <>
      <div
        className="overlay"
        onClick={() => {
          deleteRoomModalContext?.setState(false);
        }}
      ></div>
      <form
        action={() => {
          deleteRoom(roomId);
          deleteRoomModalContext?.setState(false);
        }}
        className="delete-room-modal"
      >
        <h1
          style={{
            padding: "0",
            margin: "0",
          }}
        >
          Irreversible action
        </h1>
        <h2
          style={{
            padding: "0",
            margin: "0",
          }}
        >
          Are you sure you wanna delete the room?
        </h2>
        <Flex gap={10} w={"100%"} justify={"center"}>
          <Button type="submit" color="red">
            Yes
          </Button>
          <Button
            onClick={() => {
              deleteRoomModalContext?.setState(false);
            }}
          >
            No
          </Button>
        </Flex>
      </form>
    </>
  );
};
