"use client";

import { Button } from "@mantine/core";
import { joinRoom, unjoinRoom } from "../actions/action";

interface JoinRoomBtnProps {
  userId: string;
  creatorId: string;
  membersIdx: string[];
  roomId: string;
}

export const JoinRoomBtn: React.FC<JoinRoomBtnProps> = ({
  creatorId,
  membersIdx,
  userId,
  roomId,
}) => {
  return creatorId === userId || membersIdx.includes(userId) ? (
    <form action={() => unjoinRoom(roomId, userId)}>
      <Button type="submit">Unjoin</Button>
    </form>
  ) : (
    <form action={() => joinRoom(roomId, userId)}>
      <Button type="submit">Join</Button>
    </form>
  );
};
