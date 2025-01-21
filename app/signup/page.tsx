"use client"

import { Captcha } from "@/components/Captcha";
import { PasswordStrengthIndicator } from "@/components/PasswordStrengthIndicator";
import { UserAuthForm } from "@/components/UserAuthForm";
import { SignupFormValues, signupFormSchema } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupFormSchema),
  });

  const password = watch("password", "");

  const onSubmit = async (data: SignupFormValues) => {
    if (!isCaptchaValid) {
      toast.error("Please verify the captcha first");
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.error || "Something went wrong");
      }

      toast.success("Account created successfully!");
      // Redirect to login page after successful registration
      window.location.href = "/login";
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

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

      {/* Right Section - Sign Up Form */}
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
            <h2 className="mt-4 text-2xl font-semibold text-foreground">Create an account</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Join us on a journey of spiritual discovery
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
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1.5">
                  First name
                </label>
                <input
                  {...register("firstName")}
                  type="text"
                  autoComplete="given-name"
                  className="appearance-none block w-full px-3 py-2 border border-input rounded-md shadow-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm bg-background"
                  placeholder="First name"
                />
                {errors.firstName && (
                  <p className="mt-1 text-xs text-destructive">{errors.firstName.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1.5">
                  Last name
                </label>
                <input
                  {...register("lastName")}
                  type="text"
                  autoComplete="family-name"
                  className="appearance-none block w-full px-3 py-2 border border-input rounded-md shadow-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm bg-background"
                  placeholder="Last name"
                />
                {errors.lastName && (
                  <p className="mt-1 text-xs text-destructive">{errors.lastName.message}</p>
                )}
              </div>
            </div>

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
                autoComplete="new-password"
                className="appearance-none block w-full px-3 py-2 border border-input rounded-md shadow-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm bg-background"
                placeholder="Create a password"
              />
              {errors.password && (
                <p className="mt-1 text-xs text-destructive">{errors.password.message}</p>
              )}
              <div className="mt-2">
                <PasswordStrengthIndicator password={password} />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground mb-1.5">
                Confirm password
              </label>
              <input
                {...register("confirmPassword")}
                type="password"
                autoComplete="new-password"
                className="appearance-none block w-full px-3 py-2 border border-input rounded-md shadow-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm bg-background"
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-xs text-destructive">{errors.confirmPassword.message}</p>
              )}
            </div>

            <div className="flex items-center">
              <input
                {...register("terms")}
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-input rounded bg-background"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-muted-foreground">
                I agree to the{" "}
                <Link href="/terms" className="text-foreground hover:underline">Terms of Service</Link>
                {" "}and{" "}
                <Link href="/privacy" className="text-foreground hover:underline">Privacy Policy</Link>
              </label>
            </div>
            {errors.terms && (
              <p className="text-xs text-destructive">{errors.terms.message}</p>
            )}

            {/* Captcha */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Verify Captcha
              </label>
              <Captcha onValidate={setIsCaptchaValid} />
            </div>

            <button
              type="submit"
              disabled={isLoading || !isCaptchaValid}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Creating account..." : "Create account"}
            </button>
          </form>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-primary hover:text-primary/90">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 