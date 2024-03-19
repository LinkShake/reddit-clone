import { SignOutButton, auth, clerkClient } from "@clerk/nextjs";
import { Avatar, Button } from "@mantine/core";
import { HomeBtn } from "./HomeBtn";
import { IconLogout } from "@tabler/icons-react";

export const UserNavbar = async () => {
  const { userId } = auth();

  const user = await clerkClient.users.getUser(userId as string);

  return (
    <nav className="user-nav">
      <HomeBtn />
      <div className="user-area">
        <Avatar src={user.imageUrl} />
        <SignOutButton>
          <Button>
            <IconLogout />
          </Button>
        </SignOutButton>
      </div>
    </nav>
  );
};
