"use client";

import { Button } from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";

export const EditPostBtn = ({
  setIsEditModeOn,
}: {
  setIsEditModeOn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <form
      action={() => {
        setIsEditModeOn(true);
      }}
      className="action-form"
    >
      <Button type="submit" className="action-btn">
        <IconEdit color="white" />
      </Button>
    </form>
  );
};
