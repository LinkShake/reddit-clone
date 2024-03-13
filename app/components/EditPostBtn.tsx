"use client";

import { Button } from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";

export const EditPostBtn = () => {
  return (
    <form action={() => {}} className="action-form">
      <Button type="submit" className="action-btn">
        <IconEdit color="white" />
      </Button>
    </form>
  );
};
