"use client";

import { Button } from "@mantine/core";
import { joinRoom } from "../actions/action";

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
    <Button disabled>Joined</Button>
  ) : (
    <form action={() => joinRoom(roomId, userId)}>
      <Button type="submit">Join</Button>
    </form>
  );
};
