import { createContext } from "react";

interface DeleteRoomModalContextValue {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DeleteRoomModalContext = createContext<
  DeleteRoomModalContextValue | undefined
>(undefined);
