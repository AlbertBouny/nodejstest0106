import prisma from "@/lib/prisma"
import { loginFormSchema } from "@/lib/validations/auth"
import { compare } from "bcryptjs"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const body = loginFormSchema.parse(json)

    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    })

    if (!user || !user.password) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      )
    }

    const isValidPassword = await compare(body.password, user.password)

    if (!isValidPassword) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      )
    }

    return NextResponse.json(
      {
        user: {
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        },
      },
      { status: 200 }
    )
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    )
  }
} 