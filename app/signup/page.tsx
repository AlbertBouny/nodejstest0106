"use client"

import { UserAuthForm } from "@/components/UserAuthForm"
import { signUpFormSchema, type SignUpFormValues } from "@/lib/validations/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"

export default function SignUpPage() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpFormSchema),
  })

  const onSubmit = async (data: SignUpFormValues) => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Registration failed")
      }

      toast.success("Registration successful! Please sign in.")
      router.push("/login")
    } catch (error) {
      console.error("Registration error:", error)
      toast.error("Registration failed. Please try again.")
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
            isSignUp
            isLoading={isSubmitting}
            onSubmit={handleSubmit(onSubmit)}
            register={register}
            errors={errors}
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
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <a href="/terms" className="hover:text-brand underline underline-offset-4">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="hover:text-brand underline underline-offset-4">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
} 