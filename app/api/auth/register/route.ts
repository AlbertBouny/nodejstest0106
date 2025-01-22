import prisma from "@/lib/prisma"
import { signUpFormSchema } from "@/lib/validations/auth"
import { hash } from "bcryptjs"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const body = signUpFormSchema.parse(json)

    // Check if email already exists
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    })

    if (user) {
      return new NextResponse(
        JSON.stringify({
          error: "User with this email already exists",
        }),
        { status: 400 }
      )
    }

    const hashedPassword = await hash(body.password, 10)

    const newUser = await prisma.user.create({
      data: {
        email: body.email,
        firstName: body.firstName,
        lastName: body.lastName,
        password: hashedPassword,
      },
    })

    const { password: _, ...result } = newUser

    return new NextResponse(JSON.stringify(result))
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        error: error.message || "Something went wrong",
      }),
      { status: 500 }
    )
  }
} 