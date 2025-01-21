import prisma from "@/lib/prisma"
import { signupFormSchema } from "@/lib/validations/auth"
import { hash } from "bcryptjs"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const body = signupFormSchema.parse(json)

    // Check if email already exists
    const exists = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    })

    if (exists) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 400 }
      )
    }

    const hashedPassword = await hash(body.password, 10)

    const user = await prisma.user.create({
      data: {
        email: body.email,
        firstName: body.firstName,
        lastName: body.lastName,
        password: hashedPassword,
      },
    })

    return NextResponse.json(
      {
        user: {
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        },
      },
      { status: 201 }
    )
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    )
  }
} 