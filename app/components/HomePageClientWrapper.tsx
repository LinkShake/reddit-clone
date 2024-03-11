"use client";

import { useState } from "react";
import { CreateRoomForm } from "./CreateRoomForm";
import { CreateRoomBtn } from "./CreateRoomBtn";

export const HomePageClientWrapper = () => {
  const [isCreateRoomFormOpen, setIsCreateRoomFormOpen] = useState(false);

  return (
    <>
      <CreateRoomForm
        isCreateRoomFormOpen={isCreateRoomFormOpen}
        setIsCreateRoomFormOpen={setIsCreateRoomFormOpen}
      />
      <CreateRoomBtn
        isCreateRoomFormOpen={isCreateRoomFormOpen}
        setIsCreateRoomFormOpen={setIsCreateRoomFormOpen}
      />
    </>
  );
};
