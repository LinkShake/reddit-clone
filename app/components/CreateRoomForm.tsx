"use client";

import { createRoom } from "../actions/action";

interface CreateRoomFormProps {
  isCreateRoomFormOpen: boolean;
  setIsCreateRoomFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreateRoomForm: React.FC<CreateRoomFormProps> = ({
  isCreateRoomFormOpen,
  setIsCreateRoomFormOpen,
}) => {
  return (
    isCreateRoomFormOpen && (
      <form action={createRoom}>
        <label htmlFor="roomName">Room name</label>
        <input type="text" id="roomName" name="roomName" />
        <label htmlFor="roomDescription">Room description</label>
        <input type="text" id="roomDescription" name="roomDescription" />
        <button type="submit">submit</button>
      </form>
    )
  );
};
