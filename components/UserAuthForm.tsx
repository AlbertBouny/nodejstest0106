"use client";

import { signIn } from "next-auth/react";
import * as React from "react";

import { Icons } from "@/components/Icons";
import { cn } from "@/lib/utils";
import { UserInfo } from "@/types/user";
import { useRouter } from "next/navigation";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  user?: UserInfo;
}

export function UserAuthForm({ className, user, ...props }: UserAuthFormProps) {
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false);
  const router = useRouter();

  const login = async (platform: string) => {
    // user已登录，返回首页
    if (user && user.userId) {
      router.push("/");
      return;
    }
    if (platform === "github") {
      setIsGitHubLoading(true);
    }
    if (platform === "google") {
      setIsGoogleLoading(true);
    }
    signIn(platform, {
      callbackUrl: `${window.location.origin}`,
    });
  };

  return (
    <div className={cn("grid gap-3", className)} {...props}>
      <button
        type="button"
        onClick={() => login("google")}
        disabled={isGoogleLoading}
        className="flex w-full items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-200"
      >
        {isGoogleLoading ? (
          <Icons.spinner className="h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="h-4 w-4" />
        )}
        Continue with Google
      </button>

      <button
        type="button"
        onClick={() => login("github")}
        disabled={isGitHubLoading}
        className="flex w-full items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:outline-none focus:ring-2 focus:ring-[#24292F]/50 focus:ring-offset-2 transition-colors duration-200"
      >
        {isGitHubLoading ? (
          <Icons.spinner className="h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="h-4 w-4" />
        )}
        Continue with GitHub
      </button>
    </div>
  );
}
