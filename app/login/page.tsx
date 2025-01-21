"use client"

import { UserAuthForm } from "@/components/UserAuthForm";
import { LoginFormValues, loginFormSchema } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/auth/login", {
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

      toast.success("Logged in successfully!")
      // Redirect to home page after successful login
      window.location.href = "/"
    } catch (error: any) {
      toast.error(error.message || "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Image and Text */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-muted items-center justify-center overflow-hidden">
        <Image
          src="/images/culture/ancient_chinese_scroll_1_optimized.jpg"
          alt="Ancient Wisdom"
          fill
          className="absolute inset-0 object-cover brightness-[0.6]"
          priority
        />
        <div className="relative z-10 text-white max-w-lg mx-auto space-y-6 px-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            探索道家智慧
            <br />
            <span className="text-3xl font-normal">Explore Taoist Wisdom</span>
          </h1>
          <p className="text-lg text-gray-200">
            在这里，古老的智慧与现代生活完美融合，让我们带您开启一段充满启发的精神之旅。
          </p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div className="ml-3 text-left">
                <p className="text-sm font-medium text-white">专业解读</p>
                <p className="text-xs text-gray-300">Professional Guidance</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div className="ml-3 text-left">
                <p className="text-sm font-medium text-white">传统精粹</p>
                <p className="text-xs text-gray-300">Traditional Essence</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-8 lg:p-8 xl:p-12 bg-background">
        <div className="w-full max-w-[400px] space-y-6">
          {/* Logo and Title */}
          <div className="text-center">
            <Image
              src="/logo.svg"
              alt="TaoismZen Logo"
              width={40}
              height={40}
              className="mx-auto"
            />
            <h2 className="mt-4 text-2xl font-semibold text-foreground">Welcome back</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Please enter your details to sign in
            </p>
          </div>

          {/* Social Login Buttons */}
          <UserAuthForm />

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-muted"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-2 bg-background text-muted-foreground">OR CONTINUE WITH EMAIL</span>
            </div>
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                Email address
              </label>
              <input
                {...register("email")}
                type="email"
                autoComplete="email"
                className="appearance-none block w-full px-3 py-2 border border-input rounded-md shadow-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm bg-background"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1.5">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                autoComplete="current-password"
                className="appearance-none block w-full px-3 py-2 border border-input rounded-md shadow-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm bg-background"
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="mt-1 text-xs text-destructive">{errors.password.message}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  {...register("rememberMe")}
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-primary border-input rounded bg-background"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                  Remember me
                </label>
              </div>

              <Link href="/forgot-password" className="text-sm font-medium text-primary hover:text-primary/90">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/signup" className="font-medium text-primary hover:text-primary/90">
                Sign up for free
              </Link>
            </p>
          </div>

          {/* Terms */}
          <p className="text-center text-xs text-muted-foreground">
            By continuing, you agree to our{" "}
            <Link href="/terms" className="text-foreground hover:underline">Terms of Service</Link>
            {" "}and{" "}
            <Link href="/privacy" className="text-foreground hover:underline">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
