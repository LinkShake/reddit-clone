"use client";

import { useEffect } from "react";
import { createRoom } from "../actions/action";
import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";

interface CreateRoomFormProps {
  isCreateRoomFormOpen: boolean;
  setIsCreateRoomFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  roomsState: Room[];
  setRoomsState: React.Dispatch<React.SetStateAction<Room[]>>;
}

interface Room {
  id: string;
  creatorId: string;
  name: string;
  description: string;
  numberOfMembers: number;
  membersId: string[];
}

export const CreateRoomForm: React.FC<CreateRoomFormProps> = ({
  isCreateRoomFormOpen,
  setIsCreateRoomFormOpen,
  roomsState,
  setRoomsState,
}) => {
  const router = useRouter();

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
        <form
          action={async (formData) => {
            const data = await createRoom(formData);
            setIsCreateRoomFormOpen(false);
            setRoomsState([...roomsState, { ...data }]);
          }}
          className="create-room-modal"
        >
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
