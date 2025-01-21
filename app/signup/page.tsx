"use client"

import { UserAuthForm } from "@/components/UserAuthForm"
import { SignUpFormValues, signUpFormSchema } from "@/lib/validations/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpFormSchema),
  })

  const onSubmit = async (data: SignUpFormValues) => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const json = await response.json()

      if (!response.ok) {
        throw new Error(json.error || "Something went wrong")
      }

      toast.success("Account created successfully!")
      // Redirect to login page after successful registration
      window.location.href = "/login"
    } catch (error: any) {
      toast.error(error.message || "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container relative min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900">
          <Image
            src="/images/auth/signup-bg.jpg"
            alt="Sign Up Background"
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
              "修道之人，当以静心为本，以慧根为基，以善行为径。"
            </p>
            <footer className="text-sm">道教箴言</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              创建账号
            </h1>
            <p className="text-sm text-muted-foreground">
              请填写以下信息完成注册
            </p>
          </div>
          <UserAuthForm
            isLoading={isLoading}
            onSubmit={handleSubmit(onSubmit)}
            register={register}
            errors={errors}
            isSignUp
          />
          <p className="px-8 text-center text-sm text-muted-foreground">
            已有账号？{" "}
            <Link
              href="/login"
              className="underline underline-offset-4 hover:text-primary"
            >
              立即登录
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
} 