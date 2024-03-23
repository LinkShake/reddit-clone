"use client";

import { useState } from "react";
import { CreateRoomForm } from "./CreateRoomForm";
import { CreateRoomBtn } from "./CreateRoomBtn";

interface HomePageClientWrapperProps {
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

export const HomePageClientWrapper: React.FC<HomePageClientWrapperProps> = ({
  roomsState,
  setRoomsState,
}) => {
  const [isCreateRoomFormOpen, setIsCreateRoomFormOpen] = useState(false);

  return (
    <>
      <CreateRoomForm
        isCreateRoomFormOpen={isCreateRoomFormOpen}
        setIsCreateRoomFormOpen={setIsCreateRoomFormOpen}
        roomsState={roomsState}
        setRoomsState={setRoomsState}
      />
      <CreateRoomBtn
        isCreateRoomFormOpen={isCreateRoomFormOpen}
        setIsCreateRoomFormOpen={setIsCreateRoomFormOpen}
      />
    </>
  );
};
