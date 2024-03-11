"use client";

import { Button } from "@mantine/core";

interface CreateRoomBtnProps {
  isCreateRoomFormOpen: boolean;
  setIsCreateRoomFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreateRoomBtn: React.FC<CreateRoomBtnProps> = ({
  isCreateRoomFormOpen,
  setIsCreateRoomFormOpen,
}) => {
  return (
    <Button
      onClick={() => {
        setIsCreateRoomFormOpen(true);
      }}
    >
      Create room
    </Button>
  );
};
