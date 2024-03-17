"use client";

import { IconSearch } from "@tabler/icons-react";

interface Room {
  id: string;
  creatorId: string;
  name: string;
  description: string;
  numberOfMembers: number;
  membersId: string[];
}

export const SearchRoomBar = ({
  setRoomsState,
  originalRooms,
}: {
  setRoomsState: React.Dispatch<React.SetStateAction<Room[]>>;
  originalRooms: Room[];
}) => {
  return (
    <form action="">
      <input
        type="text"
        className="searchroombar"
        placeholder="Search for rooms..."
        onChange={async (e) => {
          e.preventDefault();

          if (e.target.value) {
            const res = await fetch("/searchRoom", {
              method: "POST",
              body: JSON.stringify({
                searchParam: e.target.value,
              }),
            });
            const data = await res.json();

            setRoomsState([...data.rooms]);
          } else {
            setRoomsState(originalRooms);
          }
        }}
      />
    </form>
  );
};
