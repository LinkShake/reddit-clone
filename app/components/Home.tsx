"use client";

import { useState } from "react";
import { HomePageClientWrapper } from "./HomePageClientWrapper";
import { RoomsClient } from "./RoomsClient";

interface HomeProps {
  rooms: Room[];
}

interface Room {
  id: string;
  creatorId: string;
  name: string;
  description: string;
  numberOfMembers: number;
  membersId: string[];
}

export const HomeClient: React.FC<HomeProps> = ({ rooms }) => {
  const [roomsState, setRoomsState] = useState(rooms);

  return (
    <>
      <RoomsClient {...{ rooms, roomsState, setRoomsState }} />
      <HomePageClientWrapper
        roomsState={roomsState}
        setRoomsState={setRoomsState}
      />
    </>
  );
};
