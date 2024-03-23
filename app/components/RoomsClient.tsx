"use client";

import Link from "next/link";
import { useState } from "react";
import { SearchRoomBar } from "./SearchRoomBar";

interface RoomsClientProps {
  rooms: Room[];
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

export const RoomsClient: React.FC<RoomsClientProps> = ({
  rooms,
  roomsState,
  setRoomsState,
}) => {
  return (
    <>
      <SearchRoomBar setRoomsState={setRoomsState} originalRooms={rooms} />
      {roomsState.length ? (
        roomsState?.map((room) => {
          return (
            <div key={room.id} className="room-preview">
              <Link
                href={`/room/${room.id}`}
                style={{
                  color: "black",
                }}
                className="room-link"
              >
                <h1>{room.name}</h1>
              </Link>
            </div>
          );
        })
      ) : (
        <center>No rooms</center>
      )}
    </>
  );
};
