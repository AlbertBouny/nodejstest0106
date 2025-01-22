"use client"

import { UserAuthForm } from "@/components/UserAuthForm";
import { loginFormSchema, type LoginFormValues } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (!result?.ok) {
        throw new Error("Invalid credentials");
      }

      toast.success("Logged in successfully!");
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="container relative min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900">
          <Image
            src="/images/auth/login-bg.jpg"
            alt="Login Background"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Link href="/" className="hover:text-primary transition-colors">
            返回首页
          </Link>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              "道法自然，顺应天地。修身养性，内外兼修。"
            </p>
            <footer className="text-sm">老子《道德经》</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              欢迎回来
            </h1>
            <p className="text-sm text-muted-foreground">
              请输入您的账号信息进行登录
            </p>
          </div>
          <UserAuthForm
            isLoading={isSubmitting}
            onSubmit={handleSubmit(onSubmit)}
            register={register}
            errors={errors}
          />
          <p className="px-8 text-center text-sm text-muted-foreground">
            还没有账号？{" "}
            <Link
              href="/signup"
              className="underline underline-offset-4 hover:text-primary"
            >
              立即注册
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
