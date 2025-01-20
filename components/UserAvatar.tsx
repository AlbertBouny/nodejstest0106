import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { UserInfo } from "@/types/user";
import { AvatarProps } from "@radix-ui/react-avatar";

interface UserAvatarProps extends AvatarProps {
  user: Pick<UserInfo, "email" | "role">;
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
      <AvatarFallback>
        {user.email ? user.email.charAt(0).toUpperCase() : "U"}
      </AvatarFallback>
    </Avatar>
  );
}
