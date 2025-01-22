import * as z from "zod"

export const loginFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
  rememberMe: z.boolean().optional(),
})

export const signUpFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters long.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters long.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
  confirmPassword: z.string(),
  terms: z.boolean().refine((data) => data === true, {
    message: "You must accept the terms and conditions.",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"],
})

export type LoginFormValues = z.infer<typeof loginFormSchema>
export type SignUpFormValues = z.infer<typeof signUpFormSchema> 